import { ShieldCheck, Truck, Zap } from "lucide-react";

export default function FloatingBadges({ badgesRef }) {
  const features = [
    { icon: Zap, text: "Instant Dispatch" },
    { icon: Truck, text: "Free Global Delivery" },
    { icon: ShieldCheck, text: "2-Year Warranty" },
  ];

  return (
    <div ref={badgesRef} className="col-span-1 md:col-span-2 flex flex-wrap justify-center md:justify-start gap-6 mt-12 pt-8 border-t border-slate-800/50 opacity-0 translate-y-5">
      {features.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3 bg-slate-900/50 rounded-full px-5 py-2.5 border border-slate-800">
          <item.icon className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-medium text-slate-300">{item.text}</span>
        </div>
      ))}
    </div>
  );
}