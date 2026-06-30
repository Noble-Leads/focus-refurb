type BeforeAfterSliderProps = {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  aspectClassName?: string;
  objectPosition?: string;
};

const toWebp = (src: string) => src.replace(/\.(png|jpe?g)$/i, ".webp");

const SliderImage = ({
  src,
  alt,
  objectPosition = "object-center",
}: {
  src: string;
  alt: string;
  objectPosition?: string;
}) => (
  <picture className="pointer-events-none block h-full w-full select-none">
    <source srcSet={toWebp(src)} type="image/webp" />
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={`h-full w-full object-cover ${objectPosition}`}
      loading="lazy"
      decoding="async"
    />
  </picture>
);

const BeforeAfterSlider = ({
  before,
  after,
  aspectClassName = "aspect-[3/4] md:aspect-[4/5]",
  objectPosition = "object-center",
}: BeforeAfterSliderProps) => (
  <div className="before-after-slider w-full max-w-2xl mx-auto">
    <div
      data-before-after
      tabIndex={0}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={50}
      className={`before-after-slider__frame relative cursor-ew-resize overflow-hidden rounded-xl border border-border bg-muted shadow-md select-none ${aspectClassName}`}
    >
      <div className="pointer-events-none absolute inset-0 select-none">
        <SliderImage src={after.src} alt={after.alt} objectPosition={objectPosition} />
      </div>

      <div
        data-before-clip
        className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden select-none"
        style={{ width: "50%" }}
        aria-hidden="true"
      >
        <div data-before-inner className="h-full" style={{ width: "200%" }}>
          <SliderImage src={before.src} alt={before.alt} objectPosition={objectPosition} />
        </div>
      </div>

      <div
        data-handle
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_8px_rgba(0,0,0,0.45)]"
        style={{ left: "50%" }}
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-gold shadow-lg">
          <svg className="h-4 w-4 text-section-dark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <span className="pointer-events-none absolute top-3 left-3 z-10 rounded bg-foreground/80 px-2 py-0.5 text-[0.65rem] font-heading font-semibold uppercase tracking-wide text-background sm:text-xs">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 z-10 rounded bg-green-600 px-2 py-0.5 text-[0.65rem] font-heading font-semibold uppercase tracking-wide text-white sm:text-xs">
        After
      </span>
    </div>
    <p className="mt-2 text-center text-xs text-muted-foreground">Drag to compare</p>
  </div>
);

export default BeforeAfterSlider;
