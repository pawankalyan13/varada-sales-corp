import { Anchor, Landmark, ShieldCheck } from "lucide-react";

const CredentialsNote = () => {
  return (
    <section className="mt-24 lg:mt-32 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="relative border border-foreground/10 bg-card/40 backdrop-blur-sm p-8 lg:p-12 overflow-hidden">
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 h-1 w-24 bg-tannin" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-tannin">
              Trusted Supplier
            </span>
            <h3 className="font-serif text-3xl lg:text-4xl mt-3 leading-tight">
              Proudly supplying the
              <br />
              <span className="italic">Indian Navy</span> & government projects.
            </h3>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-8">
              Over the years, Varada Sales Corporation has earned the trust of
              prestigious institutions — supplying premium tiles, marble and
              building materials to the Indian Navy and numerous state &amp;
              central government projects across the region.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-foreground/10">
              <div className="flex items-start gap-3">
                <Anchor size={20} className="text-tannin mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em]">
                    Indian Navy
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Approved supplier
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Landmark size={20} className="text-tannin mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em]">
                    Govt. Projects
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Multiple deliveries
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-tannin mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em]">
                    Quality Assured
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Authorized brands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsNote;
