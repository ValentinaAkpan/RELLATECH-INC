import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hraiLogo from "@/assets/hrai-logo.png";
import spurLogo from "@/assets/spur-logo.png";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I'm in the imagination business but can't imagine a Virtual Assistant with more initiative, intelligence and instinct than Valentina. Did you notice that her initials are V.A? What more do you need?",
      author: "Lorne Silver",
      role: "HR & AI Professional",
      company: "HRAI",
      logo: hraiLogo,
      rating: 5
    },
    {
      quote: "I hired Valentina to manage the many administrative tasks that had started to take too much time away from the strategic work of running my business. After a quick onboarding she jumped in right away and started making a huge difference, reducing my stress and helping me focus on other things. I also trust her to take care of my personal matters for me, helping me and family stay on top of our appointments and other commitments. I highly recommend her!",
      author: "Natalie Hill",
      role: "Business Owner",
      company: "Spur Communications",
      logo: spurLogo,
      rating: 5
    },
    {
      quote: "Valentina is an incredible virtual assistant. She works with me and my team quickly, she's very responsive, and she finds great solutions to the issues I ask for help with. Couldn't recommend her more!",
      author: "Hilary Farson",
      role: "Team Lead",
      company: "Spur Communications",
      logo: spurLogo,
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] px-4 py-20 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/85"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-2xl space-y-6 bg-white/70 dark:bg-background/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              What clients say about working with Rellatech
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials - Large Card Layout */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-4 border-primary rounded-2xl p-8 md:p-12 bg-card shadow-lg">
              <div className="grid md:grid-cols-[1fr,auto] gap-8 items-start">
                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">
                    {testimonial.company}
                  </h3>
                  
                  <div className="border-l-4 border-primary pl-6 space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {testimonial.quote.split('. ').slice(0, 2).join('. ')}. 
                      <span className="font-bold text-foreground"> {testimonial.quote.split('. ')[2]}</span>
                      {testimonial.quote.split('. ').slice(3).join('. ')}
                    </p>
                  </div>

                  <div className="flex gap-1 text-amber-500 text-2xl">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <p className="font-bold text-lg text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Logo */}
                {testimonial.logo && (
                  <div className="flex items-center justify-center md:justify-end">
                    <div className="w-48 h-32 flex items-center justify-center">
                      <img 
                        src={testimonial.logo} 
                        alt={testimonial.company} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Google Reviews Link */}
          <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground mb-4">
              Read more reviews on Google
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="https://g.page/r/CX1l82p_9SZtEAE/review" target="_blank" rel="noopener noreferrer">
                View Google Reviews
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Feedback</h2>
            <p className="text-xl text-muted-foreground">Have questions or want to share your experience? Get in touch</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ />

      <Footer />
    </div>
  );
};

export default Testimonials;
