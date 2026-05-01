import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in milliseconds for subtle entrance stagger. */
  delay?: number;
}

/**
 * Wrapper for section blocks. Previously applied `opacity-0` until IntersectionObserver ran in
 * `useEffect`, which made all copy invisible in static HTML and before hydration — empty site.
 */
const ScrollReveal = ({ children, className = "", delay = 0 }: ScrollRevealProps) => {
  return (
    <div
      className={`reveal-in ${className}`.trim()}
      style={{ animationDelay: `${Math.max(0, delay)}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
