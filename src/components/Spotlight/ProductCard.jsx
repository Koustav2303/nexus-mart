import { ShoppingBag } from "lucide-react";
import Rating from "./Rating";
import ColorVariants from "./ColorVariants";

export default function ProductCard({ product }) {
  return (
    <div className="group relative w-[300px] md:w-[380px] shrink-0 h-[480px] rounded-[2rem] p-1 product-panel mx-4">
      {/* Animated Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] group-hover:from-cyan-500/50 group-hover:to-blue-600/50 transition-colors duration-500 blur-sm opacity-50 group-hover:opacity-100"></div>
      
      {/* Card Inner */}
      <div className="relative h-full bg-slate-950 rounded-[1.8rem] p-6 flex flex-col border border-white/5 overflow-hidden">
        
        {/* Badge */}
        {product.isNew && (
          <div className="absolute top-6 left-6 z-20 bg-cyan-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            New Arrival
          </div>
        )}

        {/* Image Placeholder with Hover Scale */}
        <div className="relative w-full h-48 mt-4 mb-6 rounded-2xl bg-slate-900/50 flex items-center justify-center overflow-hidden group-hover:bg-slate-900 transition-colors duration-500">
           <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 group-hover:scale-110 transition-transform duration-700 ease-out shadow-2xl"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col z-10">
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-slate-400 mt-1 line-clamp-2">
            {product.description}
          </p>
          
          <Rating score={product.rating} reviews={product.reviews} />
          
          <div className="mt-auto flex items-end justify-between">
            <div>
              <p className="text-xs text-slate-500 line-through mb-0.5">${product.oldPrice}</p>
              <p className="text-2xl font-black text-white">${product.price}</p>
            </div>
            
            {/* Add to cart button */}
            <button className="w-12 h-12 rounded-full bg-white/5 hover:bg-cyan-500 border border-white/10 hover:border-cyan-400 flex items-center justify-center text-white hover:text-slate-950 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:-translate-y-1">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>

          <ColorVariants colors={product.colors} />
        </div>
      </div>
    </div>
  );
}