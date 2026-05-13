import { Zap } from "lucide-react";

export default function BrandColumn() {
  return (
    <div className="col-span-1 lg:col-span-2 flex flex-col pr-0 lg:pr-12">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-blue-600/20 rounded-xl">
          <Zap className="w-6 h-6 text-cyan-400" />
        </div>
        <span className="text-2xl font-bold tracking-tighter text-white">
          NEXUS<span className="text-cyan-400">MART</span>
        </span>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed mb-8">
        Elevating the digital lifestyle. We engineer premium, high-contrast, and cinematic gear for creators, gamers, and developers worldwide.
      </p>
      <div className="flex items-center gap-4">
        {/* Abstract badges */}
        <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-semibold text-slate-300">ISO 9001</div>
        <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-semibold text-slate-300">Global Shipping</div>
      </div>
    </div>
  );
}