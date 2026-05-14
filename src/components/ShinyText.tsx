import { useEffect, useRef } from "react";
import { useAnimate, motion } from "framer-motion";

interface ShinyTextProps {
  text: string;
  baseColor?: string;
  shineColor?: string;
  speed?: number;
  spread?: number;
  className?: string;
}

export const ShinyText = ({
  text,
  baseColor = "#64CEFB",
  shineColor = "#ffffff",
  speed = 3,
  spread = 100,
  className = "",
}: ShinyTextProps) => {
  const [scope, animate] = useAnimate();
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    // Animate from -200% to 200% so the shine sweeps left → right continuously
    animate(
      scope.current,
      { backgroundPositionX: ["-200%", "200%"] },
      { duration: speed, repeat: Infinity, ease: "linear" }
    );
  }, [animate, scope, speed]);

  const gradient = `linear-gradient(${spread}deg, ${baseColor} 20%, ${shineColor} 50%, ${baseColor} 80%)`;

  return (
    <motion.span
      ref={scope}
      className={className}
      style={{
        background: gradient,
        backgroundSize: "200% auto",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        display: "inline-block",
      }}
    >
      {text}
    </motion.span>
  );
};
