import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";

export default function TermsOfUse() {
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
          <h1 className="text-4xl font-bold mb-3">Termos de Uso</h1>
          <p className="text-muted-foreground text-sm">Última atualização: 16 de Abril de 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
            <p>
              Ao aceder, registar-se ou utilizar a plataforma <strong className="text-foreground">LeadsFlow</strong> ("Plataforma"), o utilizador ("você" ou "Cliente") concorda integralmente com estes Termos de Uso. Caso não concorde, deverá cessar imediatamente o uso da Plataforma.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Descrição do Serviço</h2>
            <p>
              A LeadsFlow é uma plataforma SaaS de gestão de leads, automação de vendas e CRM com inteligência artificial. Os nossos serviços incluem, sem limitação:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>CRM com funil de vendas visual (Kanban);</li>
              <li>Automação de fluxos e follow-ups;</li>
              <li>Agentes de IA para qualificação e conversão de leads;</li>
              <li>Integrações com WhatsApp, Instagram, Facebook, Telegram, E-mail, SMS e API;</li>
              <li>Analytics e relatórios em tempo real;</li>
              <li>Gestão de equipa e distribuição de leads.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Cadastro e Conta</h2>
            <p>
              Para utilizar a Plataforma, é necessário criar uma conta fornecendo informações verdadeiras, completas e atualizadas. Você é responsável por:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Manter a confidencialidade das suas credenciais de acesso;</li>
              <li>Todas as atividades realizadas com a sua conta;</li>
              <li>Notificar-nos imediatamente em caso de acesso não autorizado.</li>
            </ul>
            <p>
              A LeadsFlow reserva-se o direito de recusar ou cancelar registos a seu critério, especialmente em casos de informações falsas ou violação destes Termos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Planos e Pagamentos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Os planos e respetivos preços estão disponíveis na página de <a href="/#planos" className="text-primary hover:underline">Planos</a>;</li>
              <li>Os pagamentos são processados de forma segura por gateways certificados;</li>
              <li>As assinaturas são renovadas automaticamente no período contratado;</li>
              <li>O cancelamento pode ser efetuado a qualquer momento através do painel de controlo, com efeito no final do período faturado;</li>
              <li>Não são efetuados reembolsos de períodos parcialmente utilizados, exceto nos casos previstos por lei.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Uso Aceitável</h2>
            <p>Ao utilizar a Plataforma, você compromete-se a não:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violar qualquer lei ou regulamento aplicável, incluindo legislação de proteção de dados (LGPD);</li>
              <li>Enviar mensagens de spam, phishing ou comunicações não solicitadas;</li>
              <li>Utilizar a Plataforma para atividades fraudulentas ou enganosas;</li>
              <li>Tentar aceder a sistemas, dados ou redes sem autorização;</li>
              <li>Distribuir vírus ou outro código malicioso;</li>
              <li>Revender ou sublicenciar o acesso à Plataforma sem autorização prévia por escrito.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo, software, marcas, logótipos e interfaces da Plataforma são propriedade exclusiva da LeadsFlow e estão protegidos por leis de propriedade intelectual. É concedida ao Cliente uma licença limitada, não exclusiva e intransmissível para utilizar a Plataforma exclusivamente para os fins previstos nestes Termos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Dados do Cliente</h2>
            <p>
              Os dados introduzidos pelo Cliente na Plataforma (leads, contactos, conversas) pertencem ao Cliente. A LeadsFlow trata esses dados na qualidade de operador, conforme descrito na nossa <a href="/politica" className="text-primary hover:underline">Política de Privacidade</a>, agindo sempre segundo as instruções do Cliente e em conformidade com a LGPD.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Disponibilidade e SLA</h2>
            <p>
              A LeadsFlow empenha-se em garantir a disponibilidade da Plataforma com um objetivo de <strong className="text-foreground">99,5% de uptime mensal</strong>. Reservamo-nos o direito de realizar manutenções programadas, com aviso prévio sempre que possível. Não garantimos disponibilidade ininterrupta e não nos responsabilizamos por interrupções causadas por terceiros, força maior ou falhas de infraestrutura fora do nosso controlo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">9. Limitação de Responsabilidade</h2>
            <p>
              Na máxima extensão permitida por lei, a LeadsFlow não será responsável por danos indiretos, incidentais, especiais ou consequentes, incluindo perda de lucros, dados ou oportunidades de negócio, decorrentes do uso ou da impossibilidade de uso da Plataforma. A nossa responsabilidade total nunca excederá o valor pago pelo Cliente nos últimos 3 meses de serviço.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">10. Rescisão</h2>
            <p>
              A LeadsFlow pode suspender ou encerrar a sua conta imediatamente, sem aviso prévio, em caso de violação destes Termos, atividade fraudulenta ou ilegal, ou falta de pagamento. Após a rescisão, os seus dados serão retidos conforme descrito na Política de Privacidade e posteriormente eliminados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">11. Alterações aos Termos</h2>
            <p>
              Podemos rever estes Termos periodicamente. Notificaremos sobre alterações materiais com pelo menos <strong className="text-foreground">15 dias de antecedência</strong> por e-mail ou aviso na Plataforma. O uso continuado após esse prazo constitui aceitação dos novos Termos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">12. Lei Aplicável e Foro</h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Para a resolução de qualquer litígio decorrente destes Termos, fica eleito o foro da comarca de São Paulo — SP, com exclusão de qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">13. Contacto</h2>
            <p>
              Para questões relacionadas com estes Termos, entre em contacto connosco:
            </p>
            <ul className="list-none space-y-1">
              <li><strong className="text-foreground">E-mail:</strong> legal@leadsflowapi.com</li>
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
          <a href="/politica" className="hover:text-foreground transition-colors">Política de Privacidade</a>
        </div>
      </footer>
    </div>
  );
}
