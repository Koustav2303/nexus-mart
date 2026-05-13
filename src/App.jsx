import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Spotlight from "./components/Spotlight";
import AuthSection from "./components/Auth";
import Footer from "./components/Footer"; // <-- Import Footer

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical", 
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Featured />
        <Spotlight />
        <AuthSection />
      </main>
      <Footer /> {/* <-- Add Footer here */}
    </div>
  );
}

export default App;