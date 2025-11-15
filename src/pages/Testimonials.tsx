import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hraiLogo from "@/assets/hrai-logo.png";
import spurLogo from "@/assets/spur-logo.png";
import undividedLogo from "@/assets/undivided-project-logo.png";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Valentina has been an indispensable part of my team. As my Executive Assistant, she keeps everything running smoothly - from managing a complex calendar and coordinating meetings across time zones to providing data analytics and high-level brand support. Her attention to detail, professionalism, and proactive approach have made a real difference in my ability to focus on strategic work. I highly recommend RellaTech VA Services to anyone who needs reliable, high-quality virtual assistant support.",
      author: "Monica Sanders",
      role: "Founder",
      company: "The Undivide Project",
      logo: undividedLogo,
      rating: 5
    },
    {
      quote: "I'm in the imagination business but can't imagine a Virtual Assistant with more initiative, intelligence and instinct than Valentina. Did you notice that her initials are V.A? What more do you need?",
      author: "Lorne Silver",
      role: "Creative Chameleon • Magnet Maker • Enthusiast",
      company: "HRAI",
      logo: hraiLogo,
      rating: 5
    },
    {
      quote: "I hired Valentina to manage the many administrative tasks that had started to take too much time away from the strategic work of running my business. After a quick onboarding she jumped in right away and started making a huge difference, reducing my stress and helping me focus on other things. I also trust her to take care of my personal matters for me, helping me and family stay on top of our appointments and other commitments. I highly recommend her!",
      author: "Natalie Hill",
      role: "Founder",
      company: "Spur Communications",
      logo: spurLogo,
      rating: 5
    },
    {
      quote: "Valentina is an incredible virtual assistant. She works with me and my team quickly, she's very responsive, and she finds great solutions to the issues I ask for help with. Couldn't recommend her more!",
      author: "Hilary Farson",
      role: "Co-Founder",
      company: "Spur Communications",
      logo: spurLogo,
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-4 py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full translate-y-40 -translate-x-40"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl space-y-6 text-primary-foreground py-16">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              Client Success Stories
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              What clients say about working with Rellatech
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials - Large Card Layout */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-elegant hover-lift">
              <div className="grid md:grid-cols-[1fr,auto] gap-8 items-start">
                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide">
                    {testimonial.company}
                  </h3>
                  
                  <div className="border-l-4 border-accent pl-6 space-y-4">
                    <p className="text-lg text-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="flex gap-1 text-accent text-2xl">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  <div className="pt-4 border-t-2 border-border">
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
            <div className="bg-primary text-primary-foreground rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10 space-y-4">
                <p className="text-xl font-semibold">
                  Read more reviews on Google
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground text-lg px-8 py-6 h-auto">
                  <a href="https://g.page/r/CX1l82p_9SZtEAE/review" target="_blank" rel="noopener noreferrer">
                    View Google Reviews
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Send a Message</h2>
            <p className="text-xl text-muted-foreground">Get in touch to discuss how we can work together</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <CTASection 
        title="Ready to experience this level of support?"
        buttonText="Start Working Together"
        buttonLink="/contact"
      />

      <FAQ />

      <Footer />
    </div>
  );
};

export default Testimonials;
