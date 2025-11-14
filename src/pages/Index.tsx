import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, FileText, TrendingUp, Megaphone, Settings, Globe, GraduationCap, Film, BookOpen, BarChart, Smartphone, Palette, Presentation } from "lucide-react";
import { Link } from "react-router-dom";
import heroWorkspace from "@/assets/hero-calm-workspace.jpg";
import valentinaProfile from "@/assets/valentina-profile.png";

const Index = () => {
  const services = [
    {
      icon: FileText,
      title: "Administrative Support",
      description: "Reliable help with documents, tasks, planning, and day-to-day organisation."
    },
    {
      icon: Calendar,
      title: "Inbox and Calendar Management",
      description: "Clear scheduling, structured communication, and reminders that keep your day steady."
    },
    {
      icon: Megaphone,
      title: "Social Media and Marketing Support",
      description: "Light content help, posting, basic SEO, email campaigns, and simple promotional guidance."
    },
    {
      icon: Settings,
      title: "CRMs and Automation",
      description: "Support with tools like HubSpot, Keap, Mailchimp, and Kartra to keep your systems clean and easy to follow."
    },
    {
      icon: Globe,
      title: "Web Services and Platform Migrations",
      description: "Updates, transitions, and guidance for websites that need refreshing or moving to a better platform."
    },
    {
      icon: GraduationCap,
      title: "LMS and Online Courses",
      description: "Setup and support for Kajabi, LearnDash, Kartra, and ThriveCart to bring your programs to life."
    },
    {
      icon: Film,
      title: "Animation Support",
      description: "Access to creative animation for storytelling, training, or promotional content."
    },
    {
      icon: BookOpen,
      title: "eBook Design",
      description: "Clean formatting and layout so your writing becomes a polished digital book."
    },
    {
      icon: BarChart,
      title: "Business Reports",
      description: "Beautiful, clear reports that reflect your achievements and growth."
    },
    {
      icon: Palette,
      title: "Graphic and Print Design",
      description: "Brand visuals, signage, packaging, and creative materials that elevate your presence."
    },
    {
      icon: Presentation,
      title: "Pitch Decks",
      description: "Compelling, organised presentations that help you communicate your ideas with confidence."
    },
    {
      icon: Smartphone,
      title: "App Guidance",
      description: "Direction and coordination for clients developing web or mobile apps."
    }
  ];

  const philosophyValues = [
    {
      title: "Professional",
      description: "Support that honours your standards and reflects the quality of your work."
    },
    {
      title: "Authentic",
      description: "A partnership built on trust, sincerity, and real connection."
    },
    {
      title: "Thoughtful",
      description: "A steady approach guided by patience, intention, and meaningful detail."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] px-4 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroWorkspace})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[70vh] flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Rellatech Virtual Assistant Services
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Clarity, structure, and dependable support for the work that fills your days.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Rooted in Canada. Supporting clients everywhere.
            </p>

            <div className="pt-4">
              <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Welcome to Rellatech
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Rellatech offers personal, steady support for individuals, teams, and businesses who want their workload to feel lighter and more manageable. The focus is always on creating calm through clear organisation and thoughtful care.
                </p>
                
                <p>
                  Every partnership receives direct, dedicated attention. Rellatech learns your pace, your preferences, and the way you like things done. Support becomes seamless, woven into your daily rhythm, bringing ease to the places that once felt crowded.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src={valentinaProfile}
                alt="Valentina Rella"
                className="w-full max-w-md rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Support shaped with intention to bring order, flow, and clarity to your work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Rellatech */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Why Choose Rellatech
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Clients choose Rellatech because the support feels human, consistent, and deeply attentive. No handoffs. No confusion. Just direct partnership, steady communication, and care that grows with your needs.
            </p>
            
            <p>
              Rellatech becomes a reliable presence in your workflow, carrying the details that often go overlooked. With your world organised, you can lead your work with more confidence and calm.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              My Philosophy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {philosophyValues.map((value, index) => (
              <div key={index} className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rellatech believes in support that is personal and grounded. By understanding the full shape of your responsibilities, Rellatech helps you move through your days with greater clarity and ease.
            </p>
          </div>
        </div>
      </section>

      {/* How We Begin Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How We Begin
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything starts with a conversation. Share what you need, and Rellatech will help shape a clear, manageable plan that gives you space to breathe and focus again.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <a 
              href="mailto:valentina@rellatech.io" 
              className="flex items-center gap-2 text-lg text-primary hover:underline"
            >
              <Mail className="w-5 h-5" />
              valentina@rellatech.io
            </a>
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
