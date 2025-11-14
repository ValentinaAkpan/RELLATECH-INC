import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";
import rellatechLogo from "@/assets/rellatech-logo.png";
import valentinaProfile from "@/assets/valentina-profile.png";

const Index = () => {
  const coreValues = [
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Consistent support you can count on, delivered with care and attention to detail."
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "Streamlined processes that save you time and keep your business moving forward."
    },
    {
      icon: Sparkles,
      title: "Flexibility",
      description: "Adaptable solutions tailored to your unique needs and working style."
    },
    {
      icon: Target,
      title: "Results",
      description: "Focused on outcomes that matter, helping you achieve your goals with confidence."
    }
  ];

  const services = [
    {
      number: "01",
      title: "Inbox Management",
      description: "Your inbox organized and prioritized so you can focus on what matters most. Professional email handling with timely responses and follow-ups.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80"
    },
    {
      number: "02",
      title: "Calendar Coordination",
      description: "Seamless scheduling and calendar management. Never miss a meeting or double-book again with professional appointment coordination.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80"
    },
    {
      number: "03",
      title: "Workflow Automation",
      description: "Save hours every week with intelligent automation setup. From repetitive tasks to complex workflows, I'll help you work smarter.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    },
    {
      number: "04",
      title: "Social Media Support",
      description: "Keep your online presence active and engaging. Content scheduling, monitoring, and community management that represents your brand.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
    },
    {
      number: "05",
      title: "Administrative Support",
      description: "General business support that keeps operations running smoothly. Document preparation, data entry, and organizational tasks handled professionally.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      number: "06",
      title: "Web Services",
      description: "Website updates, content management, and basic maintenance. Keep your online presence fresh and functional without the technical hassle.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      number: "07",
      title: "Project Coordination",
      description: "Keep projects on track with organized coordination and follow-through. Timeline management, stakeholder communication, and progress tracking.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80"
    },
    {
      number: "08",
      title: "Research & Analysis",
      description: "Thorough research and clear summaries delivered when you need them. Market research, competitor analysis, and information gathering.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
    },
    {
      number: "09",
      title: "Creative Coordination",
      description: "Bridge the gap between vision and execution. Coordinate with designers, manage creative assets, and keep brand materials organized.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] px-4 py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-accent/20 blur-2xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-accent/15 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-primary-foreground/10 blur-xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo */}
            <div className="w-48 h-48 md:w-56 md:h-56">
              <img
                src={rellatechLogo}
                alt="Rellatech"
                className="w-full h-full drop-shadow-2xl"
              />
            </div>

            <div className="space-y-6 text-primary-foreground max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                WELCOME TO RELLATECH
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-95">
                Professional virtual assistant services designed to simplify your workload and bring structure to your business operations.
              </p>
              
              <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto">
                Based in Canada, serving clients locally and internationally. Whether you need ongoing support or project-based assistance, I provide reliable, thoughtful service that helps you stay focused on what matters most.
              </p>

              <div className="pt-4">
                <Button size="lg" asChild className="text-base md:text-lg px-8 py-6 h-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Link to="/contact">GET STARTED</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              SERVICES
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive virtual assistant services designed to streamline your operations and free up your time for strategic work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-2">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold text-lg">{service.number}</span>
                  </div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="default" size="sm" className="mt-2">
                    LEARN MORE
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={valentinaProfile}
                alt="Valentina"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Meet Valentina Rella
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Valentina, the founder of Rellatech. With a background in administrative support and a passion for organization, I've dedicated my career to helping busy professionals and business owners reclaim their time.
                </p>
                <p>
                  I understand that behind every successful business is a mountain of details that need attention. My approach combines traditional values of reliability and professionalism with modern tools and technologies to deliver efficient, high-quality support.
                </p>
                <p>
                  Whether you're a solo entrepreneur, small business owner, or part of a growing team, I'm here to provide the behind-the-scenes support that keeps everything running smoothly.
                </p>
              </div>
              <Button asChild size="lg" className="mt-4">
                <Link to="/about">MORE ABOUT ME</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              TESTIMONIALS
            </h2>
          </div>
          
          <div className="bg-background border-4 border-primary/20 rounded-lg p-8 md:p-12 space-y-6">
            <div className="space-y-4">
              <p className="text-lg italic text-muted-foreground leading-relaxed">
                "Working with Valentina has been transformative for my business. She handles all the administrative details that used to consume my days, allowing me to focus on growth and client relationships. Her attention to detail and proactive communication are exceptional."
              </p>
              <div className="flex items-center gap-2 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="font-semibold text-foreground">
                — Sarah M., Business Consultant
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Ready to experience the difference professional support can make?
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact">START YOUR JOURNEY</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default Index;
