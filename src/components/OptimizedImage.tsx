type OptimizedImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  pictureClassName?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "async" | "sync" | "auto";
};

/** Raster image with WebP source when a .webp sibling exists (same path, .webp extension). */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  pictureClassName,
  loading = "lazy",
  fetchPriority,
  decoding = "async",
}: OptimizedImageProps) => {
  const webpSrc = src.replace(/\.(png|jpe?g)$/i, ".webp");

  return (
    <picture className={pictureClassName}>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
      />
    </picture>
  );
};

export default OptimizedImage;
