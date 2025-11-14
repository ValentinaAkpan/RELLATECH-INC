import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] px-4 py-20 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/85 to-background/70"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-2xl space-y-6 bg-background/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-border">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground drop-shadow-sm">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed drop-shadow-sm">
              Reaching out for support should feel simple and welcoming. If you are carrying a heavy workload or you are not sure where to start, I am here to listen. Share a little about what you need, and I will guide you through the next steps with clarity and calm. Your message will come directly to me and will be held with care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Fill out the form and I'll get back to you as soon as possible. Or email me directly at:
                </p>
                <a 
                  href="mailto:valentina@rellatech.io" 
                  className="text-2xl font-semibold text-primary hover:underline"
                >
                  valentina@rellatech.io
                </a>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-bold mb-3 text-foreground">Based in Canada</h3>
                <p className="text-muted-foreground">
                  Serving clients locally and internationally through virtual support.
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <CTASection 
        title="Still have questions?"
        buttonText="View Our FAQ"
        buttonLink="/faq"
      />

      <FAQ />

      <Footer />
    </div>
  );
};

export default Contact;
