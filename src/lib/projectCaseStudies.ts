export type ProjectCaseStudy = {
  id: string;
  label: string;
  title: string;
  intro: string;
  bulletsHeading?: string;
  bullets: string[];
  scopeNote?: string;
  quote?: string;
  quoteAttribution?: string;
  vimeoVideoId: string;
  iframeTitle: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "grade-ii-refurb",
    label: "Real Project",
    title: "Grade II Building Refurbishment, London",
    intro:
      "This Grade II listed property was dated and in poor condition when we took it on. We transformed it into something the owners are proud of — keeping the charm of the building while bringing every room up to a modern, professional standard.",
    bulletsHeading: "What we delivered",
    bullets: [
      "Full repaint and wallpaper throughout",
      "Plaster cornice installed all the way around the room",
      "Original fireplaces restored — blacked out with tiles chosen to suit the period character",
      "Built-in wardrobes from IKEA packs, finished with MDF doors and wooden moulding for a bespoke look",
      "Designed and built in-house to maximise space with a sleek, professional finish",
      "Plumbing, electrics, curtain tracks, and in-house curtain alterations",
    ],
    scopeNote:
      "Everything in this room was designed and fitted by our team — from the wallpaper and carpentry to the plumbing and electrics. One contractor, one standard, so you do not have to coordinate multiple trades yourself.",
    quote:
      "This is the standard we bring to every job — whatever the property, whatever the scope.",
    quoteAttribution: "Focus Refurbishment Team",
    vimeoVideoId: "1198024690",
    iframeTitle: "Focus Refurbishment - Grade II Building Refurb",
  },
  {
    id: "full-room-mural",
    label: "Real Project",
    title: "A Full Room Refurb with Mural",
    intro:
      "In this room we kept the original features and delivered a complete transformation — built-in storage, restored fireplace, a statement mural, and all the finishing trades handled in-house.",
    bulletsHeading: "What we delivered",
    bullets: [
      "Original period features retained",
      "Custom built-in wardrobe",
      "Fireplace restored",
      "Statement mural feature wall",
      "Full electrics and plumbing",
      "Carpets supplied and fitted",
      "Curtains fitted and tailor made in-house",
    ],
    scopeNote:
      "When you take on a project with Focus Refurbishment, we dedicate a member of our team to you — so you get a one-to-one experience from start to finish, not a revolving door of subcontractors.",
    quote: "You name it, we've done it.",
    quoteAttribution: "Craig, Focus Refurbishment",
    vimeoVideoId: "1198381228",
    iframeTitle: "A Full Room Refurb with Mural",
  },
];

export const getProjectCaseStudy = (id: string) =>
  projectCaseStudies.find((study) => study.id === id);
