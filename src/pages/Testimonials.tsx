import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I'm in the imagination business but can't imagine a Virtual Assistant with more initiative, intelligence and instinct than Valentina. Did you notice that her initials are V.A? What more do you need?",
      author: "Lorne Silver",
      role: "HR & AI Professional",
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
      rating: 5
    },
    {
      quote: "Rellatech Virtual Assistant Services has been an absolute game-changer for me. Their team is professional, efficient, and always delivers top-quality work.",
      author: "Faith Decent Emezie",
      role: "Business Professional",
      rating: 5
    },
    {
      quote: "Top notch services 📌",
      author: "Azi Embellish",
      role: "Spur Communications",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Testimonials
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            What clients say about working with Rellatech
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 space-y-6 flex flex-col">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
