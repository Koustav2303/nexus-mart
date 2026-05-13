import { ArrowUpRight } from "lucide-react";

export default function CategoryCard({ title, itemsCount, className, gradient }) {
  return (
    <div className={`group relative rounded-3xl overflow-hidden cursor-pointer ${className}`}>
      {/* Abstract Background (Replace with actual images later) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-in-out`}></div>
      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-500"></div>

      {/* Card Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 border border-white/5 rounded-3xl hover:border-white/20 transition-colors">
        <div className="flex justify-between items-start">
          <span className="bg-slate-900/80 backdrop-blur-md text-slate-300 text-xs font-bold px-3 py-1 rounded-full border border-white/10">
            {itemsCount} Products
          </span>
          <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border border-white/10">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-1 group-hover:-translate-y-1 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-sm text-slate-400 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
            Explore the next generation.
          </p>
        </div>
      </div>
    </div>
  );
}