// Import the image relative to this component's location
import headsetImg from "../../assets/heroimage/quantam-headset.png";

export default function ProductShowcase({ showcaseRef }) {
  return (
    <div ref={showcaseRef} className="relative flex justify-center items-center opacity-0 scale-95 z-10 mt-12 md:mt-0">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full w-3/4 h-3/4 m-auto pointer-events-none"></div>
      
      {/* Product frame — clean, no glass */}
      <div className="relative w-full max-w-md flex flex-col items-center justify-center py-4 group cursor-pointer">
        
        {/* Actual High-Res Product Image */}
        <img 
          src={headsetImg} 
          alt="Quantum Headset" 
          className="w-[17rem] h-[17rem] sm:w-[19rem] sm:h-[19rem] md:w-[22rem] md:h-[22rem] object-contain group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-[0_0_25px_rgba(34,211,238,0.2)] relative z-10"
        />
        
        {/* Floating UI Elements over the product */}
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-sm bg-slate-950 rounded-2xl p-4 border border-slate-800 flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-xl">
          <div>
            <p className="text-white font-bold">Quantum Headset</p>
            <p className="text-cyan-400 text-sm">$299.00</p>
          </div>
          <button className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-slate-950 hover:bg-cyan-400 transition-colors font-bold text-lg shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            +
          </button>
        </div>
      </div>
    </div>
  );
}