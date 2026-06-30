/** Append GHL's built-in Source field value to an embedded form iframe URL. */
export function ghlFormSrc(baseSrc: string, source?: string): string {
  if (!source) return baseSrc;
  const url = new URL(baseSrc);
  url.searchParams.set("source", source);
  return url.toString();
}
