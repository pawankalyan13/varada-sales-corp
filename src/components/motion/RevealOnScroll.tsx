import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-motion-pref";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  /** Reveal flavour. */
  variant?: "rise" | "depth" | "zoom";
  as?: ElementType;
  id?: string;
}

/**
 * Fades content in with a small rise / depth movement as it enters the viewport.
 * Honours prefers-reduced-motion by rendering the final state immediately.
 */
const RevealOnScroll = ({
  children,
  className,
  delay = 0,
  variant = "rise",
  as: Tag = "div",
  id,
}: RevealOnScrollProps) => {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <Tag
      id={id}
      ref={ref as never}
      className={cn("reveal", `reveal--${variant}`, shown && "is-visible", className)}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
};

export default RevealOnScroll;
