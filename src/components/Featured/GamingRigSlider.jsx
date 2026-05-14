import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// 1. Explicitly import every image so Vite bundles them correctly
import rig1 from "../../assets/gamingrig/rig1.jpg";
import rig2 from "../../assets/gamingrig/rig2.jpg";
import rig3 from "../../assets/gamingrig/rig3.jpg";
import rig4 from "../../assets/gamingrig/rig4.jpg";
import rig5 from "../../assets/gamingrig/rig5.jpg";
import rig6 from "../../assets/gamingrig/rig6.jpg";
import rig7 from "../../assets/gamingrig/rig7.jpg";
import rig8 from "../../assets/gamingrig/rig8.jpg";
import rig9 from "../../assets/gamingrig/rig9.jpg";
import rig10 from "../../assets/gamingrig/rig10.jpg";

// 2. Map the imported variables to the array instead of strings
const rigs = [
  { src: rig1, label: "Polar Apex", desc: "Pure White Perfection" },
  { src: rig2, label: "Quantum Blue", desc: "Next-Gen Performance" },
  { src: rig3, label: "Neon Vanguard", desc: "Unleash The Future" },
  { src: rig4, label: "Aura Frost", desc: "Ultimate Cooling Tech" },
  { src: rig5, label: "Hydra Genesis", desc: "Custom Liquid Cooled" },
  { src: rig6, label: "Titan Slate", desc: "Aerospace Precision" },
  { src: rig7, label: "Inferno Red", desc: "Unmatched Power" },
  { src: rig8, label: "Solstice Ember", desc: "Cinematic Immersion" },
  { src: rig9, label: "Gravity Abyss", desc: "Minimalist Beast" },
  { src: rig10, label: "Void Prism", desc: "Pure Mechanical Art" },
];

export default function GamingRigSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef([]);

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === rigs.length - 1 ? 0 : prev + 1));
    }, 4500); // Change image every 4.5 seconds

    return () => clearInterval(timer);
  }, []);

  // GSAP Sliding Animation
  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      if (index === currentIndex) {
        gsap.to(slide, {
          x: "0%",
          opacity: 1,
          zIndex: 10,
          duration: 1,
          ease: "power4.out",
        });
        
        gsap.fromTo(
          slide.querySelector('.slide-text'),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
        );
      } 
      else if (index === (currentIndex === 0 ? rigs.length - 1 : currentIndex - 1)) {
        gsap.to(slide, {
          x: "-100%",
          opacity: 0,
          zIndex: 5,
          duration: 1,
          ease: "power4.out",
        });
      } 
      else {
        gsap.set(slide, {
          x: "100%",
          opacity: 0,
          zIndex: 1,
        });
      }
    });
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl bg-slate-950">
      {rigs.map((rig, idx) => (
        <div
          key={idx}
          ref={(el) => (slidesRef.current[idx] = el)}
          className="absolute inset-0 w-full h-full"
          style={{ transform: "translateX(100%)", opacity: 0 }}
        >
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            {/* 3. Use the imported 'src' directly */}
            <img
              src={rig.src}
              alt={rig.label}
              className="w-full h-full object-cover"
            />
            {/* Cinematic Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          </div>

          {/* Text Overlay */}
          <div className="slide-text absolute bottom-0 left-0 right-0 z-10 p-8 md:p-12 flex flex-col justify-end h-full">
            <span className="text-cyan-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-2">
              Featured Build {idx + 1}/10
            </span>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-3 drop-shadow-lg">
              {rig.label}
            </h3>
            <p className="text-base md:text-lg text-slate-300 max-w-md mb-6 drop-shadow-md line-clamp-2">
              {rig.desc}. Engineered for ultimate visual fidelity and uncompromising frame rates.
            </p>
            
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                View Specs
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Progress Indicators */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 flex gap-1.5">
        {rigs.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentIndex ? "w-6 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}