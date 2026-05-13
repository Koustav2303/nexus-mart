import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VisualPanel from "./VisualPanel";
import AuthForm from "./AuthForm";

gsap.registerPlugin(ScrollTrigger);

export default function AuthSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 100, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative flex justify-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div 
        ref={containerRef}
        className="w-full max-w-6xl bg-slate-950 rounded-[2.5rem] border border-slate-800 shadow-2xl relative z-10 flex flex-col lg:flex-row overflow-hidden"
      >
        {/* Left Side: Visual/Branding (Hidden on mobile) */}
        <div className="hidden lg:block lg:w-1/2 p-2">
          <VisualPanel />
        </div>

        {/* Right Side: The Form */}
        <div className="w-full lg:w-1/2 bg-slate-950 relative">
           <AuthForm />
        </div>
      </div>
    </section>
  );
}