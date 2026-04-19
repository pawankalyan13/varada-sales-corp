import logoAgl from "@/assets/logo-agl-updated.png";
import logoVarmora from "@/assets/logo-varmora-updated.png";
import logoKajaria from "@/assets/logo-kajaria-v2.png";
import logoSimpolo from "@/assets/logo-simpolo-v2.png";
import logoJohnson from "@/assets/logo-johnson-v2.png";

const brands = [
  { name: "AGL", logo: logoAgl },
  { name: "Varmora", logo: logoVarmora },
  { name: "Kajaria", logo: logoKajaria },
  { name: "Simpolo", logo: logoSimpolo },
  { name: "Johnson", logo: logoJohnson },
];

const BrandsSection = () => {
  // Duplicate the list so the marquee can loop seamlessly
  const marqueeBrands = [...brands, ...brands];

  return (
    <section id="brands" className="mt-24 lg:mt-32 py-16 border-y border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-tannin mb-12">
          Authorized Dealer of India's Leading Brands
        </p>

        <div
          className="group relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-16 lg:gap-24 group-hover:[animation-play-state:paused]">
            {marqueeBrands.map((brand, i) => (
              <img
                key={`${brand.name}-${i}`}
                src={brand.logo}
                alt={`${brand.name} logo`}
                loading="lazy"
                className="h-20 lg:h-28 w-auto object-contain shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
