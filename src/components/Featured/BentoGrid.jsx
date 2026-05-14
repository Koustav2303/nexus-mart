import CategoryCard from "./CategoryCard";
import GamingRigSlider from "./GamingRigSlider";
import WearableTechSlider from "./WearableTechSlider";
import MechanicalKeyboardsSlider from "./MechanicalKeyboardsSlider";
import CinematicDisplaysSlider from "./CinematicDisplaysSlider"; // <-- Import the final slider

export default function BentoGrid({ gridRef }) {
  const categories = [
    {
      id: 1,
      className: "col-span-1 md:col-span-2 row-span-2 min-h-[450px] md:min-h-[600px]",
    },
    {
      id: 2,
      className: "col-span-1 min-h-[240px] md:min-h-[280px]", 
    },
    {
      id: 3,
      className: "col-span-1 min-h-[240px] md:min-h-[280px]",
    },
    {
      id: 4,
      // Replaced by CinematicDisplaysSlider
      className: "col-span-1 md:col-span-2 min-h-[240px] md:min-h-[280px]",
    },
  ];

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 md:gap-6">
      {categories.map((cat) => {
        // Slot 1: Gaming Rigs (Horizontal Slide)
        if (cat.id === 1) {
          return (
            <div key={cat.id} className={`${cat.className} category-card rounded-3xl overflow-hidden shadow-2xl border border-white/5`}>
              <GamingRigSlider />
            </div>
          );
        }
        // Slot 2: Wearable Tech (Vertical Slide)
        if (cat.id === 2) {
          return (
            <div key={cat.id} className={`${cat.className} category-card rounded-3xl overflow-hidden shadow-2xl border border-white/5`}>
              <WearableTechSlider />
            </div>
          );
        }
        // Slot 3: Mechanical Keyboards (Fade & Scale)
        if (cat.id === 3) {
          return (
            <div key={cat.id} className={`${cat.className} category-card rounded-3xl overflow-hidden shadow-2xl border border-white/5`}>
              <MechanicalKeyboardsSlider />
            </div>
          );
        }
        // Slot 4: Cinematic Displays (Crossfade + Ken Burns)
        if (cat.id === 4) {
          return (
            <div key={cat.id} className={`${cat.className} category-card rounded-3xl overflow-hidden shadow-2xl border border-white/5`}>
              <CinematicDisplaysSlider />
            </div>
          );
        }
        
        // Failsafe (won't be hit with the current 4 items, but good practice)
        return null; 
      })}
    </div>
  );
}