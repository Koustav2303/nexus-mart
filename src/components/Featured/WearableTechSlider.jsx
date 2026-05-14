import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Explicitly import the images so Vite bundles them
import wear1 from "../../assets/gamingwear/wear1.jpg";
import wear2 from "../../assets/gamingwear/wear2.jpg";
import wear3 from "../../assets/gamingwear/wear3.jpg";
import wear4 from "../../assets/gamingwear/wear4.jpg";
import wear5 from "../../assets/gamingwear/wear5.jpg";
import wear6 from "../../assets/gamingwear/wear6.jpg";
import wear7 from "../../assets/gamingwear/wear7.jpg";
import wear8 from "../../assets/gamingwear/wear8.jpg";
import wear9 from "../../assets/gamingwear/wear9.jpg";
import wear10 from "../../assets/gamingwear/wear10.jpg";

const wears = [
  { src: wear1, label: "Magma Forge", desc: "Studio-grade bass with haptic feedback." },
  { src: wear2, label: "Neon Pulse", desc: "Ultra-lightweight esports edition." },
  { src: wear3, label: "Amethyst Pro", desc: "Spatial 3D audio precision." },
  { src: wear4, label: "Stealth Void", desc: "Active noise cancellation for pure focus." },
  { src: wear5, label: "Quantum Halo", desc: "Zero-latency wireless transmission." },
  { src: wear6, label: "Chroma Shift", desc: "Dynamic RGB environment sync." },
  { src: wear7, label: "Crimson Echo", desc: "Tactical comms with dual-mic setup." },
  { src: wear8, label: "Solar Flare", desc: "High-fidelity titanium drivers." },
  { src: wear9, label: "Cobalt Horizon", desc: "Breathable memory foam ear cups." },
  { src: wear10, label: "Obsidian Core", desc: "The ultimate audiophile experience." },
];

export default function WearableTechSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef([]);

  // Auto-play timer - Set slightly off from the 4.5s rig timer (4.8s) 
  // so the sliders don't switch at the exact same moment, feeling more organic.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === wears.length - 1 ? 0 : prev + 1));
    }, 4800);

    return () => clearInterval(timer);
  }, []);

  // GSAP Sliding Animation
  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      if (index === currentIndex) {
        gsap.to(slide, {
          y: "0%", // Sliding vertically for variety, or you can change to x: "0%"
          opacity: 1,
          zIndex: 10,
          duration: 1,
          ease: "power4.out",
        });
        
        gsap.fromTo(
          slide.querySelector('.slide-text'),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
        );
      } 
      else if (index === (currentIndex === 0 ? wears.length - 1 : currentIndex - 1)) {
        gsap.to(slide, {
          y: "-100%",
          opacity: 0,
          zIndex: 5,
          duration: 1,
          ease: "power4.out",
        });
      } 
      else {
        gsap.set(slide, {
          y: "100%",
          opacity: 0,
          zIndex: 1,
        });
      }
    });
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-950">
      {wears.map((wear, idx) => (
        <div
          key={idx}
          ref={(el) => (slidesRef.current[idx] = el)}
          className="absolute inset-0 w-full h-full"
          style={{ transform: "translateY(100%)", opacity: 0 }}
        >
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <img
              src={wear.src}
              alt={wear.label}
              className="w-full h-full object-cover"
            />
            {/* Darker gradient since this is a smaller box */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
          </div>

          {/* Text Overlay - Sized for a col-span-1 box */}
          <div className="slide-text absolute bottom-0 left-0 right-0 z-10 p-6 flex flex-col justify-end h-full">
            <span className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-1">
              Drop {idx + 1}/10
            </span>
            <h3 className="text-2xl font-black text-white mb-2 drop-shadow-lg leading-tight">
              {wear.label}
            </h3>
            <p className="text-xs text-slate-300 mb-4 drop-shadow-md line-clamp-2">
              {wear.desc}
            </p>
            
            <button className="w-max px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-cyan-500 hover:border-cyan-400 hover:text-slate-950 text-white text-xs font-bold rounded-full transition-all">
              Discover
            </button>
          </div>
        </div>
      ))}
      
      {/* Progress Indicators - Smaller for this box */}
      <div className="absolute top-4 right-4 z-20 flex gap-1">
        {wears.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1 rounded-full transition-all duration-500 ${
              idx === currentIndex ? "w-4 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "w-1 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}