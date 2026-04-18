import logoAgl from "@/assets/logo-agl-updated.png";
import logoVarmora from "@/assets/logo-varmora-updated.png";
import logoKajaria from "@/assets/logo-kajaria-updated.png";
import logoSimpolo from "@/assets/logo-simpolo-updated.png";
import logoJohnson from "@/assets/logo-johnson-updated.png";

const brands = [
  { name: "AGL", logo: logoAgl },
  { name: "Varmora", logo: logoVarmora },
  { name: "Kajaria", logo: logoKajaria },
  { name: "Simpolo", logo: logoSimpolo },
  { name: "Johnson", logo: logoJohnson },
];

const BrandsSection = () => {
  return (
    <section id="brands" className="mt-24 lg:mt-32 py-16 border-y border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-tannin mb-12">
          Authorized Dealer of India's Leading Brands
        </p>
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-6">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={`${brand.name} logo`}
              loading="lazy"
              className="h-12 lg:h-16 w-auto transition-all duration-500 object-fill"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
