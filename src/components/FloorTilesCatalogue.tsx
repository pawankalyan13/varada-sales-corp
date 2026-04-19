import aglStatuarioMarble from "@/assets/agl-statuario-marble.webp";

const brandCatalogue = [
  {
    name: "AGL",
    tagline: "Italian-inspired large format tiles",
    tiles: [
      { name: "Statuario Marble", size: '24" × 48"', finish: "Glossy", image: aglStatuarioMarble },
      { name: "Carrara Veined", size: '32" × 32"', finish: "Polished" },
      { name: "Slate Charcoal", size: '24" × 24"', finish: "Matte" },
      { name: "Travertine Beige", size: '16" × 32"', finish: "Rustic" },
    ],
  },
  {
    name: "Varmora",
    tagline: "Premium GVT & PGVT collections",
    tiles: [
      { name: "Onyx Gold", size: '24" × 48"', finish: "High Gloss" },
      { name: "Wood Plank Oak", size: '8" × 48"', finish: "Wood Finish" },
      { name: "Concrete Grey", size: '24" × 24"', finish: "Matte" },
      { name: "Emperador Brown", size: '32" × 32"', finish: "Polished" },
    ],
  },
  {
    name: "Orient Bell",
    tagline: "Durable everyday floor tiles",
    tiles: [
      { name: "Terrazzo Ivory", size: '24" × 24"', finish: "Satin" },
      { name: "Sandstone Natural", size: '16" × 16"', finish: "Anti-Skid" },
      { name: "Cement Urban", size: '24" × 24"', finish: "Matte" },
      { name: "Mosaic Vintage", size: '12" × 12"', finish: "Glossy" },
    ],
  },
  {
    name: "Vitero",
    tagline: "European-design premium tiles",
    tiles: [
      { name: "Calacatta White", size: '32" × 64"', finish: "Polished" },
      { name: "Basalt Black", size: '24" × 48"', finish: "Matte" },
      { name: "Limestone Cream", size: '24" × 24"', finish: "Honed" },
      { name: "Marquina Noir", size: '16" × 32"', finish: "Glossy" },
    ],
  },
];

const FloorTilesCatalogue = () => {
  return (
    <section
      id="catalogue"
      className="mt-24 lg:mt-32 max-w-7xl mx-auto px-6 lg:px-12"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-tannin">
            Floor Tiles Catalogue
          </span>
          <h3 className="font-serif text-4xl lg:text-5xl mt-3">
            Curated by Brand.
          </h3>
        </div>
        <p className="text-sm text-muted-foreground max-w-md">
          A selection of floor tiles available at our Maripalem showroom. Visit
          us to view full ranges and live samples.
        </p>
      </div>

      <div className="space-y-16">
        {brandCatalogue.map((brand) => (
          <div key={brand.name}>
            <div className="flex items-baseline justify-between border-b border-foreground/10 pb-4 mb-6">
              <div>
                <h4 className="font-serif text-2xl lg:text-3xl">{brand.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {brand.tagline}
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-tannin">
                {brand.tiles.length} Designs
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {brand.tiles.map((tile) => (
                <article
                  key={tile.name}
                  className="group border border-foreground/10 bg-card overflow-hidden hover:border-tannin/40 transition-colors"
                >
                  <div className="aspect-square bg-granite/40 relative overflow-hidden">
                    {tile.image ? (
                      <img
                        src={tile.image}
                        alt={`${tile.name} floor tile`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-tannin/10" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                            Image coming soon
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-4 space-y-1">
                    <p className="font-serif text-base">{tile.name}</p>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      <span>{tile.size}</span>
                      <span className="text-tannin">{tile.finish}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-foreground/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground max-w-lg">
          Looking for a specific design, size or finish? Our team can source it
          from our network of authorized brand partners.
        </p>
        <a
          href="#showroom"
          className="bg-foreground text-background px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-tannin transition-colors"
        >
          Enquire at Showroom
        </a>
      </div>
    </section>
  );
};

export default FloorTilesCatalogue;
