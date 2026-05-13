import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

gsap.registerPlugin(ScrollTrigger);

export default function Spotlight() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "CyberDeck Pro Keyboard",
      description: "Low-profile mechanical switches with per-key RGB and OLED display.",
      price: "199",
      oldPrice: "249",
      rating: 5,
      reviews: "1.2k",
      colors: ["#0f172a", "#e2e8f0"],
      isNew: true,
    },
    {
      id: 2,
      name: "Aura Noise-Canceling Pods",
      description: "Studio-grade audio in a microscopic form factor.",
      price: "149",
      oldPrice: "179",
      rating: 4,
      reviews: "856",
      colors: ["#000000", "#ffffff", "#22d3ee"],
      isNew: true,
    },
    {
      id: 3,
      name: "Titanium Smart Ring",
      description: "Health tracking and NFC payments wrapped in aerospace-grade titanium.",
      price: "299",
      oldPrice: "349",
      rating: 5,
      reviews: "432",
      colors: ["#475569", "#b45309"],
      isNew: false,
    },
    {
      id: 4,
      name: "Haptic VR Gloves",
      description: "Feel the metaverse with millimeter-precision force feedback.",
      price: "499",
      oldPrice: "599",
      rating: 4,
      reviews: "128",
      colors: ["#020617"],
      isNew: true,
    },
  ];

  useEffect(() => {
    // Only apply GSAP horizontal scroll on desktop sizes
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      let panels = gsap.utils.toArray(".product-panel");
      let totalWidth = sliderRef.current.scrollWidth - window.innerWidth + 100;

      gsap.to(panels, {
        x: () => -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1, // Smooth scrubbing tied to Lenis
          start: "top 10%", // Pins when the section is near the top
          end: () => `+=${totalWidth}`, // Unpins after scrolling the exact width
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-950 py-24 md:py-12 overflow-hidden relative border-t border-slate-900">
      <div className="max-w-[90rem] mx-auto w-full">
        {/* On mobile, this uses native overflow-x-auto. On desktop, GSAP takes over. */}
        <div 
          ref={sliderRef} 
          className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-0 overflow-x-auto md:overflow-visible no-scrollbar pb-12 md:pb-0"
        >
          {/* Title acts as the first panel in the row */}
          <div className="md:w-[400px] shrink-0 pl-4 sm:pl-6 lg:pl-12">
             <SectionTitle />
          </div>

          {/* The Products */}
          <div className="flex items-center gap-6 md:gap-0 px-4 md:px-0">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}