export type CaseStudy = {
  id: string;
  label: string;
  title: string;
  location?: string;
  intro: string;
  bulletsHeading?: string;
  bullets: string[];
  scopeNote?: string;
  quote?: string;
  quoteAttribution?: string;
  vimeoVideoId: string;
  iframeTitle: string;
};

export const muralRoomCaseStudy: CaseStudy = {
  id: "full-room-mural",
  label: "Room refurbishment",
  title: "A Full Room Refurb with Mural",
  location: "London",
  intro:
    "In this project we kept the room’s original character while bringing it up to a modern, finished standard — one team, one point of contact, and every trade covered under one roof.",
  bulletsHeading: "What we delivered",
  bullets: [
    "Original features preserved throughout the room",
    "Built-in wardrobe designed and fitted in-house",
    "Fireplace restored",
    "Feature mural installed on the wall",
    "Full electrics and plumbing",
    "Carpets supplied and fitted",
    "Curtains fitted with in-house tailoring",
    "Dedicated project lead for a one-to-one experience",
  ],
  scopeNote:
    "When you take on a project with Focus Refurbishment, we dedicate a member of our team to your job so you get a consistent, one-to-one experience from start to finish.",
  quote: "You name it, we've done it.",
  quoteAttribution: "Craig, Focus Refurbishment",
  vimeoVideoId: "1198381228",
  iframeTitle: "A Full Room Refurb with Mural",
};

export const gradeIiCaseStudy: CaseStudy = {
  id: "grade-ii-refurb",
  label: "Real project",
  title: "Grade II Building Refurbishment, London",
  location: "London",
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
};

/** Featured video case studies shown on the projects page */
export const projectsPageCaseStudies: CaseStudy[] = [muralRoomCaseStudy, gradeIiCaseStudy];
