import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="mb-2 font-mono text-sm tabular-nums text-muted-foreground">404</p>
        <h1 className="mb-6 text-3xl font-medium tracking-tight text-foreground">Esta página não existe</h1>
        <a
          href="/"
          className="inline-flex h-11 items-center rounded-xl bg-[#533AFD] px-5 text-base font-medium text-white transition-colors duration-150 hover:bg-[#4329E8]"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
