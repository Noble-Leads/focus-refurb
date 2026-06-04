type VimeoEmbedProps = {
  videoId: string;
  title: string;
};

/**
 * Always renders a Vimeo iframe in HTML (SSR + client). No lazy-load or click-to-swap —
 * those patterns break when hydration is delayed and when parent sections use content-visibility.
 */
const VimeoEmbed = ({ videoId, title }: VimeoEmbedProps) => {
  const embedSrc = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&playsinline=1&title=0&byline=0&portrait=0`;

  return (
    <div className="case-study-video relative w-full aspect-[9/16] bg-muted">
      <iframe
        src={embedSrc}
        className="absolute inset-0 h-full w-full border-0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        title={title}
      />
    </div>
  );
};

export default VimeoEmbed;
