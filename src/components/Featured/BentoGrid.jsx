import CategoryCard from "./CategoryCard";

export default function BentoGrid({ gridRef }) {
  const categories = [
    {
      id: 1,
      title: "Pro Gaming Rigs",
      itemsCount: "124",
      gradient: "from-purple-600 to-blue-600",
      className: "col-span-1 md:col-span-2 row-span-2 min-h-[300px] md:min-h-[500px]",
    },
    {
      id: 2,
      title: "Wearable Tech",
      itemsCount: "86",
      gradient: "from-cyan-500 to-emerald-500",
      className: "col-span-1 min-h-[240px]",
    },
    {
      id: 3,
      title: "Mechanical Keyboards",
      itemsCount: "42",
      gradient: "from-rose-500 to-orange-500",
      className: "col-span-1 min-h-[240px]",
    },
    {
      id: 4,
      title: "Cinematic Displays",
      itemsCount: "18",
      gradient: "from-slate-600 to-slate-400",
      className: "col-span-1 md:col-span-2 min-h-[240px]",
    },
  ];

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 md:gap-6">
      {categories.map((cat) => (
        <CategoryCard
          key={cat.id}
          title={cat.title}
          itemsCount={cat.itemsCount}
          gradient={cat.gradient}
          className={`${cat.className} category-card`}
        />
      ))}
    </div>
  );
}