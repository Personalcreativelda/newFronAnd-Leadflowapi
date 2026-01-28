import { TrendingUp, Users, Target, DollarSign, Activity } from "lucide-react";

const metrics = [
  { label: "Taxa de Conversão", value: "32.5%", change: "+12.3%", icon: TrendingUp, positive: true },
  { label: "Leads Ativos", value: "1,847", change: "+245", icon: Users, positive: true },
  { label: "Meta do Mês", value: "87%", change: "+5%", icon: Target, positive: true },
  { label: "Receita Prevista", value: "R$ 142K", change: "+18.2%", icon: DollarSign, positive: true },
];

const sources = [
  { name: "Website", value: 524, color: "bg-primary" },
  { name: "Instagram", value: 412, color: "bg-accent" },
  { name: "Facebook", value: 338, color: "bg-blue-500" },
  { name: "LinkedIn", value: 225, color: "bg-cyan-400" },
];

const statusData = [
  { status: "Novos", count: 423, color: "bg-primary/80" },
  { status: "Qualificados", count: 387, color: "bg-cyan-500/80" },
  { status: "Em Negociação", count: 245, color: "bg-accent/80" },
  { status: "Convertidos", count: 156, color: "bg-green-500/80" },
];

export const Dashboard = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Tempo Real</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Analytics & <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe o desempenho das suas campanhas em tempo real. Identifique
            oportunidades e otimize sua estratégia com insights acionáveis.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-6 md:p-8 glow-primary">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground">LeadsFlow Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Atualizado agora</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-secondary/50 rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <metric.icon className="h-5 w-5 text-primary" />
                    <span className={`text-xs font-medium ${metric.positive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sources Chart */}
              <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                <h3 className="text-sm font-semibold text-foreground mb-4">Leads por Origem</h3>
                <div className="space-y-4">
                  {sources.map((source) => (
                    <div key={source.name} className="flex items-center gap-4">
                      <div className="w-24 text-sm text-muted-foreground">{source.name}</div>
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full ${source.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${(source.value / 600) * 100}%` }}
                        />
                      </div>
                      <div className="text-sm font-medium text-foreground w-12 text-right">
                        {source.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Chart */}
              <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                <h3 className="text-sm font-semibold text-foreground mb-4">Status dos Leads</h3>
                <div className="grid grid-cols-2 gap-3">
                  {statusData.map((item) => (
                    <div
                      key={item.status}
                      className="bg-background/50 rounded-lg p-4 border border-border/30"
                    >
                      <div className={`h-2 w-12 ${item.color} rounded-full mb-3`} />
                      <div className="text-xl font-bold text-foreground">{item.count}</div>
                      <div className="text-xs text-muted-foreground">{item.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
