import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Megaphone, Settings, Globe, GraduationCap, BookOpen, BarChart, Palette, Presentation } from "lucide-react";
import { Link } from "react-router-dom";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Administrative Support",
      description: "Reliable help with documents, tasks, planning, and day-to-day organisation.",
      details: "Professional administrative support that keeps your business running smoothly. From document preparation to task management, planning coordination to daily organizational needs, everything handled with care and attention to detail. Focus on your core work while the administrative foundation stays solid.",
      color: "from-primary to-primary/80"
    },
    {
      icon: Calendar,
      title: "Inbox and Calendar Management",
      description: "Clear scheduling, structured communication, and reminders that keep your day steady.",
      details: "Transform your inbox from overwhelming to organized. Professional email management with prioritization, timely responses, and follow-ups. Calendar coordination that eliminates double-booking and ensures you never miss important meetings. Your communication systems working seamlessly.",
      color: "from-accent to-accent/80"
    },
    {
      icon: Megaphone,
      title: "Social Media and Marketing Support",
      description: "Light content help, posting, basic SEO, email campaigns, and simple promotional guidance.",
      details: "Keep your online presence active and engaging without the daily burden. Content scheduling, basic SEO optimization, email campaign management, and promotional support that represents your brand professionally. Consistent visibility that grows your reach.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Settings,
      title: "CRMs and Automation",
      description: "Support with tools like HubSpot, Keap, Mailchimp, and Kartra to keep your systems clean and easy to follow.",
      details: "Streamline your business processes with smart automation and CRM management. Expert support for HubSpot, Keap, Mailchimp, and Kartra. Keep your customer relationships organized, your workflows efficient, and your systems running smoothly. Save hours every week with intelligent automation.",
      color: "from-primary to-primary/80"
    },
    {
      icon: Globe,
      title: "Web Services and Platform Migrations",
      description: "Updates, transitions, and guidance for websites that need refreshing or moving to a better platform.",
      details: "Website updates, content management, and platform migrations handled professionally. Whether refreshing your current site or transitioning to a better platform, receive expert guidance and hands-on support. Keep your online presence current and functional without technical stress.",
      color: "from-accent to-accent/80"
    },
    {
      icon: GraduationCap,
      title: "LMS and Online Courses",
      description: "Setup and support for Kajabi, LearnDash, Kartra, and ThriveCart to bring your programs to life.",
      details: "Transform your knowledge into engaging online programs. Professional setup and support for Kajabi, LearnDash, Kartra, and ThriveCart. Course structure, content upload, student management, and technical support. Everything needed to launch and maintain successful online learning programs.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: BookOpen,
      title: "eBook Design",
      description: "Clean formatting and layout so your writing becomes a polished digital book.",
      details: "Transform your manuscript into a beautifully formatted digital book. Professional layout design, clean formatting, proper structure, and polished presentation. Your expertise deserves professional presentation, from concept to finished eBook ready for publication.",
      color: "from-primary to-primary/80"
    },
    {
      icon: BarChart,
      title: "Business Reports",
      description: "Beautiful, clear reports that reflect your achievements and growth.",
      details: "Data becomes compelling stories with professional business reports. Clean design, clear visualizations, and organized presentation that reflects your achievements and growth. Reports that communicate impact and support strategic decision-making.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Palette,
      title: "Graphic and Print Design",
      description: "Brand visuals, signage, packaging, and creative materials that elevate your presence.",
      details: "Professional design that elevates your brand presence. From business cards to signage, packaging to promotional materials, creative design that captures your essence and communicates your values. Visual identity that makes lasting impressions.",
      color: "from-accent to-accent/80"
    },
    {
      icon: Presentation,
      title: "Pitch Decks",
      description: "Compelling, organised presentations that help you communicate your ideas with confidence.",
      details: "Present your ideas with confidence through professionally designed pitch decks. Compelling visuals, clear messaging, and organized flow that captures attention and communicates your vision effectively. Presentations that open doors and create opportunities.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] px-4 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/85"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-2xl space-y-6 bg-white/70 dark:bg-background/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Support shaped with intention to bring order, flow, and clarity to your work.
            </p>
            <p className="text-lg text-muted-foreground">
              From administrative essentials to creative projects, every service is designed to lighten your workload and bring structure to your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              const serviceSlug = service.title.toLowerCase().replace(/\s+and\s+/g, '-').replace(/\s+/g, '-');
              
              return (
                <Link 
                  key={index} 
                  to={`/services/${serviceSlug}`}
                  className="grid md:grid-cols-2 gap-8 items-center hover:opacity-80 transition-opacity"
                >
                  {/* Icon Card */}
                  <div className={`${isEven ? '' : 'md:col-start-2'}`}>
                    <div className={`bg-gradient-to-br ${service.color} text-white rounded-xl p-12 flex items-center justify-center aspect-square`}>
                      <Icon className="w-24 h-24 md:w-32 md:h-32" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-4 ${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium">
                      {service.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.details}
                    </p>
                    <Button variant="outline" className="mt-4">
                      Learn More →
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-4">
            Ready to Get Started?
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
            Every partnership begins with a conversation. Share what you need, and I'll create a plan that brings calm and clarity to your work.
          </p>

          <Button size="lg" asChild className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto mx-4">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Fill out the form and I'll get back to you as soon as possible. Or email me directly at:
                </p>
                <a 
                  href="mailto:valentina@rellatech.io" 
                  className="text-2xl font-semibold text-primary hover:underline"
                >
                  valentina@rellatech.io
                </a>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-bold mb-3 text-foreground">Based in Canada</h3>
                <p className="text-muted-foreground">
                  Serving clients locally and internationally through virtual support.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <FAQ />

      <Footer />
    </div>
  );
};

export default Services;
