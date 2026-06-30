import { cn } from "@/lib/utils";

type BrandPatternProps = {
  variant?: "dark" | "light";
  className?: string;
};

/** Subtle FR grid watermark for photo heroes and dark/blue gradient heroes. */
const BrandPattern = ({ variant = "dark", className }: BrandPatternProps) => {
  const isDark = variant === "dark";
  const patternId = `fr-grid-${variant}`;

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} width="120" height="120" patternUnits="userSpaceOnUse">
            <text
              x="8"
              y="48"
              fill={isDark ? "rgba(255,255,255,0.035)" : "rgba(15,23,42,0.04)"}
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontSize="28"
              fontWeight="800"
              letterSpacing="-0.05em"
            >
              FR
            </text>
            <text
              x="68"
              y="108"
              fill={isDark ? "rgba(255,255,255,0.025)" : "rgba(15,23,42,0.03)"}
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontSize="28"
              fontWeight="800"
              letterSpacing="-0.05em"
            >
              FR
            </text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

export default BrandPattern;
