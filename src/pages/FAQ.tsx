import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQComponent from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-4 py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/20 rounded-full -translate-y-48 -translate-x-48"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full translate-y-40 translate-x-40"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl space-y-6 text-primary-foreground py-16">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              Find answers to common questions about working with Rellatech
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1">
        <FAQComponent />
      </main>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground">Get in touch and I'll be happy to help</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <CTASection 
        title="Need personalized guidance?"
        buttonText="Get In Touch"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default FAQ;
