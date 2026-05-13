import { Star } from "lucide-react";

export default function Rating({ score, reviews }) {
  return (
    <div className="flex items-center gap-2 mt-3 mb-4">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= score ? "text-amber-400 fill-amber-400" : "text-slate-700"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-slate-400 font-medium">({reviews})</span>
    </div>
  );
}