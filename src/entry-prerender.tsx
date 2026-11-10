// Página inicial desenhada em HTML no build (scripts/prerender.mjs): a Google, a Meta e os
// motores de busca leem o conteúdo e os links (privacidade, termos) sem correr JavaScript.
import { renderToString } from "react-dom/server";
import { ThemeProvider } from "@/hooks/useTheme";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";

export function render(): string {
  return renderToString(
    <ThemeProvider>
      <TooltipProvider>
        <div style={{ position: "relative", zIndex: 0 }}>
          <Index />
        </div>
      </TooltipProvider>
    </ThemeProvider>,
  );
}
