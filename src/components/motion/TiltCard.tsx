import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useFinePointer, useReducedMotion } from "@/hooks/use-motion-pref";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees. Kept small and restrained. */
  max?: number;
  /** Lift in px on hover. */
  lift?: number;
  /** Show the soft moving sheen highlight. */
  sheen?: boolean;
  as?: "div" | "article" | "li";
}

/**
 * Subtle cursor-driven 3D tilt with studio-style sheen and depth shadow.
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
const TiltCard = ({
  children,
  className,
  max = 3,
  lift = 6,
  sheen = true,
  as: Tag = "div",
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number>();
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const enabled = fine && !reduced;

  const handleMove = (e: React.MouseEvent) => {
    if (!enabled || !ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--ry", `${(px - 0.5) * 2 * max}deg`);
      el.style.setProperty("--rx", `${(0.5 - py) * 2 * max}deg`);
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  };

  return (
    <Tag
      ref={ref as never}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn("tilt-card", enabled && "tilt-card--active", className)}
      style={
        {
          "--tilt-lift": `${lift}px`,
        } as React.CSSProperties
      }
    >
      <div className="tilt-card__inner">{children}</div>
      {sheen && enabled && <span className="tilt-card__sheen" aria-hidden="true" />}
    </Tag>
  );
};

export default TiltCard;
