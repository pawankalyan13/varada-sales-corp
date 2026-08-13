import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-motion-pref";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  /** Pixels of travel across the full viewport pass. Keep small (8–40). */
  speed?: number;
}

/** Very subtle scroll parallax using GPU transforms only. */
const ParallaxLayer = ({ children, className, speed = 20 }: ParallaxLayerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    let ticking = false;
    let visible = false;

    const apply = () => {
      ticking = false;
      if (!visible) return;
      const rect = el.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.transform = `translate3d(0, ${(-progress * speed).toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };

    const io = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) onScroll();
    });
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced, speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
};

export default ParallaxLayer;
