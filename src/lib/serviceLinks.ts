const SERVICE_PAGE_LINKS: Partial<Record<string, string>> = {
  "Full Refurbishment & Restoration": "/domestic/refurbishment-london",
  "Fire Door Installation": "/fire-door-installation-london",
  "Rubbish Removal": "/rubbish-removal",
  Roofing: "/roofing-london",
  "Painting & Decorating": "/domestic/painting-decorating-london",
  "Loft Conversions": "/loft-conversions-london",
  "Extensions & New Builds": "/extensions-new-builds-london",
  "Bathrooms & Kitchens": "/bathrooms-kitchens-london",
  "EWI & Render": "/ewi-render-london",
  "Brickwork & Masonry": "/brickwork-masonry-london",
  "Summer Houses/Annexes": "/summer-houses-annexes-london",
  "Building Maintenance Contracts": "/building-maintenance-london",
};

export const getServiceLearnMoreHref = (title: string) =>
  SERVICE_PAGE_LINKS[title] ?? `/contact?subject=${encodeURIComponent(`Enquiry: ${title}`)}`;

export const getHomeServiceCardHref = (title: string) => SERVICE_PAGE_LINKS[title] ?? "/services";
