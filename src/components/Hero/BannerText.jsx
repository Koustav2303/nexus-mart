import { ArrowRight, Play } from "lucide-react";

export default function BannerText({ textRef }) {
  return (
    <div ref={textRef} className="flex flex-col justify-center gap-6 z-10 opacity-0 translate-y-10">
      <div className="inline-block w-max px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium tracking-wide">
        New Arrival — Season 2026
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
        Elevate Your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Digital Arsenal.
        </span>
      </h1>
      
      <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
        Discover next-generation tech and premium gear designed for ultimate performance. High-contrast displays, mechanical precision, and cinematic immersion.
      </p>
      
      <div className="flex flex-wrap items-center gap-4 mt-4">
        <button className="flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:-translate-y-1">
          Shop Now <ArrowRight className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-white font-medium rounded-full transition-all">
          <Play className="w-5 h-5 text-cyan-400" /> Watch Trailer
        </button>
      </div>
    </div>
  );
}