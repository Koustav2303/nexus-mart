export default function InputGroup({ icon: Icon, type, placeholder, label }) {
    return (
      <div className="flex flex-col gap-1.5 w-full group">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">
          {label}
        </label>
        <div className="relative flex items-center">
          <div className="absolute left-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-slate-900/50 border border-slate-800 text-slate-200 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:bg-slate-900 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>
    );
  }