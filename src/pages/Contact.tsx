import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-4 py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-32 -translate-x-32"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl space-y-6 text-primary-foreground py-16">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              Reaching out for support should feel simple and welcoming. Share a little about what you need, and I'll guide you through the next steps with clarity and calm.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fill out the form and I'll get back to you as soon as possible. Or email me directly:
                </p>
                <a 
                  href="mailto:valentina@rellatech.io" 
                  className="inline-block text-2xl font-semibold text-accent hover:text-accent-light transition-colors"
                >
                  valentina@rellatech.io
                </a>
              </div>

              <div className="pt-6 border-t-2 border-accent/20">
                <h3 className="text-xl font-bold mb-3 text-foreground">Based in Canada</h3>
                <p className="text-muted-foreground text-lg">
                  Serving clients locally and internationally through virtual support.
                </p>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <p className="text-foreground font-medium">
                  Your message comes directly to me and will be held with care. I respond personally to every inquiry.
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
        buttonText="View My FAQ"
        buttonLink="/faq"
      />

      <FAQ />

      <Footer />
    </div>
  );
};

export default Contact;
