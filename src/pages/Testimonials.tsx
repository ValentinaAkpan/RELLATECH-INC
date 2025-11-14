import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Valentina has been transformative for my business. She handles all the administrative details that used to consume my days, allowing me to focus on growth and client relationships. Her attention to detail and proactive communication are exceptional.",
      author: "Sarah M.",
      role: "Business Consultant",
      rating: 5
    },
    {
      quote: "I was drowning in emails and calendar conflicts before Rellatech. Now everything runs smoothly, and I actually have time to focus on strategic work. Valentina's organizational skills are truly remarkable.",
      author: "Michael T.",
      role: "Tech Entrepreneur",
      rating: 5
    },
    {
      quote: "The automation support has saved us countless hours every week. Valentina took the time to understand our workflows and implemented systems that just work. Highly recommend!",
      author: "Jennifer L.",
      role: "Marketing Director",
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 space-y-6">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
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
