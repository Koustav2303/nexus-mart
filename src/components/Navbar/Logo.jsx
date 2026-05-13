import { Zap } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer group">
      <div className="p-2 bg-blue-600/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
        <Zap className="w-6 h-6 text-cyan-400" />
      </div>
      <span className="text-2xl font-bold tracking-tighter text-white">
        NEXUS<span className="text-cyan-400">MART</span>
      </span>
    </div>
  );
}