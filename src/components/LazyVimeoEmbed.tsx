import { useEffect, useRef, useState } from "react";

type LazyVimeoEmbedProps = {
  videoId: string;
  title: string;
  /** Vimeo oEmbed thumbnail; avoids extra API calls */
  posterUrl?: string;
  /** Render the player in page HTML immediately (recommended for hero / case-study videos) */
  eager?: boolean;
};

const buildEmbedSrc = (videoId: string, autoplay = false) => {
  const params = new URLSearchParams({
    badge: "0",
    autopause: "0",
    player_id: "0",
    app_id: "58479",
    playsinline: "1",
  });
  if (autoplay) {
    params.set("autoplay", "1");
  }
  return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
};

const LazyVimeoEmbed = ({
  videoId,
  title,
  posterUrl,
  eager = false,
}: LazyVimeoEmbedProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(eager);
  const [autoplay, setAutoplay] = useState(false);

  const handlePlayClick = () => {
    setAutoplay(true);
    setIsActive(true);
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root || isActive || eager) {
      return;
    }

    const activate = () => setIsActive(true);

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            activate();
            observer.disconnect();
          }
        },
        { rootMargin: "120px 0px", threshold: 0.01 }
      );
      observer.observe(root);
      return () => observer.disconnect();
    }

    activate();
  }, [eager, isActive]);

  const poster = posterUrl ?? `https://vumbnail.com/${videoId}.jpg`;

  return (
    <div ref={rootRef} className="w-full">
      <div style={{ padding: "177.78% 0 0 0", position: "relative" }}>
        {isActive ? (
          <iframe
            src={buildEmbedSrc(videoId, autoplay)}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title={title}
            loading={eager ? "eager" : "lazy"}
          />
        ) : (
          <button
            type="button"
            onClick={handlePlayClick}
            className="absolute inset-0 w-full h-full border-0 p-0 cursor-pointer bg-muted group"
            aria-label={`Play video: ${title}`}
          >
            <img
              src={poster}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={360}
              height={640}
            />
            <span className="absolute inset-0 bg-section-dark/25 group-hover:bg-section-dark/35 transition-colors" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gold text-section-dark shadow-lg">
              <svg viewBox="0 0 24 24" className="h-7 w-7 ml-0.5 fill-current" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default LazyVimeoEmbed;
