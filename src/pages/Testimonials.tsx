import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import testimonialsHero from "@/assets/testimonials-hero.jpg";
import hraiLogo from "@/assets/hrai-logo.png";
import spurLogo from "@/assets/spur-logo.png";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I'm in the imagination business but can't imagine a Virtual Assistant with more initiative, intelligence and instinct than Valentina. Did you notice that her initials are V.A? What more do you need?",
      author: "Lorne Silver",
      role: "HR & AI Professional",
      logo: hraiLogo,
      rating: 5
    },
    {
      quote: "I hired Valentina to manage the many administrative tasks that had started to take too much time away from the strategic work of running my business. After a quick onboarding she jumped in right away and started making a huge difference, reducing my stress and helping me focus on other things. I also trust her to take care of my personal matters for me, helping me and family stay on top of our appointments and other commitments. I highly recommend her!",
      author: "Natalie Hill",
      role: "Business Owner",
      rating: 5
    },
    {
      quote: "Valentina is an incredible virtual assistant. She works with me and my team quickly, she's very responsive, and she finds great solutions to the issues I ask for help with. Couldn't recommend her more!",
      author: "Hilary Farson",
      role: "Spur Communications",
      logo: spurLogo,
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] px-4 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${testimonialsHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/92 to-background/80"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-2xl space-y-6 bg-background/40 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              What clients say about working with Rellatech
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 space-y-6 flex flex-col">
                {testimonial.logo && (
                  <div className="h-12 flex items-center">
                    <img src={testimonial.logo} alt={`${testimonial.author} company`} className="h-full w-auto object-contain" />
                  </div>
                )}
                <div className="flex gap-1 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Google Reviews Link */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Read more reviews on Google
            </p>
            <Button asChild size="lg">
              <a href="https://g.page/r/CX1l82p_9SZtEAE/review" target="_blank" rel="noopener noreferrer">
                View Google Reviews
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
