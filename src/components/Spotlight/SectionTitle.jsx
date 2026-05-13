import { Sparkles } from "lucide-react";

export default function SectionTitle() {
  return (
    <div className="flex flex-col gap-4 max-w-sm shrink-0 md:sticky top-1/4 h-fit z-10 product-panel px-4 md:px-0">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest w-max">
        <Sparkles className="w-4 h-4" /> Just Dropped
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        Next-Gen <br /> <span className="text-slate-500">Exclusives</span>
      </h2>
      <p className="text-slate-400 mt-2 text-lg">
        Limited edition gear engineered for absolute perfection. Grab them before they vanish.
      </p>
      <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 font-medium">
        <span className="w-12 h-[1px] bg-slate-700"></span> Scroll to explore
      </div>
    </div>
  );
}