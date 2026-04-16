import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Zap className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground">LeadsFlow</span>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3">Política de Privacidade</h1>
          <p className="text-muted-foreground text-sm">Última atualização: 16 de Abril de 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Introdução</h2>
            <p>
              A <strong className="text-foreground">LeadsFlow</strong> ("nós", "nosso" ou "Empresa") respeita a sua privacidade e está comprometida em proteger os dados pessoais que você nos fornece. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações em conformidade com a <strong className="text-foreground">Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Dados que Coletamos</h2>
            <p>Podemos coletar os seguintes tipos de dados:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Dados de cadastro:</strong> nome, e-mail, telefone, empresa e cargo ao criar sua conta.</li>
              <li><strong className="text-foreground">Dados de uso:</strong> informações sobre como você interage com a plataforma, funcionalidades acessadas e preferências.</li>
              <li><strong className="text-foreground">Dados de faturamento:</strong> informações necessárias para processar pagamentos, tratadas por gateways seguros e certificados.</li>
              <li><strong className="text-foreground">Dados técnicos:</strong> endereço IP, tipo de navegador, sistema operacional e cookies de sessão.</li>
              <li><strong className="text-foreground">Comunicações:</strong> mensagens que você nos envia via chat de suporte, e-mail ou formulários de contato.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Finalidade do Tratamento</h2>
            <p>Utilizamos os seus dados para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer, operar e melhorar os nossos serviços;</li>
              <li>Processar pagamentos e gerir a sua assinatura;</li>
              <li>Enviar comunicações transacionais e, com o seu consentimento, comunicações de marketing;</li>
              <li>Cumprir obrigações legais e regulatórias;</li>
              <li>Prevenir fraudes e garantir a segurança da plataforma;</li>
              <li>Oferecer suporte técnico e atendimento ao cliente.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Compartilhamento de Dados</h2>
            <p>
              Não vendemos os seus dados pessoais. Podemos compartilhá-los apenas com:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Prestadores de serviço:</strong> parceiros técnicos que nos auxiliam na operação da plataforma (ex: processadores de pagamento, servidores de e-mail), sempre sob acordos de confidencialidade.</li>
              <li><strong className="text-foreground">Autoridades competentes:</strong> quando exigido por lei, ordem judicial ou para proteger os nossos direitos legais.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Cookies</h2>
            <p>
              Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência, analisar o tráfego e personalizar conteúdo. Você pode gerir as suas preferências de cookies nas configurações do seu navegador. A desativação de cookies pode limitar algumas funcionalidades da plataforma.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Retenção de Dados</h2>
            <p>
              Mantemos os seus dados enquanto a sua conta estiver ativa ou pelo tempo necessário para prestar os serviços contratados. Após o encerramento da conta, podemos reter dados por até <strong className="text-foreground">5 anos</strong> para cumprimento de obrigações legais, fiscais e regulatórias.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Seus Direitos (LGPD)</h2>
            <p>Nos termos da LGPD, você tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar a existência de tratamento dos seus dados;</li>
              <li>Acessar os seus dados pessoais;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Portar os seus dados para outro fornecedor de serviço;</li>
              <li>Revogar o consentimento a qualquer momento;</li>
              <li>Opor-se ao tratamento realizado com base em interesse legítimo.</li>
            </ul>
            <p>
              Para exercer os seus direitos, entre em contacto através do e-mail: <strong className="text-foreground">privacidade@leadsflowapi.com</strong>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acesso não autorizado, perda, alteração ou destruição, incluindo criptografia de ponta a ponta, autenticação de dois fatores e servidores hospedados no Brasil com certificação de segurança.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">9. Alterações a esta Política</h2>
            <p>
              Podemos atualizar esta Política periodicamente. Notificaremos sobre alterações significativas por e-mail ou através de um aviso na plataforma. O uso continuado dos nossos serviços após a notificação constitui a sua aceitação das alterações.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">10. Contacto</h2>
            <p>
              Para questões relacionadas com a privacidade, entre em contacto com o nosso Encarregado de Proteção de Dados (DPO):
            </p>
            <ul className="list-none space-y-1 pl-0">
              <li><strong className="text-foreground">E-mail:</strong> privacidade@leadsflowapi.com</li>
              <li><strong className="text-foreground">Empresa:</strong> LeadsFlow Tecnologia Ltda.</li>
              <li><strong className="text-foreground">País:</strong> Brasil</li>
            </ul>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} LeadsFlow. Todos os direitos reservados.
          <span className="mx-2">·</span>
          <a href="/termos" className="hover:text-foreground transition-colors">Termos de Uso</a>
          <span className="mx-2">·</span>
          <a href="/politica" className="hover:text-foreground transition-colors">Política de Privacidade</a>
        </div>
      </footer>
    </div>
  );
}
