import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Kept for API compatibility; entrance animation was removed so copy is never hidden before JS. */
  delay?: number;
}

/**
 * Wrapper for section blocks. Previously applied `opacity-0` until IntersectionObserver ran in
 * `useEffect`, which made all copy invisible in static HTML and before hydration — empty site.
 */
const ScrollReveal = ({ children, className = "" }: ScrollRevealProps) => {
  return <div className={className}>{children}</div>;
};

export default ScrollReveal;
