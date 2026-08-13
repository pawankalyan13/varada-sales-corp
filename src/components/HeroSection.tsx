import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-showroom.jpg";
import { useFinePointer, useReducedMotion } from "@/hooks/use-motion-pref";

const HeroSection = () => {
  const [isColor, setIsColor] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const interactive = fine && !reduced;

  useEffect(() => {
    if (!interactive) return;
    const el = sceneRef.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", px.toFixed(3));
        el.style.setProperty("--py", py.toFixed(3));
      });
    };
    const onLeave = () => {
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [interactive]);

  return (
    <section className="pt-28 lg:pt-32 relative">
      {/* Almost-invisible architectural backdrop */}
      <div
        className="absolute inset-0 arch-grid arch-grid-mask pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div
          ref={sceneRef}
          className="scene-3d reveal reveal--depth is-visible grid grid-cols-1 lg:grid-cols-12 gap-0 border border-foreground/10 bg-card shadow-studio-lg animate-fade-in-up"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Left content */}
          <div
            className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-between min-h-[400px] lg:min-h-[600px] lg:border-r border-foreground/10 relative"
            style={
              interactive
                ? {
                    transform:
                      "translate3d(calc(var(--px, 0) * 6px), calc(var(--py, 0) * 5px), 0)",
                    transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)",
                  }
                : undefined
            }
          >
            <div className="space-y-6">
              <span className="px-3 py-1 border border-tannin/30 text-[10px] text-tannin font-bold uppercase tracking-widest inline-block glass-panel">
                Visakhapatnam's Finest
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] text-balance">
                Material Integrity for{" "}
                <br />
                <span className="italic text-tannin">Structural Excellence.</span>
              </h2>
              <p className="max-w-[50ch] text-sm text-muted-foreground leading-relaxed">
                Authorized dealers of AGL, Varmora, Orient Bell,vitero premium tiles
                and Aquel sanitaryware and bath fittings — all under one roof at
                Maripalem, Visakhapatnam.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 items-center mt-8">
              <a
                href="#showroom"
                className="btn-3d bg-foreground text-background px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-tannin"
              >
                Visit Showroom
              </a>
              <a
                href="#collections"
                className="btn-3d border border-foreground px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-foreground hover:text-background"
              >
                View Collections
              </a>
            </div>
          </div>

          {/* Right image */}
          <button
            type="button"
            onClick={() => setIsColor((v) => !v)}
            aria-label={isColor ? "Show grayscale image" : "Show color image"}
            className="lg:col-span-5 bg-granite relative overflow-hidden min-h-[300px] cursor-pointer group text-left slab"
          >
            <img
              src={heroImg}
              alt="Varada Sales Corporation showroom interior with premium tile displays"
              className={`w-full h-full object-cover transition-all duration-700 ${
                isColor ? "grayscale-0 opacity-100 contrast-100" : "grayscale contrast-125 opacity-90"
              }`}
              style={
                interactive
                  ? {
                      transform:
                        "scale(1.06) translate3d(calc(var(--px, 0) * -14px), calc(var(--py, 0) * -10px), 0)",
                    }
                  : undefined
              }
              width={1200}
              height={1500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent border-0" />
            {/* Floating architectural element */}
            <span
              className="hidden lg:block absolute bottom-8 left-8 glass-panel px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground float-slow"
              aria-hidden="true"
            >
              Premium Surfaces
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
