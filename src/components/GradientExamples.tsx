/**
 * Gradientes Lovable-style que se adaptam a modo claro e escuro
 * 
 * Classes disponíveis:
 * - .lovable-gradient-light: Gradiente suave para modo claro
 * - .lovable-gradient-dark: Gradiente vibrante para modo escuro
 * - .lovable-gradient-full: Gradiente completo que se adapta automaticamente
 * - .lovable-radial-light: Radial gradient suave para modo claro
 * - .lovable-radial-dark: Radial gradient vibrante para modo escuro
 */

export const GradientExamples = () => {
  return (
    <div className="space-y-8 p-8">
      {/* Gradiente Linear Completo com Modo Automático */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Gradiente Linear (Automático)</h3>
        <div className="lovable-gradient-full h-32 rounded-xl shadow-lg" />
        <p className="text-sm text-muted-foreground">
          Use: <code className="bg-secondary px-2 py-1 rounded">lovable-gradient-full</code>
        </p>
      </div>

      {/* Gradiente Linear Modo Claro */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Gradiente Linear (Modo Claro)</h3>
        <div className="lovable-gradient-light h-32 rounded-xl shadow-lg" />
        <p className="text-sm text-muted-foreground">
          Use: <code className="bg-secondary px-2 py-1 rounded">lovable-gradient-light</code>
        </p>
      </div>

      {/* Gradiente Linear Modo Escuro */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Gradiente Linear (Modo Escuro)</h3>
        <div className="lovable-gradient-dark h-32 rounded-xl shadow-lg" />
        <p className="text-sm text-muted-foreground">
          Use: <code className="bg-secondary px-2 py-1 rounded">lovable-gradient-dark</code>
        </p>
      </div>

      {/* Radial Gradient Modo Claro */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Radial Gradient (Modo Claro)</h3>
        <div className="lovable-radial-light bg-background h-32 rounded-xl shadow-lg" />
        <p className="text-sm text-muted-foreground">
          Use: <code className="bg-secondary px-2 py-1 rounded">lovable-radial-light</code>
        </p>
      </div>

      {/* Radial Gradient Modo Escuro */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Radial Gradient (Modo Escuro)</h3>
        <div className="lovable-radial-dark bg-background h-32 rounded-xl shadow-lg" />
        <p className="text-sm text-muted-foreground">
          Use: <code className="bg-secondary px-2 py-1 rounded">lovable-radial-dark</code>
        </p>
      </div>

      {/* Exemplo de Uso */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Exemplo de Seção com Gradiente</h3>
        <div className="lovable-gradient-full rounded-xl p-16 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Seu Conteúdo Aqui</h2>
          <p className="text-lg opacity-90">Gradiente Lovable aplicado em qualquer elemento</p>
        </div>
      </div>

      {/* Código de Exemplo */}
      <div className="bg-secondary p-4 rounded-lg space-y-2">
        <p className="font-semibold">Exemplo de uso em JSX:</p>
        <pre className="text-sm overflow-x-auto">
{`<div className="lovable-gradient-full h-32 rounded-xl">
  {/* Seu conteúdo aqui */}
</div>`}
        </pre>
      </div>
    </div>
  );
};
