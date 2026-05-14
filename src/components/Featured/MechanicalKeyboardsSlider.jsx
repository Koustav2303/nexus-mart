import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Explicitly import the images so Vite bundles them properly
import mechkey1 from "../../assets/keyboard/mechkey1.jpg";
import mechkey2 from "../../assets/keyboard/mechkey2.jpg";
import mechkey3 from "../../assets/keyboard/mechkey3.jpg";
import mechkey4 from "../../assets/keyboard/mechkey4.jpg";
import mechkey5 from "../../assets/keyboard/mechkey5.jpg";
import mechkey6 from "../../assets/keyboard/mechkey6.jpg";
import mechkey7 from "../../assets/keyboard/mechkey7.jpg";
import mechkey8 from "../../assets/keyboard/mechkey8.jpg";
import mechkey9 from "../../assets/keyboard/mechkey9.jpg";
import mechkey10 from "../../assets/keyboard/mechkey10.jpg";

const keyboards = [
  { src: mechkey1, label: "CyberType 60", desc: "Custom linear switches with a flex-cut PC plate." },
  { src: mechkey2, label: "Neon Prism TKL", desc: "Double-shot PBT caps with underglow." },
  { src: mechkey3, label: "Arctic Glacier", desc: "Silent tactile switches for stealth typing." },
  { src: mechkey4, label: "Obsidian Dark", desc: "Heavy aluminum chassis, thocky acoustics." },
  { src: mechkey5, label: "Synthwave 75%", desc: "Retro-futuristic colorway with a volume knob." },
  { src: mechkey6, label: "Chroma Shift", desc: "Per-key RGB mapped to game environments." },
  { src: mechkey7, label: "Solar Flare", desc: "Hot-swappable PCB for ultimate customization." },
  { src: mechkey8, label: "Crimson Forge", desc: "Brass weight and gasket-mounted isolation." },
  { src: mechkey9, label: "Nomad Wireless", desc: "Ultra-low latency Bluetooth 5.2." },
  { src: mechkey10, label: "Titanium Core", desc: "Aerospace-grade materials and lubed stabs." },
];

export default function MechanicalKeyboardsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef([]);

  // Auto-play timer - Set to 5.1s to offset from the other sliders
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === keyboards.length - 1 ? 0 : prev + 1));
    }, 5100);

    return () => clearInterval(timer);
  }, []);

  // GSAP Fade & Scale Animation (Different from the slide effect for variety)
  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      if (index === currentIndex) {
        // Active slide fades in and scales down slightly to normal size
        gsap.to(slide, {
          opacity: 1,
          scale: 1,
          zIndex: 10,
          duration: 1.2,
          ease: "power3.out",
        });
        
        // Text animates up
        gsap.fromTo(
          slide.querySelector('.slide-text'),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: "power3.out" }
        );
      } else {
        // Inactive slides fade out and scale up slightly
        gsap.to(slide, {
          opacity: 0,
          scale: 1.05,
          zIndex: 1,
          duration: 1.2,
          ease: "power3.out",
        });
      }
    });
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-950">
      {keyboards.map((kb, idx) => (
        <div
          key={idx}
          ref={(el) => (slidesRef.current[idx] = el)}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0, scale: 1.05 }} // Initial state
        >
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <img
              src={kb.src}
              alt={kb.label}
              className="w-full h-full object-cover"
            />
            {/* Darker gradient for text legibility on the small box */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
          </div>

          {/* Text Overlay - Sized for a col-span-1 box */}
          <div className="slide-text absolute bottom-0 left-0 right-0 z-10 p-6 flex flex-col justify-end h-full">
            <span className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-1">
              Custom Build {idx + 1}/10
            </span>
            <h3 className="text-2xl font-black text-white mb-2 drop-shadow-lg leading-tight">
              {kb.label}
            </h3>
            <p className="text-xs text-slate-300 mb-4 drop-shadow-md line-clamp-2">
              {kb.desc}
            </p>
            
            <button className="w-max px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-cyan-500 hover:border-cyan-400 hover:text-slate-950 text-white text-xs font-bold rounded-full transition-all">
              Explore
            </button>
          </div>
        </div>
      ))}
      
      {/* Progress Indicators */}
      <div className="absolute top-4 right-4 z-20 flex gap-1">
        {keyboards.map((_, idx) => (
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