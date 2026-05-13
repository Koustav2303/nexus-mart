export default function SectionHeader({ headerRef }) {
    return (
      <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-10 opacity-0 translate-y-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-[2px] bg-cyan-500"></span>
            <span className="text-cyan-400 font-semibold tracking-widest text-sm uppercase">Curated For You</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Trending <span className="text-slate-500">Collections</span>
          </h2>
        </div>
        
        <button className="hidden md:inline-flex items-center gap-2 pb-1 border-b border-cyan-500/50 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-colors mt-4 md:mt-0 font-medium">
          View All Categories
        </button>
      </div>
    );
  }