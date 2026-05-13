export default function ProductShowcase({ showcaseRef }) {
    return (
      <div ref={showcaseRef} className="relative flex justify-center items-center opacity-0 scale-95 z-10 mt-12 md:mt-0">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full w-3/4 h-3/4 m-auto"></div>
        
        {/* Glassmorphism Card */}
        <div className="relative w-full max-w-md aspect-square rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-8 shadow-2xl flex flex-col items-center justify-center group cursor-pointer overflow-hidden">
          
          {/* Placeholder for actual 3D or high-res transparent image */}
          <div className="w-48 h-48 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full animate-pulse opacity-80 group-hover:scale-105 transition-transform duration-500"></div>
          
          {/* Floating UI Elements over the product */}
          <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/5 flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div>
              <p className="text-white font-bold">Quantum Headset</p>
              <p className="text-cyan-400 text-sm">$299.00</p>
            </div>
            <button className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-slate-950 hover:bg-cyan-400 transition-colors">
              +
            </button>
          </div>
        </div>
      </div>
    );
  }