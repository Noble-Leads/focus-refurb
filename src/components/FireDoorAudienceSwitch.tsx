import { ArrowRight, Building2, Home } from "lucide-react";

type Audience = "domestic" | "commercial";

type FireDoorAudienceSwitchProps = {
  /** Which page you're currently on — that option is marked as selected */
  current: Audience;
  /** Compact strip for heroes; full cards for mid-page */
  variant?: "banner" | "cards";
};

const DOMESTIC_HREF = "/domestic/fire-door-replacement-flats-london";
const COMMERCIAL_HREF = "/fire-door-installation-london";

const options = [
  {
    id: "domestic" as const,
    href: DOMESTIC_HREF,
    icon: Home,
    title: "Home, flat or 1–3 doors",
    desc: "Fixed price from photos, same day. No site visit needed.",
    price: "From £1,350 per door",
  },
  {
    id: "commercial" as const,
    href: COMMERCIAL_HREF,
    icon: Building2,
    title: "Block, portfolio or 4+ doors",
    desc: "Free door-by-door survey, fixed quote and compliance pack.",
    price: "From £1,750 fitted",
  },
];

const FireDoorAudienceSwitch = ({ current, variant = "banner" }: FireDoorAudienceSwitchProps) => {
  if (variant === "banner") {
    const other = options.find((option) => option.id !== current)!;
    return (
      <a
        href={other.href}
        className="group flex items-start gap-3 rounded-lg border border-gold/35 bg-primary/25 px-3.5 py-3 text-left transition-colors hover:border-gold hover:bg-primary/40"
      >
        <other.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
        <span className="min-w-0 flex-1">
          <span className="block font-heading font-bold text-section-dark-foreground text-sm sm:text-base">
            Looking for {other.id === "domestic" ? "a home or flat door" : "a block or portfolio"}?
          </span>
          <span className="mt-0.5 block text-hero-muted text-xs sm:text-sm leading-snug">
            {other.desc}{" "}
            <span className="inline-flex items-center gap-1 text-gold font-semibold group-hover:underline">
              Go there <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </span>
        </span>
      </a>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {options.map((option) => {
        const isCurrent = option.id === current;
        const card = (
          <div className="flex items-start gap-3">
            <option.icon className={`mt-0.5 h-5 w-5 shrink-0 ${isCurrent ? "text-gold" : "text-muted-foreground"}`} />
            <div className="min-w-0">
              <p className="font-heading font-bold text-foreground text-sm sm:text-base">
                {option.title}
                {isCurrent && (
                  <span className="ml-2 rounded-full bg-gold/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-gold">
                    You're here
                  </span>
                )}
              </p>
              <p className="mt-1 text-muted-foreground text-xs sm:text-sm leading-snug">{option.desc}</p>
              <p className="mt-2 text-foreground font-heading font-semibold text-sm">
                {option.price}
                {!isCurrent && (
                  <span className="ml-2 inline-flex items-center gap-1 text-gold text-xs font-semibold">
                    Choose <ArrowRight className="h-3 w-3" />
                  </span>
                )}
              </p>
            </div>
          </div>
        );

        const className = `rounded-lg border p-4 min-h-[5.5rem] transition-colors ${
          isCurrent ? "border-gold bg-gold/10" : "border-border bg-card hover:border-gold hover:bg-gold/5 block"
        }`;

        if (isCurrent) {
          return (
            <div key={option.id} aria-current="page" className={className}>
              {card}
            </div>
          );
        }

        return (
          <a key={option.id} href={option.href} className={className}>
            {card}
          </a>
        );
      })}
    </div>
  );
};

export default FireDoorAudienceSwitch;
