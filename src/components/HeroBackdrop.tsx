import BrandPattern from "./BrandPattern";

const HeroBackdrop = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden bg-section-dark">
      <div className="absolute -top-20 -left-16 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-accent/12 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-accent/8 blur-3xl max-md:hidden" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(210_100%_45%_/_0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(210_100%_45%_/_0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(220_20%_8%_/_0.2),hsl(220_20%_8%_/_0.85))]" />
      <BrandPattern variant="dark" className="z-[1] opacity-50" />
    </div>
  );
};

export default HeroBackdrop;
