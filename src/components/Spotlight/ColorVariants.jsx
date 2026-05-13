export default function ColorVariants({ colors }) {
    return (
      <div className="flex items-center gap-1.5 mt-auto pt-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-full border-2 border-slate-900 ring-1 ring-slate-700 hover:ring-cyan-400 cursor-pointer transition-all hover:scale-110"
            style={{ backgroundColor: color }}
          />
        ))}
        <span className="text-[10px] text-slate-500 ml-2 uppercase font-bold tracking-wider">
          {colors.length} Colors
        </span>
      </div>
    );
  }