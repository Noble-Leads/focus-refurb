import { useEffect, useState } from "react";
import { ArrowRight, ZoomIn } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LANDING_SECTION = "py-12 md:py-20";

type GalleryImage = {
  src: string;
  alt: string;
};

const carpentryPhotos: GalleryImage[] = [
  {
    src: "/images/roofing/carpentry-1.png",
    alt: "New timber roof trusses being installed on a residential property in Streatham",
  },
  {
    src: "/images/roofing/carpentry-2.png",
    alt: "Roof carpentry framework with metal connector plates viewed from scaffolding",
  },
  {
    src: "/images/roofing/carpentry-3.png",
    alt: "Hipped roof timber structure with white fascia boards installed",
  },
  {
    src: "/images/roofing/carpentry-4.png",
    alt: "Wide view of new timber roof framework on a pebbledash house",
  },
  {
    src: "/images/roofing/carpentry-5.png",
    alt: "Interior view of roof trusses and floor joists during construction",
  },
];

const roofPhotos: GalleryImage[] = [
  {
    src: "/images/roofing/roof-1.png",
    alt: "Completed clay tile roof with integrated solar panels in Streatham",
  },
  {
    src: "/images/roofing/roof-2.png",
    alt: "Hip roof re-tiled with flush-mounted solar panels surrounded by scaffolding",
  },
  {
    src: "/images/roofing/roof-3.png",
    alt: "New reddish-brown roof tiles with integrated solar panel array",
  },
  {
    src: "/images/roofing/roof-4.png",
    alt: "Re-tiled roof with solar panels and dormer window detail",
  },
];

const parapetPhotos: GalleryImage[] = [
  {
    src: "/images/roofing/parapet-1.png",
    alt: "Rebuilt brick parapet wall with dog-tooth course and lead flashing",
  },
  {
    src: "/images/roofing/parapet-2.png",
    alt: "New parapet wall brickwork with coping stones between tiled roof sections",
  },
];

type Phase = "structure" | "finished";

const phases: Phase[] = ["structure", "finished"];

const phaseConfig: Record<
  Phase,
  { label: string; caption: string; images: GalleryImage[] }
> = {
  structure: {
    label: "Structure",
    caption: "New timber framework — the foundation everything else is built on",
    images: carpentryPhotos,
  },
  finished: {
    label: "Finished roof",
    caption: "Re-tiled and weatherproof — prepared for solar panel installation",
    images: roofPhotos,
  },
};

type ImageLightboxProps = {
  image: GalleryImage | null;
  onClose: () => void;
};

const ImageLightbox = ({ image, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    if (!image) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-sm font-semibold text-white"
      >
        Close
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-[90vh] max-w-full rounded-lg object-contain"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
};

export const RoofingStreathamCaseStudy = ({ formAnchorId = "roofing-enquiry-form" }: { formAnchorId?: string }) => {
  const [phase, setPhase] = useState<Phase>("structure");
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const { caption, images } = phaseConfig[phase];
  const activeImage = images[activeIndex] ?? images[0];

  const switchPhase = (next: Phase) => {
    setPhase(next);
    setActiveIndex(0);
  };

  return (
    <>
      <section className={`${LANDING_SECTION} bg-background [content-visibility:visible]`}>
        <div className="container max-w-6xl">
          <article className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ScrollReveal>
              <div>
                <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
                  Case Study — Roof Replacement
                </p>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-4">
                  Full Roof Replacement — Streatham, South London
                </h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed mb-6">
                  <p>
                    A landlord in Streatham had been patching the same roof for years. By the time we got on
                    site, the structure underneath had deteriorated — a repair wasn&apos;t going to cut it. The
                    whole roof needed to come off and start again.
                  </p>
                  <p>
                    We stripped back to the rafters, rebuilt the timber framework, re-tiled the full roof and
                    finished it to accommodate the client&apos;s solar panel installation. Solid carpentry at the
                    start means the tiles sit correctly, water runs off cleanly, and the roof performs for decades
                    rather than years.
                  </p>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Complete strip-back and timber framework rebuild",
                    "Full re-tile with integrated solar panel prep",
                    "Fully weatherproof — built to last",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={`#${formAnchorId}`}>
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    Get a Free Roof Inspection <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </ScrollReveal>

            <div className="[content-visibility:visible]">
              <div className="flex gap-2 mb-4" role="tablist" aria-label="Project phase">
                {phases.map((key) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={phase === key}
                    onClick={() => switchPhase(key)}
                    className={cn(
                      "rounded-md px-4 py-2 text-sm font-heading font-semibold transition-colors cursor-pointer",
                      phase === key
                        ? "bg-gold text-accent-foreground"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {phaseConfig[key].label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setLightboxImage(activeImage)}
                className="group relative w-full rounded-lg overflow-hidden border border-border shadow-md mb-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                aria-label={`View larger: ${activeImage.alt}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    key={activeImage.src}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-3 right-3 rounded-full bg-black/60 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>
              </button>

              <p className="text-foreground font-heading font-semibold text-sm mb-3">{caption}</p>

              <div
                key={phase}
                className={cn(
                  "grid gap-2",
                  images.length === 5 ? "grid-cols-5" : "grid-cols-4",
                )}
              >
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => {
                      setActiveIndex(index);
                      setLightboxImage(image);
                    }}
                    className={cn(
                      "relative rounded overflow-hidden border-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
                      index === activeIndex ? "border-gold shadow-sm" : "border-transparent opacity-70 hover:opacity-100",
                    )}
                    aria-label={`View photo ${index + 1}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt=""
                        width={120}
                        height={120}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
};

export const RoofingParapetCaseStudy = () => {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <section className={`${LANDING_SECTION} bg-secondary border-t border-border [content-visibility:visible]`}>
        <div className="container max-w-6xl">
          <article className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="grid grid-cols-2 gap-3 order-2 md:order-1 [content-visibility:visible]">
              {parapetPhotos.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setLightboxImage(image)}
                  className="group relative rounded-lg overflow-hidden border border-border shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  aria-label={`View larger: ${image.alt}`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={533}
                      sizes="(max-width: 768px) 45vw, 280px"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </button>
              ))}
            </div>

            <ScrollReveal>
              <div className="order-1 md:order-2">
                <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-3">
                  Structural Repair
                </p>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-4">
                  Parapet Wall Rebuild — London
                </h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                  <p>
                    Parapet walls sit exposed at the edge of a roof, bearing wind and rain year round. When they
                    start to fail — cracked mortar, loose coping stones, crumbling brickwork — water gets in
                    quietly.
                  </p>
                  <p>
                    This parapet had reached the point where a repair wasn&apos;t enough. We rebuilt it with new
                    brickwork, repointed joints and secure coping stones throughout. The kind of job that
                    doesn&apos;t look dramatic once it&apos;s done, but protects everything below it for years to
                    come.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </article>
        </div>
      </section>

      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
};

const RoofingProjectGallery = () => (
  <>
    <RoofingStreathamCaseStudy />
    <RoofingParapetCaseStudy />
  </>
);

export default RoofingProjectGallery;
