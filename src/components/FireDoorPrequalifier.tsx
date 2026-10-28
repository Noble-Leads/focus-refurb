import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronRight, Lock } from "lucide-react";
import GhlFormEmbed from "@/components/GhlFormEmbed";
import { Button } from "@/components/ui/button";
import { FIRE_DOOR_PRICES } from "@/lib/fireDoorPricing";

type Option = { label: string; hint?: string };

type Question = {
  /** Query param passed to the GHL form; add a hidden field with this key in GHL to capture it */
  key: string;
  prompt: string;
  options: Option[];
};

const DOMESTIC_FORM_HREF = "/domestic/fire-door-replacement-flats-london#fire-door-quote-form";

const questions: Question[] = [
  {
    key: "who_you_are",
    prompt: "Who is this enquiry for?",
    options: [
      {
        label: "Homeowner or leaseholder",
        hint: `1–3 doors — fixed price from photos, from ${FIRE_DOOR_PRICES.domesticDoorset} per door`,
      },
      {
        label: "Landlord — one property, 1–3 doors",
        hint: "Same photo-quote service as homeowners",
      },
      {
        label: "Managing agent, block or portfolio",
        hint: "Free door-by-door survey",
      },
      {
        label: "Facilities / commercial building",
        hint: "Offices, retail, schools, healthcare",
      },
    ],
  },
  {
    key: "door_count",
    prompt: "Roughly how many fire doors need work?",
    options: [
      { label: "1–3", hint: "If it's a home or flat, we'll send you to the photo quote" },
      { label: "4–10" },
      { label: "11–30" },
      { label: "30+" },
      { label: "Not sure yet" },
    ],
  },
  {
    key: "work_trigger",
    prompt: "What's prompting the work?",
    options: [
      { label: "Fire risk assessment actions" },
      { label: "Failed or overdue inspection" },
      { label: "Damaged or broken doors" },
      { label: "Refurbishment or fit-out" },
      { label: "Planned upgrade" },
    ],
  },
  {
    key: "timeframe",
    prompt: "When would you like it done?",
    options: [
      { label: "As soon as possible" },
      { label: "Within a month" },
      { label: "In 1–3 months" },
      { label: "Just comparing prices" },
    ],
  },
];

type GhlForm = {
  src: string;
  title: string;
  iframeId: string;
  formName: string;
  formId: string;
  source: string;
  iframeHeight: string;
};

type Gtag = (command: "event", name: string, params: Record<string, string | number>) => void;

const track = (name: string, params: Record<string, string | number>) => {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
};

const withAnswers = (src: string, answers: Record<string, string>) => {
  const url = new URL(src);
  for (const [key, value] of Object.entries(answers)) url.searchParams.set(key, value);
  return url.toString();
};

const isDomesticClient = (answers: Record<string, string>) =>
  answers.who_you_are === "Homeowner or leaseholder" ||
  answers.who_you_are === "Landlord — one property, 1–3 doors";

const FireDoorPrequalifier = ({ form, phoneDisplay, phoneTel }: { form: GhlForm; phoneDisplay: string; phoneTel: string }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const routeDomestic = isDomesticClient(answers);
  const showForm = step >= questions.length && !routeDomestic;
  const showDomesticRedirect = routeDomestic;

  const keepInView = () => {
    const el = containerRef.current;
    if (el && el.getBoundingClientRect().top < 0) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const answer = (question: Question, option: string) => {
    const next = { ...answers, [question.key]: option };
    setAnswers(next);
    track("prequalifier_answer", { step: step + 1, question: question.key, answer: option });

    if (isDomesticClient(next)) {
      track("prequalifier_complete", { ...next, route: "domestic" });
      setStep(Math.max(step + 1, 1));
      keepInView();
      return;
    }

    if (step + 1 === questions.length) track("prequalifier_complete", { ...next, route: "commercial_form" });
    setStep(step + 1);
    keepInView();
  };

  const skipToForm = () => {
    track("prequalifier_skip", { step: step + 1 });
    setStep(questions.length);
  };

  const progress = routeDomestic
    ? 1
    : Math.min(step, questions.length) / questions.length;

  return (
    <div ref={containerRef} className="bg-background rounded-lg shadow-xl p-5 sm:p-6 scroll-mt-28 md:scroll-mt-32">
      <p className="font-heading font-bold text-foreground text-lg sm:text-xl mb-2">
        {showDomesticRedirect
          ? "Looks like the photo quote is a better fit"
          : showForm
            ? "Last step: your contact details"
            : "Book your free fire door survey"}
      </p>
      <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden mb-4" aria-hidden="true">
        <div className="h-full bg-gold transition-[width] duration-300" style={{ width: `${Math.max(progress, 0.08) * 100}%` }} />
      </div>

      {!showForm && !showDomesticRedirect && (
        <fieldset key={questions[step].key}>
          <legend className="text-sm text-muted-foreground mb-3">
            Question {step + 1} of {questions.length}:{" "}
            <span className="block text-foreground font-heading font-semibold text-base mt-1">{questions[step].prompt}</span>
          </legend>
          <div className="grid gap-2">
            {questions[step].options.map((option) => {
              const selected = answers[questions[step].key] === option.label;
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => answer(questions[step], option.label)}
                  aria-pressed={selected}
                  className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-md border px-4 py-3 text-left transition-colors ${
                    selected
                      ? "border-gold bg-gold/10 text-foreground"
                      : "border-border bg-card text-foreground hover:border-gold hover:bg-gold/5"
                  }`}
                >
                  <span>
                    <span className="block text-sm sm:text-base font-medium">{option.label}</span>
                    {option.hint && <span className="block text-xs text-muted-foreground mt-0.5">{option.hint}</span>}
                  </span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-3 mt-4 text-sm">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="inline-flex min-h-10 items-center gap-1 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            ) : (
              <span className="text-muted-foreground">Takes about 30 seconds</span>
            )}
            <button type="button" onClick={skipToForm} className="min-h-10 text-muted-foreground underline hover:text-foreground">
              Skip to form
            </button>
          </div>
        </fieldset>
      )}

      {showDomesticRedirect && (
        <div>
          <div className="rounded-md border border-gold/30 bg-gold/5 p-4 mb-4">
            <p className="text-foreground font-heading font-bold mb-1">Best fit: fixed price from photos</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Homes, flats and single-property landlords with up to 3 doors get a same-day fixed price from photos — no site survey needed.
            </p>
            <p className="text-foreground text-sm mt-3">
              Full replacement from <strong>{FIRE_DOOR_PRICES.domesticDoorset} per door</strong> · Repairs from{" "}
              <strong>{FIRE_DOOR_PRICES.minimumCallout}</strong>
            </p>
          </div>
          <a href={DOMESTIC_FORM_HREF}>
            <Button variant="gold" size="xl" className="w-full">
              Go to domestic photo quote <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setStep(0);
            }}
            className="mt-3 w-full min-h-10 text-sm text-muted-foreground underline hover:text-foreground"
          >
            Change my answers
          </button>
        </div>
      )}

      {showForm && (
        <div>
          {Object.keys(answers).length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 mb-3">
              {questions
                .filter((question) => answers[question.key])
                .map((question) => (
                  <span key={question.key} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-foreground">
                    {answers[question.key]}
                  </span>
                ))}
              <button
                type="button"
                onClick={() => setStep(0)}
                className="min-h-8 px-1 text-xs text-gold font-semibold hover:underline"
              >
                Change
              </button>
            </div>
          )}
          <GhlFormEmbed
            src={withAnswers(form.src, answers)}
            title={form.title}
            iframeId={form.iframeId}
            formName={form.formName}
            formId={form.formId}
            source={form.source}
            iframeHeight={form.iframeHeight}
          />
        </div>
      )}

      <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Lock className="h-3.5 w-3.5" /> No obligation. We never share your details.
        </span>
        <span>
          Or call{" "}
          <a href={`tel:${phoneTel}`} className="text-gold font-semibold hover:underline">
            {phoneDisplay}
          </a>
        </span>
      </div>
    </div>
  );
};

export default FireDoorPrequalifier;
