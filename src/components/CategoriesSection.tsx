import catTiles from "@/assets/cat-tiles.jpg";
import catWall from "@/assets/cat-wall.jpg";
import catSanitary from "@/assets/cat-sanitary.jpg";
import catFittings from "@/assets/cat-fittings.jpg";

const categories = [
  {
    num: "01",
    title: "Floor Tiles",
    desc: "Large-format vitrified & porcelain tiles for residential and commercial spaces.",
    img: catTiles,
  },
  {
    num: "02",
    title: "Wall Tiles",
    desc: "Ceramic and digital wall tiles in stunning patterns for kitchens & bathrooms.",
    img: catWall,
  },
  {
    num: "03",
    title: "Sanitaryware",
    desc: "Premium wash basins, water closets and bathroom accessories from top brands.",
    img: catSanitary,
  },
  {
    num: "04",
    title: "Bath Fittings",
    desc: "Faucets, showers and plumbing fixtures engineered for durability and style.",
    img: catFittings,
  },
];

const CategoriesSection = () => {
  return (
    <section id="collections" className="mt-24 lg:mt-32 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex justify-between items-baseline border-b border-foreground/10 pb-4 mb-12">
        <h3 className="font-serif text-3xl font-medium">Our Collections</h3>
        <span className="text-[10px] uppercase tracking-widest font-bold text-tannin">
          Browse by Category
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-foreground/10">
        {categories.map((cat) => (
          <div
            key={cat.num}
            className="p-6 lg:p-8 border-r border-b border-foreground/10 group hover:bg-card transition-colors"
          >
            <p className="text-[10px] font-bold text-tannin mb-8 tabular-nums">
              {cat.num} / 04
            </p>
            <h4 className="font-serif text-2xl mb-3">{cat.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-6">
              {cat.desc}
            </p>
            <div className="aspect-square bg-muted relative overflow-hidden">
              <img
                src={cat.img}
                alt={cat.title}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
