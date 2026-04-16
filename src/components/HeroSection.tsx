import heroImg from "@/assets/hero-showroom.jpg";

const HeroSection = () => {
  return (
    <section className="pt-28 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-foreground/10 bg-card">
          {/* Left content */}
          <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-between min-h-[400px] lg:min-h-[600px] lg:border-r border-foreground/10">
            <div className="space-y-6">
              <span className="px-3 py-1 border border-tannin/30 text-[10px] text-tannin font-bold uppercase tracking-widest inline-block">
                Visakhapatnam's Finest
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] text-balance">
                Material Integrity for{" "}
                <br />
                <span className="italic text-tannin">Structural Excellence.</span>
              </h2>
              <p className="max-w-[50ch] text-sm text-muted-foreground leading-relaxed">
                Authorized dealers of AGL, Varmora, Kajaria, Simpolo & Johnson.
                Premium tiles, sanitaryware and bath fittings — all under one roof
                at Maripalem, Visakhapatnam.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 items-center mt-8">
              <a
                href="#showroom"
                className="bg-foreground text-background px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-tannin transition-colors"
              >
                Visit Showroom
              </a>
              <a
                href="#collections"
                className="border border-foreground px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                View Collections
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5 bg-granite relative overflow-hidden min-h-[300px]">
            <img
              src={heroImg}
              alt="Varada Sales Corporation showroom interior with premium tile displays"
              className="w-full h-full object-cover grayscale contrast-125 opacity-90"
              width={1200}
              height={1500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
