import { Heart, Sparkles, Star } from "lucide-react";

const FloatingHearts = () => {
  const elements = [
    { icon: Heart, className: "top-[10%] left-[5%] text-rose animation-delay-100", size: 24 },
    { icon: Heart, className: "top-[20%] right-[10%] text-rose-light animation-delay-300", size: 18 },
    { icon: Sparkles, className: "top-[15%] left-[20%] text-lavender animation-delay-200", size: 16 },
    { icon: Heart, className: "top-[30%] left-[8%] text-accent animation-delay-400", size: 20 },
    { icon: Star, className: "top-[25%] right-[15%] text-peach animation-delay-500", size: 14 },
    { icon: Heart, className: "top-[40%] right-[5%] text-rose animation-delay-600", size: 22 },
    { icon: Sparkles, className: "top-[50%] left-[3%] text-lavender-light animation-delay-700", size: 18 },
    { icon: Heart, className: "top-[60%] right-[8%] text-rose-light animation-delay-100", size: 16 },
    { icon: Star, className: "top-[70%] left-[10%] text-accent animation-delay-300", size: 12 },
    { icon: Heart, className: "top-[80%] right-[12%] text-rose animation-delay-500", size: 20 },
    { icon: Sparkles, className: "top-[85%] left-[15%] text-lavender animation-delay-200", size: 14 },
    { icon: Heart, className: "top-[90%] right-[20%] text-rose-light animation-delay-400", size: 18 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, i) => (
        <el.icon
          key={i}
          size={el.size}
          className={`absolute animate-float-heart fill-current opacity-60 ${el.className}`}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
