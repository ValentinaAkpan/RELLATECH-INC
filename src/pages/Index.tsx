import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { WorkbookOfferDialog } from "@/components/WorkbookOfferDialog";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Mail, Calendar, FileText, TrendingUp, Megaphone, Settings, Globe, GraduationCap, BookOpen, BarChart, Palette, Presentation } from "lucide-react";
import { Link } from "react-router-dom";
import heroWorkspace from "@/assets/hero-calm-workspace.jpg";
import valentinaProfile from "@/assets/valentina-profile.png";

const Index = () => {
  const services = [
    {
      icon: FileText,
      title: "Administrative Support",
      description: "Reliable help with documents, tasks, planning, and day-to-day organisation.",
      detailedDescription: "From document management to task coordination, I provide comprehensive administrative support that keeps your business running smoothly. I handle the details so you can focus on what matters most."
    },
    {
      icon: Calendar,
      title: "Inbox and Calendar Management",
      description: "Clear scheduling, structured communication, and reminders that keep your day steady.",
      detailedDescription: "Stay on top of your schedule with organized calendar management and inbox prioritization. I ensure you never miss important meetings and your communications flow effortlessly."
    },
    {
      icon: Megaphone,
      title: "Social Media and Marketing Support",
      description: "Light content help, posting, basic SEO, email campaigns, and simple promotional guidance.",
      detailedDescription: "Strengthen your online presence with thoughtful social media management, content scheduling, and email campaign support that connects authentically with your audience."
    },
    {
      icon: Settings,
      title: "CRMs and Automation",
      description: "Support with tools like HubSpot, Keap, Mailchimp, and Kartra to keep your systems clean and easy to follow.",
      detailedDescription: "Optimize your business systems with CRM management and automation setup. I help streamline your workflows, keeping your data organized and your processes efficient."
    },
    {
      icon: Globe,
      title: "Web Services and Platform Migrations",
      description: "Updates, transitions, and guidance for websites that need refreshing or moving to a better platform.",
      detailedDescription: "Navigate website updates and platform transitions smoothly. I provide careful guidance and execution for migrations, ensuring your online presence remains strong throughout the process."
    },
    {
      icon: GraduationCap,
      title: "LMS and Online Courses",
      description: "Setup and support for Kajabi, LearnDash, Kartra, and ThriveCart to bring your programs to life.",
      detailedDescription: "Launch and manage your online courses with confidence. I provide complete setup and ongoing support for learning management systems, making your educational offerings shine."
    },
    {
      icon: BookOpen,
      title: "eBook Design",
      description: "Clean formatting and layout so your writing becomes a polished digital book.",
      detailedDescription: "Transform your content into beautifully formatted eBooks. From layout design to final formatting, I ensure your digital publications are professional and reader-friendly."
    },
    {
      icon: BarChart,
      title: "Business Reports",
      description: "Beautiful, clear reports that reflect your achievements and growth.",
      detailedDescription: "Present your data with impact through well-designed business reports. I create clear, visually appealing documents that communicate your success and insights effectively."
    },
    {
      icon: Palette,
      title: "Graphic and Print Design",
      description: "Brand visuals, signage, packaging, and creative materials that elevate your presence.",
      detailedDescription: "Elevate your brand with custom graphic design for print and digital. From logos to marketing materials, I create visuals that capture your unique identity and message."
    },
    {
      icon: Presentation,
      title: "Pitch Decks",
      description: "Compelling, organised presentations that help you communicate your ideas with confidence.",
      detailedDescription: "Win over investors and clients with professionally designed pitch decks. I craft presentations that tell your story clearly and persuasively, helping you make memorable impressions."
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
      <WorkbookOfferDialog />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[85vh] px-4 py-12 md:py-20 overflow-hidden" role="banner" aria-label="Welcome to Rellatech Virtual Assistant Services">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroWorkspace})` }}
          role="img"
          aria-label="Calm and organized workspace with laptop and natural lighting"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/92 to-background/80"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[40vh] md:min-h-[70vh] flex items-center">
          <div className="max-w-3xl space-y-4 md:space-y-6 bg-white/70 dark:bg-background/70 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Rellatech
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed">
              Clarity, structure, and dependable support for entrepreneurs, business owners, teams, coaches, and professionals across Canada and beyond who want their workload to feel lighter.
            </p>

            <div className="pt-2 md:pt-4">
              <Button size="lg" asChild className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={valentinaProfile}
                alt="Valentina Rella, Founder of Rellatech Virtual Assistant Services, professional business portrait"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="order-1 md:order-2 border-4 border-accent rounded-lg p-6 md:p-8 bg-background shadow-lg">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Welcome to Rellatech
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I offer personal, steady support for entrepreneurs, business owners, teams, coaches, and professionals who want their workload to feel lighter and more manageable. My focus is always on creating calm through clear organisation and thoughtful care.
                </p>
                
                <p>
                  Every partnership receives direct, dedicated attention. I learn your pace, your preferences, and the way you like things done. Support becomes seamless, woven into your daily rhythm, bringing ease to the places that once felt crowded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Support shaped with intention to bring order, flow, and clarity to your work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const colors = [
                'bg-gradient-to-br from-primary to-primary/80',
                'bg-gradient-to-br from-accent to-accent/80',
                'bg-gradient-to-br from-teal-500 to-teal-600',
                'bg-gradient-to-br from-primary to-primary/80',
                'bg-gradient-to-br from-accent to-accent/80',
                'bg-gradient-to-br from-teal-500 to-teal-600',
                'bg-gradient-to-br from-primary to-primary/80',
                'bg-gradient-to-br from-accent to-accent/80',
                'bg-gradient-to-br from-teal-500 to-teal-600',
                'bg-gradient-to-br from-primary to-primary/80'
              ];
              return (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  detailedDescription={service.detailedDescription}
                  colorClass={colors[index]}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Rellatech */}
      <section className="py-20 px-4 bg-background">
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
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              My Philosophy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {philosophyValues.map((value, index) => {
              const colors = [
                'bg-gradient-to-br from-primary to-primary/80',
                'bg-gradient-to-br from-accent to-accent/80',
                'bg-gradient-to-br from-teal-500 to-teal-600'
              ];
              return (
                <div key={index} className={`${colors[index]} text-white rounded-lg p-8 text-center space-y-4`}>
                  <h3 className="text-2xl font-bold">
                    {value.title}
                  </h3>
                  <p className="opacity-95 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rellatech believes in support that is personal and grounded. By understanding the full shape of your responsibilities, Rellatech helps you move through your days with greater clarity and ease.
            </p>
          </div>
        </div>
      </section>

      {/* How I Begin Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-4">
            How I Begin
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
            Everything starts with a conversation. Share what you need, and I'll help shape a clear, manageable plan that gives you space to breathe and focus again.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 px-4">
            <Button size="lg" asChild className="w-full sm:w-auto text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <a 
              href="mailto:valentina@rellatech.io" 
              className="flex items-center gap-2 text-base md:text-lg text-primary hover:underline"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="break-all">valentina@rellatech.io</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground">Let's discuss how I can support your business</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default Index;
