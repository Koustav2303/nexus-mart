import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "./SectionHeader";
import BentoGrid from "./BentoGrid";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Featured() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Starts when the top of the section hits 80% of the viewport height
        },
      });

      // Grid Items Stagger Animation
      gsap.fromTo(
        ".category-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15, // Creates that sequential reveal effect
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef); // Scope to this section

    return () => ctx.revert(); // Cleanup GSAP contexts on unmount
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-slate-950 py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-900/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader headerRef={headerRef} />
        <BentoGrid gridRef={gridRef} />
        
        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <button className="px-6 py-3 border border-slate-800 text-slate-300 rounded-full text-sm font-medium hover:bg-slate-900 transition-colors">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}