import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-6 py-20">
      <p className="text-gold font-heading font-semibold uppercase tracking-widest text-sm mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">Page Not Found</h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        Sorry, we couldn't find that page. Use the links below to get back on track.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="/">
          <Button size="lg">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </a>
        <a href="/contact">
          <Button variant="outline" size="lg">
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
