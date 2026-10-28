import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Camera, ChevronRight, Lock } from "lucide-react";
import GhlFormEmbed from "@/components/GhlFormEmbed";
import { Button } from "@/components/ui/button";
import { FIRE_DOOR_PRICES, formatFromPrice } from "@/lib/fireDoorPricing";

type Question = {
  key: string;
  prompt: string;
  options: { label: string; hint?: string }[];
};

const PER_DOOR = FIRE_DOOR_PRICES.domesticDoorsetAmount;

const doorCountFromLabel = (label?: string) => {
  if (label === "1 door") return 1;
  if (label === "2 doors") return 2;
  if (label === "3 doors") return 3;
  return null;
};

const questionsFor = (answers: Record<string, string>): Question[] => {
  const isReplacement = answers.job_type === "Full door replacement";
  const isRepair = answers.job_type === "Repair or parts";

  return [
    {
      key: "job_type",
      prompt: "What do you need?",
      options: [
        { label: "Full door replacement", hint: `From ${FIRE_DOOR_PRICES.domesticDoorset} per door, fitted` },
        { label: "Repair or parts", hint: `From ${FIRE_DOOR_PRICES.minimumCallout} minimum call-out` },
        { label: "Not sure — quote either", hint: "We'll price both options from your photos" },
      ],
    },
    {
      key: "door_count",
      prompt: "How many doors?",
      options: [
        {
          label: "1 door",
          hint: isReplacement ? `From ${formatFromPrice(PER_DOOR)}` : undefined,
        },
        {
          label: "2 doors",
          hint: isReplacement ? `From ${formatFromPrice(PER_DOOR * 2)}` : undefined,
        },
        {
          label: "3 doors",
          hint: isReplacement ? `From ${formatFromPrice(PER_DOOR * 3)}` : undefined,
        },
        { label: "4 or more", hint: "Better via a quick survey — we'll point you there" },
      ],
    },
    {
      key: "who_you_are",
      prompt: "Who are you?",
      options: [
        { label: "Homeowner or leaseholder" },
        { label: "Landlord — one property" },
        { label: "Managing multiple properties", hint: "Commercial survey service" },
      ],
    },
  ].map((question) => {
    if (question.key !== "door_count" || !isRepair) return question;
    return {
      ...question,
      options: question.options.map((option) =>
        option.label === "4 or more"
          ? option
          : { ...option, hint: `From ${FIRE_DOOR_PRICES.minimumCallout} call-out` },
      ),
    };
  });
};

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

const needsCommercial = (answers: Record<string, string>) =>
  answers.door_count === "4 or more" || answers.who_you_are === "Managing multiple properties";

const priceSummary = (answers: Record<string, string>) => {
  const doors = doorCountFromLabel(answers.door_count);
  const doorPhrase = doors === 1 ? "1 door" : doors ? `${doors} doors` : "each door";

  if (answers.job_type === "Repair or parts") {
    return {
      label: "Repairs & parts",
      price: FIRE_DOOR_PRICES.minimumCallout,
      note: `Minimum call-out ${FIRE_DOOR_PRICES.minimumCallout}. Closers from ${FIRE_DOOR_PRICES.closer}, seals from ${FIRE_DOOR_PRICES.seals}, hinges from ${FIRE_DOOR_PRICES.hinges}. Exact fixed price from your photos.`,
    };
  }

  if (answers.job_type === "Not sure — quote either") {
    const replacementFrom = doors ? formatFromPrice(PER_DOOR * doors) : FIRE_DOOR_PRICES.domesticDoorset;
    return {
      label: "Replacement or repair",
      price: FIRE_DOOR_PRICES.minimumCallout,
      note: `Full replacement from ${FIRE_DOOR_PRICES.domesticDoorset} per door${doors && doors > 1 ? ` (${replacementFrom} for ${doorPhrase})` : ""}. Repairs from ${FIRE_DOOR_PRICES.minimumCallout} call-out. We'll price both from your photos.`,
    };
  }

  if (doors && doors > 1) {
    return {
      label: `Full FD30 replacement · ${doors} doors`,
      price: formatFromPrice(PER_DOOR * doors),
      note: `${FIRE_DOOR_PRICES.domesticDoorset} per door, fully fitted and certified. Exact fixed price from your photos.`,
    };
  }

  return {
    label: "Full FD30 door replacement",
    price: FIRE_DOOR_PRICES.domesticDoorset,
    note: `${FIRE_DOOR_PRICES.domesticDoorset} per door, fully fitted and certified. Exact fixed price from your photos.`,
  };
};

const FireDoorDomesticPrequalifier = ({
  form,
  phoneDisplay,
  phoneTel,
}: {
  form: GhlForm;
  phoneDisplay: string;
  phoneTel: string;
}) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const questions = questionsFor(answers);
  const showForm = step >= questions.length;
  const routeCommercial = showForm && needsCommercial(answers);
  const summary = priceSummary(answers);

  const keepInView = () => {
    const el = containerRef.current;
    if (el && el.getBoundingClientRect().top < 0) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const answer = (question: Question, option: string) => {
    const next = { ...answers, [question.key]: option };
    setAnswers(next);
    track("domestic_prequalifier_answer", { step: step + 1, question: question.key, answer: option });
    if (step + 1 === questions.length) {
      track("domestic_prequalifier_complete", {
        ...next,
        route: needsCommercial(next) ? "commercial" : "domestic_form",
      });
    }
    setStep(step + 1);
    keepInView();
  };

  const skipToForm = () => {
    track("domestic_prequalifier_skip", { step: step + 1 });
    setStep(questions.length);
  };

  const progress = Math.min(step, questions.length) / questions.length;

  return (
    <div ref={containerRef} className="bg-background rounded-lg shadow-xl p-5 sm:p-6 scroll-mt-28 md:scroll-mt-32">
      <p className="font-heading font-bold text-foreground text-lg sm:text-xl mb-2">
        {showForm
          ? routeCommercial
            ? "Looks like you need a survey"
            : "Last step: photos & contact details"
          : "Get your fixed price"}
      </p>
      <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden mb-4" aria-hidden="true">
        <div className="h-full bg-gold transition-[width] duration-300" style={{ width: `${Math.max(progress, 0.08) * 100}%` }} />
      </div>

      {!showForm && (
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
              <span className="text-muted-foreground">Takes about 20 seconds</span>
            )}
            <button type="button" onClick={skipToForm} className="min-h-10 text-muted-foreground underline hover:text-foreground">
              Skip to form
            </button>
          </div>
        </fieldset>
      )}

      {showForm && routeCommercial && (
        <div>
          <div className="rounded-md border border-gold/30 bg-gold/5 p-4 mb-4">
            <p className="text-foreground font-heading font-bold mb-1">Best fit: commercial survey</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {answers.door_count === "4 or more"
                ? "Jobs of 4 or more doors get a discounted rate via a quick site survey rather than a photo quote."
                : "Multi-property work is handled on our commercial page, with a free door-by-door survey and fixed written quote."}
            </p>
            <p className="text-foreground text-sm mt-3">
              Commercial doorsets from <strong>{FIRE_DOOR_PRICES.commercialSingleDoorset}</strong> fitted.
            </p>
          </div>
          <a href="/fire-door-installation-london">
            <Button variant="gold" size="xl" className="w-full">
              Go to commercial fire doors <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
          <button
            type="button"
            onClick={() => setStep(0)}
            className="mt-3 w-full min-h-10 text-sm text-muted-foreground underline hover:text-foreground"
          >
            Change my answers
          </button>
        </div>
      )}

      {showForm && !routeCommercial && (
        <div>
          {Object.keys(answers).length > 0 && (
            <>
              <div className="rounded-md border border-border bg-secondary/60 p-3 mb-3">
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-heading font-semibold">Your starting price</p>
                <p className="text-foreground font-heading font-extrabold text-xl mt-0.5">
                  <span className="text-sm font-semibold text-muted-foreground">from </span>
                  {summary.price}
                </p>
                <p className="text-muted-foreground text-xs mt-1">{summary.note}</p>
              </div>
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
              <p className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                <Camera className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                Upload front and back photos of each door (closed), plus your postcode.
              </p>
            </>
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
          <Lock className="h-3.5 w-3.5" /> Fixed price. No obligation.
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

export default FireDoorDomesticPrequalifier;
