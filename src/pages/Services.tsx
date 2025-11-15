import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { BookConsultCTA } from "@/components/BookConsultCTA";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Calendar, FileText, Megaphone, Settings, Globe, GraduationCap, BookOpen, BarChart, Palette, Presentation, CheckCircle2, MessageCircle, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import valentinaProfile from "@/assets/valentina-profile.png";

const Services = () => {
  const processSteps = [
    {
      icon: MessageCircle,
      title: "Share Your Needs",
      description: "Tell me what's overwhelming you. I'll listen carefully to understand your workload, priorities, and the support you need most."
    },
    {
      icon: Users,
      title: "Create Your Plan",
      description: "I'll design a customized support plan tailored to your business goals, working style, and the areas where you need help."
    },
    {
      icon: CheckCircle2,
      title: "Get Things Done",
      description: "I take on the tasks, manage the details, and keep your operations running smoothly while you focus on what matters."
    },
    {
      icon: TrendingUp,
      title: "Scale & Adapt",
      description: "As your needs change, I adjust. Increase support during busy seasons or scale back when things are calm - no long-term contracts."
    }
  ];

  const serviceCategories = [
    {
      icon: FileText,
      title: "Administrative Support",
      description: "Document management, task coordination, planning, and daily organization",
      detailedDescription: "Comprehensive administrative support including document management, task coordination, planning, and daily organization to keep your business running smoothly.",
      colorClass: "bg-primary"
    },
    {
      icon: Calendar,
      title: "Inbox & Calendar Management",
      description: "Email prioritization, scheduling, meeting coordination, and communication",
      detailedDescription: "Expert email prioritization, intelligent scheduling, meeting coordination, and streamlined communication management to optimize your time.",
      colorClass: "bg-accent"
    },
    {
      icon: Megaphone,
      title: "Social Media & Marketing",
      description: "Content scheduling, basic SEO, email campaigns, and promotional support",
      detailedDescription: "Strategic content scheduling, SEO optimization, email campaign management, and promotional support to grow your online presence.",
      colorClass: "bg-primary"
    },
    {
      icon: Settings,
      title: "CRMs & Automation",
      description: "HubSpot, Keap, Mailchimp, Kartra setup and management",
      detailedDescription: "Professional setup and management of CRM platforms including HubSpot, Keap, Mailchimp, and Kartra to streamline your business processes.",
      colorClass: "bg-accent"
    },
    {
      icon: Globe,
      title: "Web Services",
      description: "Website updates, content management, and platform migrations",
      detailedDescription: "Expert website updates, content management system administration, and seamless platform migrations to keep your web presence current.",
      colorClass: "bg-primary"
    },
    {
      icon: GraduationCap,
      title: "LMS & Online Courses",
      description: "Kajabi, LearnDash, Kartra, ThriveCart setup and support",
      detailedDescription: "Complete setup and ongoing support for learning management systems including Kajabi, LearnDash, Kartra, and ThriveCart.",
      colorClass: "bg-accent"
    },
    {
      icon: BookOpen,
      title: "eBook Design",
      description: "Professional formatting and layout for digital publications",
      detailedDescription: "Professional eBook design services with expert formatting and layout that makes your digital publications stand out.",
      colorClass: "bg-primary"
    },
    {
      icon: BarChart,
      title: "Business Reports",
      description: "Clear, visually appealing reports that communicate your success",
      detailedDescription: "Create clear, visually compelling business reports that effectively communicate your data, insights, and success metrics.",
      colorClass: "bg-accent"
    },
    {
      icon: Palette,
      title: "Graphic & Print Design",
      description: "Brand visuals, signage, packaging, and marketing materials",
      detailedDescription: "Custom graphic and print design including brand visuals, signage, packaging, and marketing materials that elevate your brand.",
      colorClass: "bg-primary"
    },
    {
      icon: Presentation,
      title: "Pitch Decks & Presentations",
      description: "Compelling presentations that showcase your ideas professionally",
      detailedDescription: "Design compelling pitch decks and presentations that professionally showcase your ideas and captivate your audience.",
      colorClass: "bg-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full translate-y-40 -translate-x-40"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <p className="text-accent font-bold text-sm md:text-base uppercase tracking-wider mb-4">
              VIRTUAL ASSISTANT SERVICES
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              From solo entrepreneurs to<br className="hidden md:block" /> growing teams, I've got you covered
            </h1>
          </div>

          {/* Hero Image with Floating Labels */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={valentinaProfile}
                alt="Valentina Rella - Professional Virtual Assistant"
                className="w-full"
              />
              
              {/* Floating Service Labels */}
              <div className="absolute top-12 left-4 md:left-12 bg-background/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border-2 border-primary/20 animate-fade-in">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-sm md:text-base">Administrative Support</span>
                </div>
              </div>
              
              <div className="absolute top-32 md:top-24 right-4 md:right-12 bg-background/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border-2 border-primary/20 animate-fade-in">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-sm md:text-base">Calendar Management</span>
                </div>
              </div>
              
              <div className="absolute bottom-32 md:bottom-24 left-4 md:left-16 bg-background/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border-2 border-primary/20 animate-fade-in">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-sm md:text-base">Automation</span>
                </div>
              </div>
              
              <div className="absolute bottom-12 right-4 md:right-20 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-xl animate-fade-in">
                <p className="font-bold text-lg md:text-xl">Valentina R.</p>
                <p className="text-sm md:text-base opacity-95">Virtual Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-accent/30 -z-10"></div>
                  )}
                  
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Intro */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get the support you need to scale, minus the hiring hassle
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Professional virtual assistant support tailored to your unique needs. Whether you need ongoing help or project-based assistance, I provide reliable, high-quality service that grows with your business.
          </p>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Virtual Assistant Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From administrative essentials to specialized support, I offer flexible services designed to lighten your workload.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                detailedDescription={service.detailedDescription}
                colorClass={service.colorClass}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-light text-lg px-8 py-6 h-auto">
              <Link to="/contact">Get Your FREE Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Ready to Lighten Your Workload?</h2>
            <p className="text-xl text-muted-foreground">Let's discuss how I can support your business</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <CTASection 
        title="Still exploring your options?"
        buttonText="View Testimonials"
        buttonLink="/testimonials"
      />

      <FAQ />
      
      <BookConsultCTA />
      
      <Footer />
    </div>
  );
};

export default Services;
