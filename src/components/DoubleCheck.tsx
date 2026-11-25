// Assinatura da LeadsFlow: o duplo visto de "lida" das conversas,
// usado como marca de "feito" nas listas da página.
export const DoubleCheck = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 18 12"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`h-3 w-[18px] flex-shrink-0 text-[#A899FF] ${className}`}
  >
    <path d="M1 6.5 4.5 10 11 2" />
    <path d="M7.5 9 8.5 10 15 2" />
  </svg>
);
