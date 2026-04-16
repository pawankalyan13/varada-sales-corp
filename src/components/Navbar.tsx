import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-light/80 backdrop-blur-md border-b border-foreground/5">
      <div className="max-w-7xl mx-auto flex justify-between items-end px-6 lg:px-12 py-6">
        <div className="space-y-1">
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-tannin">
            Premium Tiles & Sanitaryware
          </p>
          <h1 className="text-2xl lg:text-3xl font-serif font-semibold tracking-tight text-foreground">
            VARADA SALES
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-12 text-[11px] tracking-widest uppercase font-semibold text-foreground">
          <a href="#collections" className="hover:text-tannin transition-colors">Collections</a>
          <a href="#brands" className="hover:text-tannin transition-colors">Brands</a>
          <a href="#showroom" className="hover:text-tannin transition-colors">Showroom</a>
          <a href="#contact" className="hover:text-tannin transition-colors">Contact</a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden bg-stone-light border-t border-foreground/5 px-6 py-6 flex flex-col gap-4 text-[11px] tracking-widest uppercase font-semibold">
          <a href="#collections" onClick={() => setOpen(false)}>Collections</a>
          <a href="#brands" onClick={() => setOpen(false)}>Brands</a>
          <a href="#showroom" onClick={() => setOpen(false)}>Showroom</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
