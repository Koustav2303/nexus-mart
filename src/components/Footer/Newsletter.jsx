import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <div className="w-full bg-slate-900/50 border border-white/5 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left max-w-xl">
          <h3 className="text-3xl font-black text-white mb-2">Join the Nexus.</h3>
          <p className="text-slate-400">
            Subscribe to get priority access to exclusive drops, limited-edition gear, and behind-the-scenes content.
          </p>
        </div>
        
        <form className="w-full max-w-md relative flex items-center" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-full py-4 pl-6 pr-16 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
          />
          <button 
            type="submit" 
            className="absolute right-2 w-10 h-10 bg-cyan-500 hover:bg-cyan-400 rounded-full flex items-center justify-center text-slate-950 transition-transform hover:scale-105"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </form>
      </div>
    </div>
  );
}