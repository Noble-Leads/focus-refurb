import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYouPage = () => {
  return (
    <section className="min-h-[70vh] bg-background pt-36 pb-20">
      <div className="container max-w-3xl">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
          <h1 className="mt-4 text-3xl md:text-4xl font-heading font-extrabold text-foreground">
            Thanks - your enquiry has been sent
          </h1>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            A member of our team will review your details and get back to you as soon as possible.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="/services">
              <Button variant="gold" size="lg" className="w-full sm:w-auto">
                View Services <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="tel:02046340020">
              <Button variant="gold-outline" size="lg" className="w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                Call 020 4634 0020
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouPage;
