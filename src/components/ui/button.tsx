import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-normal transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#533AFD] focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#533AFD] text-white rounded-sm hover:bg-[#4329E8] active:bg-[#3720D4] active:scale-[0.98] disabled:bg-[#C9C3F0] disabled:cursor-not-allowed",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm",
        outline:
          "bg-white text-[#533AFD] border border-[#533AFD] rounded-sm hover:bg-[#F3F0FF] hover:border-[#4329E8] active:bg-[#E8E9FF] active:border-[#3720D4] dark:bg-transparent dark:text-[#A899FF] dark:border-[#533AFD] dark:hover:bg-[rgba(83,58,253,0.15)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-sm",
        ghost:
          "bg-transparent text-[#533AFD] rounded-sm hover:bg-[rgba(83,58,253,0.08)] hover:text-[#4329E8] active:bg-[rgba(83,58,253,0.12)] active:text-[#3720D4] dark:text-[#A899FF] dark:hover:bg-[rgba(83,58,253,0.15)]",
        link:
          "text-[#533AFD] underline-offset-4 hover:underline hover:text-[#4329E8] dark:text-[#A899FF]",
        gradient:
          "bg-gradient-to-r from-[#533AFD] to-[#FF6118] text-white rounded-sm hover:opacity-90 shadow-[0px_4px_12px_rgba(83,58,253,0.3)] hover:shadow-[0px_8px_24px_rgba(83,58,253,0.4)] hover:-translate-y-0.5",
        glow:
          "bg-[#533AFD] text-white rounded-sm hover:bg-[#4329E8] shadow-[0_0_40px_rgba(83,58,253,0.3)] hover:shadow-[0_0_60px_rgba(83,58,253,0.45)] hover:-translate-y-0.5",
        glass:
          "bg-white/20 backdrop-blur-xl border border-[#D4DEE9]/50 text-foreground hover:bg-white/40 hover:border-[#533AFD]/50 rounded-sm dark:bg-white/10 dark:border-white/20",
      },
      size: {
        default: "h-12 px-6 py-[15.5px]",
        sm:      "h-9 px-4 text-sm",
        lg:      "h-12 px-8",
        xl:      "h-14 px-10 text-lg",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
