import { getServiceLearnMoreHref } from "./serviceLinks";

export type NavLink = { label: string; path: string; description?: string };

export const commercialServices: NavLink[] = [
  { label: "Building Maintenance", path: "/building-maintenance-london", description: "Planned and reactive maintenance contracts" },
  { label: "Fire Door Installation", path: "/fire-door-installation-london", description: "Approved installers, full compliance" },
  { label: "Fire Stopping", path: "/fire-stopping-london", description: "Penetration sealing, surveys & FRA remedials" },
  { label: "Full Refurbishment", path: "/commercial/refurbishment-london", description: "Void turns, fit-outs and restorations" },
  { label: "Roofing", path: "/roofing-london", description: "Repairs, replacements and flat roofs" },
  { label: "EWI & Render", path: getServiceLearnMoreHref("EWI & Render"), description: "External wall insulation systems" },
  { label: "Painting & Decorating", path: "/commercial/painting-decorating-london", description: "Interior and exterior finishes" },
];

export const domesticServices: NavLink[] = [
  { label: "Extensions & New Builds", path: getServiceLearnMoreHref("Extensions & New Builds"), description: "Rear, side and wrap-around extensions" },
  { label: "Loft Conversions", path: getServiceLearnMoreHref("Loft Conversions"), description: "Extra bedrooms, offices and living space" },
  { label: "Full Refurbishment", path: "/domestic/refurbishment-london", description: "Whole-home renovations and upgrades" },
  { label: "Bathrooms & Kitchens", path: getServiceLearnMoreHref("Bathrooms & Kitchens"), description: "Bespoke design and installation" },
  { label: "Roofing", path: "/roofing-london", description: "Repairs and full replacements" },
  { label: "Painting & Decorating", path: "/domestic/painting-decorating-london", description: "Interior and exterior decorating" },
  { label: "EWI & Render", path: getServiceLearnMoreHref("EWI & Render"), description: "Insulation and silicone render" },
  { label: "Brickwork & Masonry", path: getServiceLearnMoreHref("Brickwork & Masonry"), description: "Repointing, cleaning and restoration" },
  { label: "Summer Houses & Annexes", path: getServiceLearnMoreHref("Summer Houses/Annexes"), description: "Garden rooms and annex builds" },
];

export const commercialAudiences: NavLink[] = [
  { label: "Landlords & Property Investors", path: "/commercial-enquiries" },
  { label: "Estate & Letting Agents", path: "/commercial-enquiries" },
  { label: "Housing Associations & Councils", path: "/commercial-enquiries" },
  { label: "Main Contractors & Developers", path: "/commercial-enquiries" },
  { label: "Facilities Management", path: "/commercial-enquiries" },
  { label: "Commercial Businesses", path: "/commercial-enquiries" },
];

export const domesticAudiences: NavLink[] = [
  { label: "Homeowners", path: "/contact?subject=Domestic%20enquiry" },
  { label: "Residential Landlords", path: "/contact?subject=Residential%20landlord%20enquiry" },
];

export const isCommercialPath = (pathname: string) =>
  pathname === "/commercial" ||
  pathname === "/commercial-enquiries" ||
  pathname.startsWith("/commercial/");

export const isDomesticPath = (pathname: string) =>
  pathname === "/domestic" || pathname.startsWith("/domestic/");
