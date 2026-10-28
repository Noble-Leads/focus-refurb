import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Wrench, XCircle } from "lucide-react";
import { FIRE_DOOR_PRICES } from "@/lib/fireDoorPricing";

type DoorPart = {
  id: string;
  name: string;
  /** Hotspot position as a percentage of the 320×460 drawing */
  x: number;
  y: number;
  check: string;
  failures: string[];
  fix: string;
  price?: string;
};

const parts: DoorPart[] = [
  {
    id: "closer",
    name: "Self-closing device",
    x: 34.4,
    y: 16.1,
    check: "The door must close fully into the frame and latch on its own from any opening angle.",
    failures: ["Closer disconnected or leaking", "Door wedged or propped open", "Slams, or stops short of the latch"],
    fix: "Adjust or replace the closer",
    price: FIRE_DOOR_PRICES.closer,
  },
  {
    id: "label",
    name: "Door leaf & certification",
    x: 26.5,
    y: 29.3,
    check: "A certified fire door leaf with a traceable label or plug, usually on the hinge edge, so its rating can be proven.",
    failures: ["No label or evidence of rating", "Damaged or missing lipping", "Holes, cut-outs or moisture swelling"],
    fix: "Lipping repair, or a new certified doorset where the leaf can't be saved",
    price: FIRE_DOOR_PRICES.lippingRepair,
  },
  {
    id: "glazing",
    name: "Fire-resisting glazing",
    x: 50,
    y: 35.9,
    check: "Glass and glazing beads must be a tested, fire-rated system that matches the door's certification.",
    failures: ["Cracked glass", "Ordinary glass fitted as a replacement", "Missing beads or glazing seals"],
    fix: "Inspected and quoted on survey",
  },
  {
    id: "seals",
    name: "Intumescent & smoke seals",
    x: 79,
    y: 39.1,
    check: "Seals in the frame or leaf edge expand in a fire to close the gap, and brush or fin seals hold back cold smoke.",
    failures: ["Painted over", "Missing or torn sections", "Wrong size for the gap"],
    fix: "Replace seals, or re-route the frame for new seals",
    price: FIRE_DOOR_PRICES.seals,
  },
  {
    id: "hinges",
    name: "Fire-rated hinges",
    x: 20.9,
    y: 50,
    check: "At least three fire-rated, CE or UKCA marked hinges, with every screw present and tight.",
    failures: ["Missing or loose screws", "Worn, dropped or squeaking hinges", "Non-fire-rated hinges"],
    fix: "Replace hinges",
    price: FIRE_DOOR_PRICES.hinges,
  },
  {
    id: "ironmongery",
    name: "Handles & locks",
    x: 68.4,
    y: 56.1,
    check: "Handles, latches and locks must be fire-tested for use on fire doors, with intumescent protection where required.",
    failures: ["Domestic hardware fitted", "Old holes left from previous fittings", "Latch not engaging"],
    fix: "Quoted on survey",
  },
  {
    id: "signage",
    name: "Fire door signage",
    x: 38,
    y: 65.2,
    check: "The correct mandatory signs where required, such as \"Fire Door Keep Shut\" on common-part doors.",
    failures: ["Missing signs", "Wrong sign for the door type", "Faded or painted over"],
    fix: "Supply and fit correct signage",
    price: FIRE_DOOR_PRICES.signage,
  },
  {
    id: "frame",
    name: "Frame & wall fixings",
    x: 86.5,
    y: 78.3,
    check: "The frame must be securely fixed, with the gap between frame and wall sealed using fire-rated materials.",
    failures: ["Unsealed gaps behind the architrave", "Expanding foam used as a fire seal", "Loose or damaged frame"],
    fix: "Seal frame with fire-rated mastic",
    price: FIRE_DOOR_PRICES.fireMastic,
  },
  {
    id: "gaps",
    name: "Gaps & threshold",
    x: 50,
    y: 94.8,
    check: "Gaps around the top and sides are typically 2–4mm. The gap under the door must match the door's certification.",
    failures: ["Door has dropped or warped", "Gaps too wide for the seals to work", "Oversized gap at the threshold"],
    fix: "Adjust and ease the door, or fit a drop-down seal",
    price: FIRE_DOOR_PRICES.dropDownSeal,
  },
];

const DoorDrawing = () => (
  <svg viewBox="0 0 320 460" className="h-full w-full" aria-hidden="true">
    <rect x="0" y="440" width="320" height="20" fill="#e2e8f0" />
    <rect x="44" y="34" width="232" height="406" rx="2" fill="none" stroke="hsl(var(--gold))" strokeWidth="3" strokeDasharray="5 4" />
    <rect x="50" y="40" width="220" height="400" fill="#475569" />
    <rect x="66" y="56" width="188" height="384" fill="#1e293b" />
    <path d="M67.5 434 V57.5 H252.5 V434" fill="none" stroke="#dc2626" strokeWidth="2" />
    <rect x="70" y="60" width="180" height="372" fill="#dcc6a2" />
    <rect x="70" y="60" width="4" height="372" fill="#c4a97f" />
    <rect x="246" y="60" width="4" height="372" fill="#c4a97f" />
    <rect x="126" y="96" width="68" height="138" fill="#a8825a" />
    <rect x="132" y="102" width="56" height="126" fill="#bfdbfe" />
    <path d="M140 112 L160 132 M150 108 L180 138" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    <rect x="80" y="66" width="62" height="16" rx="3" fill="#334155" />
    <path d="M128 70 L170 50" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
    <rect x="62" y="90" width="10" height="26" rx="1.5" fill="#cbd5e1" stroke="#64748b" />
    <rect x="62" y="217" width="10" height="26" rx="1.5" fill="#cbd5e1" stroke="#64748b" />
    <rect x="62" y="370" width="10" height="26" rx="1.5" fill="#cbd5e1" stroke="#64748b" />
    <rect x="76" y="128" width="16" height="12" rx="1" fill="#ffffff" stroke="#0f172a" strokeWidth="1" />
    <rect x="79" y="132" width="10" height="1.5" fill="#0f172a" />
    <rect x="79" y="135" width="7" height="1.5" fill="#0f172a" />
    <rect x="228" y="244" width="11" height="52" rx="2" fill="#cbd5e1" stroke="#64748b" />
    <rect x="204" y="254" width="30" height="8" rx="4" fill="#94a3b8" stroke="#64748b" />
    <circle cx="233.5" cy="283" r="2.5" fill="#334155" />
    <circle cx="160" cy="300" r="19" fill="#1d4ed8" />
    <text x="160" y="298" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ffffff" fontFamily="sans-serif">FIRE DOOR</text>
    <text x="160" y="306" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ffffff" fontFamily="sans-serif">KEEP SHUT</text>
    <rect x="76" y="425" width="168" height="4" fill="#64748b" />
    <path d="M140 432 V440 M180 432 V440" stroke="#0f172a" strokeWidth="1" />
  </svg>
);

const FireDoorAnatomy = ({ ctaHref }: { ctaHref: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const active = parts[activeIndex];

  const select = (index: number, revealPanel = false) => {
    setActiveIndex((index + parts.length) % parts.length);
    if (!revealPanel || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    if (rect.top > window.innerHeight - 120) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
      <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[320px] aspect-[320/460]">
        <DoorDrawing />
        {parts.map((part, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={part.id}
              type="button"
              onClick={() => select(index, true)}
              aria-label={`${index + 1}. ${part.name}`}
              aria-pressed={isActive}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              style={{ left: `${part.x}%`, top: `${part.y}%` }}
            >
              {!isActive && index === 0 && (
                <span className="absolute h-7 w-7 rounded-full bg-gold/40 animate-ping motion-reduce:hidden" aria-hidden="true" />
              )}
              <span
                className={`relative flex h-8 w-8 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 text-xs font-heading font-extrabold shadow-md transition-colors ${
                  isActive ? "bg-foreground border-white text-white scale-110" : "bg-gold border-white text-white"
                }`}
              >
                {index + 1}
              </span>
            </button>
          );
        })}
      </div>

      <div className="min-w-0">
        <div ref={panelRef} className="bg-card border border-border rounded-lg p-4 sm:p-5 md:p-6 shadow-sm scroll-mt-28" aria-live="polite">
          <div className="flex items-center justify-between gap-3 mb-3">
            <p className="text-gold font-heading font-semibold uppercase tracking-widest text-xs">
              Check {activeIndex + 1} of {parts.length}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => select(activeIndex - 1)}
                aria-label="Previous check"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => select(activeIndex + 1)}
                aria-label="Next check"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-heading font-extrabold text-foreground mb-2">{active.name}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{active.check}</p>

          <p className="font-heading font-bold text-foreground text-sm mb-2">Common reasons it fails</p>
          <ul className="space-y-1.5 mb-4">
            {active.failures.map((failure) => (
              <li key={failure} className="flex items-start gap-2 text-sm text-muted-foreground">
                <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                <span>{failure}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-start gap-3 rounded-md bg-secondary p-3">
            <Wrench className="h-4 w-4 text-gold mt-0.5 shrink-0" />
            <p className="text-sm text-foreground">
              <span className="font-semibold">{active.fix}</span>
              {active.price && (
                <>
                  {" "}
                  <span className="text-muted-foreground">from</span>{" "}
                  <span className="font-heading font-extrabold">{active.price}</span>
                </>
              )}
            </p>
          </div>
        </div>

        <div
          className="mt-4 -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible"
          aria-label="Jump to a check"
        >
          {parts.map((part, index) => (
            <button
              key={part.id}
              type="button"
              onClick={() => select(index)}
              aria-pressed={index === activeIndex}
              className={`min-h-11 shrink-0 rounded-full border px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                index === activeIndex
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card text-foreground hover:border-gold"
              }`}
            >
              {index + 1}. {part.name}
            </button>
          ))}
        </div>

        <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
          <span>
            We check all {parts.length} points on every door in your free survey.{" "}
            <a href={ctaHref} className="text-gold font-semibold hover:underline">
              Book a survey
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default FireDoorAnatomy;
