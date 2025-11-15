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
      <section className="relative px-4 py-16 md:py-24 overflow-hidden bg-background" role="banner" aria-label="Welcome to Rellatech Virtual Assistant Services">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
                Professional Support. Personal Touch.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                Trusted virtual assistant serving entrepreneurs and professionals across Canada. Skilled, reliable, and ready to lighten your workload.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                From administrative tasks to marketing support, get the clarity and structure you need to focus on what matters most in your business.
              </p>

              <div className="pt-4">
                <Button size="lg" asChild className="text-base md:text-lg px-8 py-6 h-auto bg-accent hover:bg-accent-light">
                  <Link to="/contact">Get Your FREE Consultation</Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-[3rem] -rotate-3 scale-105"></div>
              <img 
                src={valentinaProfile}
                alt="Valentina Rella, Professional Virtual Assistant"
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative overflow-hidden group hover-lift">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-16 translate-x-16"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Reliable & Professional</h3>
              <ul className="space-y-2 text-sm relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>Experienced virtual assistant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>Consistent, quality work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>Clear communication</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative overflow-hidden group hover-lift">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full translate-y-16 -translate-x-16"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Canadian Based Support</h3>
              <ul className="space-y-2 text-sm relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>Local, trusted service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>Your timezone, your hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>Responsive & available</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative overflow-hidden group hover-lift">
              <div className="absolute top-0 left-0 w-24 h-24 bg-accent/20 rounded-full -translate-y-12 -translate-x-12"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Flexible Plans</h3>
              <ul className="space-y-2 text-sm relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>Tailored to your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>Scale up or down anytime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>No rigid contracts</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative overflow-hidden group hover-lift">
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-accent/20 rounded-full translate-y-14 translate-x-14"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Personal Attention</h3>
              <ul className="space-y-2 text-sm relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>Direct, dedicated support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>Learn your preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>Seamless collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 space-y-4 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Comprehensive Virtual Assistant Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From admin tasks to marketing support, get the help you need to scale your business with confidence.
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
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground text-center tracking-tight">
            Why Work With Rellatech
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Direct, Personal Partnership</h3>
                  <p className="text-muted-foreground">No handoffs, no confusion. You work directly with me—one dedicated professional who learns your business inside and out.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Consistent, Quality Support</h3>
                  <p className="text-muted-foreground">Steady communication, reliable execution, and care that grows with your needs. Support that feels human and attentive.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">More Confidence, More Calm</h3>
                  <p className="text-muted-foreground">With details organized and workflows streamlined, you can lead your work with greater focus and peace of mind.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold">Ready to lighten your workload?</h3>
                <p className="text-lg opacity-95 leading-relaxed">
                  Rellatech becomes a reliable presence in your workflow, handling the details that often go overlooked so you can focus on what truly matters.
                </p>
                <Button size="lg" asChild className="bg-accent hover:bg-accent-light text-accent-foreground">
                  <Link to="/contact">Start the Conversation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Built on Core Values
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
              Support that is personal, grounded, and designed to bring greater clarity to your work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyValues.map((value, index) => {
              const colors = [
                'bg-primary',
                'bg-accent',
                'bg-primary'
              ];
              return (
                <div key={index} className={`${colors[index]} text-white rounded-2xl p-8 space-y-4 relative overflow-hidden group hover-lift`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <h3 className="text-2xl font-bold relative z-10">
                    {value.title}
                  </h3>
                  <p className="opacity-95 leading-relaxed relative z-10">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How I Begin Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-64 h-64 bg-accent/20 rounded-full -translate-y-32 -translate-x-32"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/20 rounded-full translate-y-24 translate-x-24"></div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                Let's Start the Conversation
              </h2>
              
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto opacity-95">
                Share what you need, and I'll help shape a clear, manageable plan that gives you space to breathe and focus again.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent-light text-accent-foreground text-lg px-10 py-6 h-auto">
                  <Link to="/contact">Book Your FREE Consultation</Link>
                </Button>
                <a 
                  href="mailto:valentina@rellatech.io" 
                  className="flex items-center gap-2 text-lg hover:underline"
                >
                  <Mail className="w-5 h-5" />
                  <span>valentina@rellatech.io</span>
                </a>
              </div>
            </div>
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
