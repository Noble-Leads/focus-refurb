import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ZoomIn, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { scrollToAnchor } from "@/lib/scrollToAnchor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

type ImageLightboxProps = {
  image: GalleryImage | null;
  onClose: () => void;
};

const ImageLightbox = ({ image, onClose }: ImageLightboxProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!image) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [image, onClose]);

  if (!image || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged project photo"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/15 p-2 text-white hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-[90vh] max-w-[min(95vw,1200px)] rounded-lg object-contain"
        onClick={(event) => event.stopPropagation()}
      />
    </div>,
    document.body,
  );
};

type PhotoPanelProps = {
  caption: string;
  images: GalleryImage[];
};

const PhotoPanel = ({ caption, images }: PhotoPanelProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const activeImage = images[activeIndex] ?? images[0];

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => openLightbox(activeImage)}
        className="group relative mb-3 w-full cursor-pointer overflow-hidden rounded-lg border border-border shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        aria-label="View larger image"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
          <div className="absolute bottom-3 right-3 rounded-full bg-black/60 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <ZoomIn className="h-4 w-4" />
          </div>
        </div>
      </button>

      <p className="mb-3 text-sm font-heading font-semibold text-foreground">{caption}</p>

      <div
        className={cn("grid gap-2", images.length === 5 ? "grid-cols-5" : "grid-cols-4")}
        role="tablist"
        aria-label="Project photos"
      >
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => {
              setActiveIndex(index);
              openLightbox(image);
            }}
            className={cn(
              "relative cursor-pointer overflow-hidden rounded border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
              index === activeIndex
                ? "border-gold shadow-sm"
                : "border-transparent opacity-70 hover:opacity-100",
            )}
            aria-label={`Show photo ${index + 1}`}
            aria-selected={index === activeIndex}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={image.src}
                alt=""
                width={120}
                height={120}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </button>
        ))}
      </div>

      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
};

export const RoofingStreathamCaseStudy = ({ formAnchorId = "roofing-enquiry-form" }: { formAnchorId?: string }) => {
  return (
    <section className={`${LANDING_SECTION} bg-background [content-visibility:visible]`}>
      <div className="container max-w-6xl">
        <article className="grid items-start gap-8 md:grid-cols-2 lg:gap-12">
          <ScrollReveal>
            <div>
              <p className="mb-3 text-sm font-heading font-semibold uppercase tracking-widest text-gold">
                Case Study — Roof Replacement
              </p>
              <h2 className="mb-4 text-2xl font-heading font-extrabold text-foreground md:text-3xl">
                Full Roof Replacement — Streatham, South London
              </h2>
              <div className="mb-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  A landlord in Streatham had been patching the same roof for years. By the time we got on site,
                  the structure underneath had deteriorated — a repair wasn&apos;t going to cut it. The whole roof
                  needed to come off and start again.
                </p>
                <p>
                  We stripped back to the rafters, rebuilt the timber framework, re-tiled the full roof and finished
                  it to accommodate the client&apos;s solar panel installation. Solid carpentry at the start means
                  the tiles sit correctly, water runs off cleanly, and the roof performs for decades rather than
                  years.
                </p>
              </div>
              <ul className="mb-8 space-y-2.5">
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
              <Button
                type="button"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => scrollToAnchor(formAnchorId)}
              >
                Get a Free Roof Inspection <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>

          <div>
            <Tabs defaultValue="structure">
              <TabsList className="mb-4 h-auto w-full justify-start gap-2 bg-transparent p-0">
                <TabsTrigger
                  value="structure"
                  className="rounded-md border border-border bg-card px-4 py-2 text-sm font-heading font-semibold data-[state=active]:border-gold data-[state=active]:bg-gold/10 data-[state=active]:text-foreground"
                >
                  Structure
                </TabsTrigger>
                <TabsTrigger
                  value="finished"
                  className="rounded-md border border-border bg-card px-4 py-2 text-sm font-heading font-semibold data-[state=active]:border-gold data-[state=active]:bg-gold/10 data-[state=active]:text-foreground"
                >
                  Finished roof
                </TabsTrigger>
              </TabsList>

              <TabsContent value="structure" className="mt-0 focus-visible:outline-none">
                <PhotoPanel
                  caption="New timber framework — the foundation everything else is built on"
                  images={carpentryPhotos}
                />
              </TabsContent>

              <TabsContent value="finished" className="mt-0 focus-visible:outline-none">
                <PhotoPanel
                  caption="Re-tiled and weatherproof — prepared for solar panel installation"
                  images={roofPhotos}
                />
              </TabsContent>
            </Tabs>
          </div>
        </article>
      </div>
    </section>
  );
};

export const RoofingParapetCaseStudy = () => {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  return (
    <section className={`${LANDING_SECTION} border-t border-border bg-secondary [content-visibility:visible]`}>
      <div className="container max-w-6xl">
        <article className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="order-2 grid grid-cols-2 gap-3 md:order-1">
            {parapetPhotos.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setLightboxImage(image)}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                aria-label={`View larger: ${image.alt}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={533}
                    sizes="(max-width: 768px) 45vw, 280px"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-2 right-2 rounded-full bg-black/60 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <ZoomIn className="h-3.5 w-3.5" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <ScrollReveal>
            <div className="order-1 md:order-2">
              <p className="mb-3 text-sm font-heading font-semibold uppercase tracking-widest text-gold">
                Structural Repair
              </p>
              <h2 className="mb-4 text-2xl font-heading font-extrabold text-foreground md:text-3xl">
                Parapet Wall Rebuild — London
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Parapet walls sit exposed at the edge of a roof, bearing wind and rain year round. When they start
                  to fail — cracked mortar, loose coping stones, crumbling brickwork — water gets in quietly.
                </p>
                <p>
                  This parapet had reached the point where a repair wasn&apos;t enough. We rebuilt it with new
                  brickwork, repointed joints and secure coping stones throughout. The kind of job that doesn&apos;t
                  look dramatic once it&apos;s done, but protects everything below it for years to come.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </article>
      </div>

      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  );
};
