import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, CheckCircle } from "lucide-react";

const WebServices = () => {
  const benefits = [
    "Website content updates",
    "Platform migrations",
    "Basic maintenance tasks",
    "Content management systems",
    "Site performance monitoring",
    "Technical guidance and coordination"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent to-accent/80">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-background/90 backdrop-blur-sm p-8 rounded-lg space-y-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                  <Globe className="w-10 h-10 text-accent-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Web Services and Platform Migrations
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Updates, transitions, and guidance for websites that need refreshing or moving to a better platform.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Globe className="w-48 h-48 text-white/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What's Included
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Website updates, content management, and platform migrations handled professionally. Whether refreshing your current site or transitioning to a better platform, receive expert guidance and hands-on support. Keep your online presence current and functional without technical stress.
          </p>

          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-lg text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Update Your Website?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's refresh your online presence with professional web support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to refresh your website?"
        buttonText="Get Expert Guidance"
        buttonLink="/contact"
      />

      <FAQ />

      <Footer />
    </div>
  );
};

export default WebServices;
