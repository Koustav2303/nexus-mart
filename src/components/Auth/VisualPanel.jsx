import { ShieldCheck, Zap } from "lucide-react";

export default function VisualPanel() {
  return (
    <div className="hidden lg:flex flex-col justify-between w-full h-full p-12 relative overflow-hidden bg-slate-900/50 rounded-3xl border border-white/5">
      {/* Cinematic Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="relative z-10">
        <div className="p-3 bg-blue-600/20 rounded-2xl w-max mb-6">
          <Zap className="w-8 h-8 text-cyan-400" />
        </div>
        <h3 className="text-4xl font-black text-white leading-tight">
          Unleash Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Creative Potential.
          </span>
        </h3>
        <ul className="mt-8 space-y-4">
          {["Secure Encrypted Checkout", "Priority Access to Drops", "Personalized Loadouts"].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-slate-300 font-medium">
              <ShieldCheck className="w-5 h-5 text-cyan-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Floating Glassmorphism Review */}
      <div className="relative z-10 mt-auto bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
        <p className="text-slate-300 italic leading-relaxed">
          "The UI is God-Level. It's the proper cinematic shopping experience I've always wanted to build and use."
        </p>
        <div className="mt-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50 text-cyan-400 font-black text-lg">
            KP
          </div>
          <div>
            <p className="text-white text-sm font-bold tracking-wide">Koustav Pan</p>
            <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider mt-0.5">Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}