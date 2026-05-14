import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Explicitly import all 11 images so Vite bundles them
import display1 from "../../assets/cinematicdisplay/display1.jpg";
import display2 from "../../assets/cinematicdisplay/display2.jpg";
import display3 from "../../assets/cinematicdisplay/display3.jpg";
import display4 from "../../assets/cinematicdisplay/display4.jpg";
import display5 from "../../assets/cinematicdisplay/display5.jpg";
import display6 from "../../assets/cinematicdisplay/display6.jpg";
import display7 from "../../assets/cinematicdisplay/display7.jpg";
import display8 from "../../assets/cinematicdisplay/display8.jpg";
import display9 from "../../assets/cinematicdisplay/display9.jpg";
import display10 from "../../assets/cinematicdisplay/display10.jpg";
import display11 from "../../assets/cinematicdisplay/display11.jpg";

const displays = [
  { src: display1, label: "Ultrawide Horizon", desc: "49-inch curved OLED for total immersion." },
  { src: display2, label: "Quantum Retina", desc: "Pixel-perfect 8K resolution with deep blacks." },
  { src: display3, label: "Neon Sync Hub", desc: "Reactive backlighting integrated with your gameplay." },
  { src: display4, label: "Spider-Verse Deck", desc: "Dual-monitor vertical stack for supreme multitasking." },
  { src: display5, label: "Holographic Arc", desc: "Bezel-less borders for a seamless multi-display setup." },
  { src: display6, label: "Abyss OLED", desc: "True black contrast ratio and 240Hz refresh rate." },
  { src: display7, label: "Amethyst Glow", desc: "Color-calibrated for professional creators." },
  { src: display8, label: "Glacier Setup", desc: "Ultra-clean aesthetic with hidden cable routing." },
  { src: display9, label: "Shadow Realm", desc: "Focus-driven minimal display with ambient lighting." },
  { src: display10, label: "Azure Command", desc: "Triple-screen panoramic view for simulator pilots." },
  { src: display11, label: "Forest Zenith", desc: "Ultra-wide canvas blending tech with natural lighting." },
];

export default function CinematicDisplaysSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef([]);

  // Auto-play timer - 5.5s (unique offset)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === displays.length - 1 ? 0 : prev + 1));
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  // GSAP Cinematic Crossfade + Ken Burns Effect
  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      const img = slide.querySelector("img");
      
      if (index === currentIndex) {
        // Fade in the active slide
        gsap.to(slide, {
          opacity: 1,
          zIndex: 10,
          duration: 1.5,
          ease: "power2.inOut",
        });
        
        // Slow pan/scale effect on the image (Ken Burns)
        gsap.fromTo(img, 
          { scale: 1.1, x: "-2%" }, 
          { scale: 1, x: "0%", duration: 6, ease: "none" }
        );

        // Text animation
        gsap.fromTo(
          slide.querySelector('.slide-text'),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
        );
      } else {
        // Fade out inactive slides
        gsap.to(slide, {
          opacity: 0,
          zIndex: 1,
          duration: 1.5,
          ease: "power2.inOut",
        });
      }
    });
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-950">
      {displays.map((disp, idx) => (
        <div
          key={idx}
          ref={(el) => (slidesRef.current[idx] = el)}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0 }}
        >
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={disp.src}
              alt={disp.label}
              className="w-full h-full object-cover origin-center"
            />
            {/* Wider gradient since this is a col-span-2 box */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          </div>

          {/* Text Overlay - Sized for a col-span-2 box */}
          <div className="slide-text absolute bottom-0 left-0 right-0 z-10 p-6 md:p-10 flex flex-col justify-end h-full">
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
              Setup Inspiration {idx + 1}/11
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2 drop-shadow-lg leading-tight">
                  {disp.label}
                </h3>
                <p className="text-sm md:text-base text-slate-300 drop-shadow-md">
                  {disp.desc}
                </p>
              </div>
              <button className="w-max shrink-0 px-6 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white text-white hover:text-slate-950 text-sm font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Shop Monitors
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Progress Indicators - positioned differently for the wide box */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 flex gap-1.5">
        {displays.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-700 ${
              idx === currentIndex ? "w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}