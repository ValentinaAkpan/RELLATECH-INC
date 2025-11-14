import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQComponent from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] px-4 py-20 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/85"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-2xl space-y-6 bg-background/90 backdrop-blur-md p-10 rounded-lg shadow-xl border-2 border-primary/20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Find answers to common questions about working with Rellatech
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1">
        <FAQComponent />
      </main>
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground">Get in touch and I'll be happy to help</p>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
