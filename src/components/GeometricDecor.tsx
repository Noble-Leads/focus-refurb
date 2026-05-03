const GeometricDecor = ({
  variant = "dots",
  className = "",
}: {
  variant?: "dots" | "lines" | "corner" | "grid";
  className?: string;
}) => {
  if (variant === "dots") {
    return (
      <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 25 }).map((_, i) => (
            <circle key={i} cx={12 + (i % 5) * 24} cy={12 + Math.floor(i / 5) * 24} r="2.5" fill="currentColor" opacity="0.15" />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "lines") {
    return (
      <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.08" />
          <line x1="40" y1="0" x2="200" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.06" />
          <line x1="80" y1="0" x2="200" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.04" />
          <line x1="0" y1="40" x2="160" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.06" />
          <line x1="0" y1="80" x2="120" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.04" />
        </svg>
      </div>
    );
  }

  if (variant === "corner") {
    return (
      <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80V0h80" stroke="currentColor" strokeWidth="2" opacity="0.1" fill="none" />
          <path d="M0 60V20h40" stroke="currentColor" strokeWidth="1" opacity="0.07" fill="none" />
        </svg>
      </div>
    );
  }

  // grid
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="40" height="40" stroke="currentColor" strokeWidth="1" opacity="0.06" fill="none" />
        <rect x="40" y="40" width="40" height="40" stroke="currentColor" strokeWidth="1" opacity="0.08" fill="none" />
        <rect x="80" y="0" width="40" height="40" stroke="currentColor" strokeWidth="1" opacity="0.05" fill="none" />
        <rect x="0" y="80" width="40" height="40" stroke="currentColor" strokeWidth="1" opacity="0.05" fill="none" />
        <rect x="80" y="80" width="40" height="40" stroke="currentColor" strokeWidth="1" opacity="0.07" fill="none" />
        <rect x="120" y="40" width="40" height="40" stroke="currentColor" strokeWidth="1" opacity="0.04" fill="none" />
        <rect x="40" y="120" width="40" height="40" stroke="currentColor" strokeWidth="1" opacity="0.04" fill="none" />
        <rect x="120" y="120" width="40" height="40" stroke="currentColor" strokeWidth="1" opacity="0.06" fill="none" />
      </svg>
    </div>
  );
};

export default GeometricDecor;
