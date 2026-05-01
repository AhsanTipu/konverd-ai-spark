import { ReactNode, ElementType } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  variant?: "up" | "fade" | "scale";
}

const Reveal = ({
  children,
  as: Tag = "div",
  delay = 0,
  className,
  variant = "up",
}: RevealProps) => {
  const { ref, revealed } = useReveal<HTMLElement>();

  const base =
    "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform";
  const hidden =
    variant === "up"
      ? "opacity-0 translate-y-6"
      : variant === "scale"
      ? "opacity-0 scale-[0.97]"
      : "opacity-0";
  const shown = "opacity-100 translate-y-0 scale-100";

  return (
    <Tag
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(base, revealed ? shown : hidden, className)}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
