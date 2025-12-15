import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Section = ({ title, children, className = "", delay = 0 }: SectionProps) => {
  return (
    <section
      className={`glass-card p-6 md:p-10 animate-fade-in-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {title && (
        <h2 className="text-2xl md:text-4xl font-script text-gradient mb-6 text-center">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;
