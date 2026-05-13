import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="hidden md:flex flex-1 max-w-xl mx-8 relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors" />
      </div>
      <input
        type="text"
        className="w-full bg-slate-900/50 border border-slate-800 text-slate-200 text-sm rounded-full focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 block pl-12 p-2.5 transition-all outline-none placeholder-slate-500"
        placeholder="Search for products, brands, and more..."
      />
    </div>
  );
}