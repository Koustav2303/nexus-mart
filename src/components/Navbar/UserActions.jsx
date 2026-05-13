import { ShoppingCart, Heart, User } from "lucide-react";

export default function UserActions() {
  return (
    <div className="hidden md:flex items-center gap-6">
      <button className="text-slate-300 hover:text-cyan-400 transition-colors">
        <User className="w-5 h-5" />
      </button>
      <button className="text-slate-300 hover:text-cyan-400 transition-colors relative">
        <Heart className="w-5 h-5" />
        <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white">
          2
        </span>
      </button>
      <button className="text-slate-300 hover:text-cyan-400 transition-colors relative flex items-center gap-2">
        <ShoppingCart className="w-5 h-5" />
        <span className="absolute -top-1.5 -right-2 bg-cyan-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full text-slate-950">
          5
        </span>
      </button>
    </div>
  );
}