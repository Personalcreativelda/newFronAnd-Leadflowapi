import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { ChatwootWidget } from "@/components/ChatwootWidget";
import { MetaPixel } from "@/components/MetaPixel";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { useIsMobile } from "@/hooks/use-mobile";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Gradient = () => (
  <ShaderGradient
    control="props"
    animate="on"
    loop="on"
    loopDuration={12}
    brightness={1.2}
    cAzimuthAngle={180}
    cDistance={2.4}
    cPolarAngle={95}
    cameraZoom={1}
    color1="#1f3a8a"
    color2="#4338ca"
    color3="#7c3aed"
    envPreset="city"
    lightType="3d"
    positionX={0}
    positionY={-2.1}
    positionZ={0}
    reflection={0.1}
    rotationX={0}
    rotationY={0}
    rotationZ={225}
    shader="defaults"
    type="waterPlane"
    uTime={0}
    uAmplitude={0.5}
    uDensity={1.4}
    uFrequency={2.5}
    uSpeed={0.6}
    uStrength={2.2}
    wireframe={false}
  />
);

const App = () => {
  const isMobile = useIsMobile();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          {/* Shader gradient background */}
          {!isMobile && (
            <ShaderGradientCanvas
              pixelDensity={1}
              fov={45}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
                pointerEvents: "none",
              }}
            >
              <Gradient />
            </ShaderGradientCanvas>
          )}

          <div style={{ position: "relative", zIndex: 0 }}>
            <Toaster />
            <Sonner />
            <ChatwootWidget />
            <MetaPixel />
            <GoogleAnalytics />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
