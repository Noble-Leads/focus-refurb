const SERVICE_PAGE_LINKS: Partial<Record<string, string>> = {
  "Fire Door Installation": "/fire-door-installation-london",
  "Rubbish Removal": "/rubbish-removal",
  Roofing: "/roofing-london",
  "Painting & Decorating": "/painting-decorating-london",
};

export const getServiceLearnMoreHref = (title: string) =>
  SERVICE_PAGE_LINKS[title] ?? `/contact?subject=${encodeURIComponent(`Enquiry: ${title}`)}`;

export const getHomeServiceCardHref = (title: string) => SERVICE_PAGE_LINKS[title] ?? "/services";
