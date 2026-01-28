import nodemailer from "nodemailer";

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website: string;
  recipientEmail: string;
}

// Configurar transportador de email (use suas credenciais)
const transporter = nodemailer.createTransport({
  service: "gmail", // ou outro serviço de email
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { firstName, lastName, email, phone, website, recipientEmail }: ContactData = req.body;

  // Validar dados
  if (!firstName || !lastName || !email || !phone || !recipientEmail) {
    return res.status(400).json({ error: "Dados incompletos" });
  }

  try {
    // Email para o suporte
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: `Novo contato de ${firstName} ${lastName} - LeadsFlow API`,
      html: `
        <h2>Novo Contato de Especialista</h2>
        <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website || "Não informado"}</p>
        <hr>
        <p><em>Contato realizado via formulário da landing page.</em></p>
      `,
    });

    // Email de confirmação para o cliente
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Recebemos sua solicitação - LeadsFlow API",
      html: `
        <h2>Obrigado por entrar em contato!</h2>
        <p>Olá ${firstName},</p>
        <p>Recebemos sua solicitação e em breve um especialista entrará em contato através do telefone ou email fornecido.</p>
        <p>Enquanto isso, conheça mais sobre nossa plataforma em <a href="https://app.leadsflowapi.com">app.leadsflowapi.com</a></p>
        <hr>
        <p><strong>LeadsFlow API</strong><br>Maximize suas vendas com o poder da IA</p>
      `,
    });

    res.status(200).json({ success: true, message: "Formulário enviado com sucesso" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({ error: "Erro ao enviar formulário" });
  }
}
