import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Newsletter from "./Newsletter";
import BrandColumn from "./BrandColumn";
import LinkColumns from "./LinkColumns";
import BottomBar from "./BottomBar";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger all main sections of the footer
      gsap.fromTo(
        ".footer-animate",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-slate-950 pt-24 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/10 blur-[120px] pointer-events-none rounded-t-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="footer-animate">
          <Newsletter />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 footer-animate">
          <BrandColumn />
          <LinkColumns />
        </div>

        <div className="footer-animate">
          <BottomBar />
        </div>
      </div>
    </footer>
  );
}