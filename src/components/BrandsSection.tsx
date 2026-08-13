import logoAgl from "@/assets/logo-agl-updated.png";
import logoVarmora from "@/assets/logo-varmora-updated.png";
import logoKajaria from "@/assets/logo-kajaria-v2.png";
import logoSimpolo from "@/assets/logo-simpolo-v2.png";
import logoJohnson from "@/assets/logo-johnson-v2.png";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

const brands = [
  { name: "AGL", logo: logoAgl },
  { name: "Varmora", logo: logoVarmora },
  { name: "Kajaria", logo: logoKajaria },
  { name: "Simpolo", logo: logoSimpolo },
  { name: "Johnson", logo: logoJohnson },
];

const BrandsSection = () => {
  // Duplicate the list so the marquee loops seamlessly
  const marqueeBrands = [...brands, ...brands];

  const maskStyle = {
    maskImage:
      "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
  };

  return (
    <section
      id="brands"
      className="mt-24 lg:mt-32 py-16 border-y border-foreground/10 relative overflow-hidden"
    >
      {/* Subtle ambient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tannin/[0.03] to-transparent pointer-events-none" />
      <div className="absolute inset-0 arch-grid arch-grid-mask opacity-70 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <RevealOnScroll className="flex flex-col items-center mb-12">
          <span className="h-px w-12 bg-tannin mb-4" />
          <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-tannin">
            Authorized Dealer of India's Leading Brands
          </p>
        </RevealOnScroll>

        <div
          className="group relative overflow-hidden scene-3d"
          style={maskStyle}
        >
          <div className="flex w-max animate-marquee gap-8 lg:gap-12 group-hover:[animation-play-state:paused] py-4">
            {marqueeBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="brand-panel shrink-0 flex items-center justify-center px-8 lg:px-10 py-6 min-w-[180px] lg:min-w-[220px] border border-foreground/10 glass-panel shadow-studio transition-all duration-500 hover:border-tannin/40 hover:shadow-studio-lg hover:-translate-y-1.5 hover:[transform:perspective(900px)_rotateX(3deg)_translateY(-6px)]"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  className="h-16 lg:h-20 w-auto object-contain transition-transform duration-500 hover:scale-110 drop-shadow-[0_6px_10px_hsl(var(--ink)/0.12)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
