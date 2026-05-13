import { useEffect, useRef } from "react";
import { X, Search } from "lucide-react";
import gsap from "gsap";

export default function MobileMenu({ isOpen, setIsOpen }) {
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.3 });
      gsap.to(menuRef.current, { x: 0, duration: 0.4, ease: "power3.out" });
    } else {
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.3 });
      gsap.to(menuRef.current, { x: "-100%", duration: 0.4, ease: "power3.in" });
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 invisible"
      />

      {/* Sidebar */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 h-full w-3/4 max-w-sm bg-slate-950 border-r border-slate-800 z-50 p-6 -translate-x-full flex flex-col gap-8"
      >
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-white">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
          <input
            type="text"
            className="w-full bg-slate-900 border border-slate-800 text-slate-200 rounded-lg pl-10 p-3 outline-none focus:border-cyan-500"
            placeholder="Search..."
          />
        </div>

        <nav className="flex flex-col gap-6 text-slate-300 font-medium">
          <a href="#" className="hover:text-cyan-400">Categories</a>
          <a href="#" className="hover:text-cyan-400">Deals</a>
          <a href="#" className="hover:text-cyan-400">What's New</a>
          <a href="#" className="hover:text-cyan-400">Delivery</a>
          <hr className="border-slate-800" />
          <a href="#" className="hover:text-cyan-400">Profile</a>
          <a href="#" className="hover:text-cyan-400 flex justify-between">
            Wishlist <span className="text-rose-500">2</span>
          </a>
          <a href="#" className="hover:text-cyan-400 flex justify-between">
            Cart <span className="text-cyan-500">5</span>
          </a>
        </nav>
      </div>
    </div>
  );
}