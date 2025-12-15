import { Heart } from "lucide-react";

interface BulletListProps {
  items: string[];
}

const BulletList = ({ items }: BulletListProps) => {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 animate-fade-in-up"
          style={{ animationDelay: `${(index + 1) * 100}ms` }}
        >
          <Heart
            size={18}
            className="text-rose fill-rose-light flex-shrink-0 mt-1 animate-pulse-soft"
          />
          <span className="text-foreground/90 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
