import { useEffect, useRef } from "react";
import gsap from "gsap";
import BannerText from "./BannerText";
import ProductShowcase from "./ProductShowcase";
import FloatingBadges from "./FloatingBadges";

export default function Hero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const showcaseRef = useRef(null);
  const badgesRef = useRef(null);

  useEffect(() => {
    // Cinematic entrance timeline
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(textRef.current, { y: 0, opacity: 1, duration: 1, delay: 0.2 })
      .to(showcaseRef.current, { scale: 1, opacity: 1, duration: 1.2 }, "-=0.6")
      .to(badgesRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8");
      
    // Subtle continuous floating animation for the product showcase
    gsap.to(showcaseRef.current, {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden flex items-center bg-slate-950"
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <BannerText textRef={textRef} />
          <ProductShowcase showcaseRef={showcaseRef} />
          <FloatingBadges badgesRef={badgesRef} />
        </div>
      </div>
    </section>
  );
}