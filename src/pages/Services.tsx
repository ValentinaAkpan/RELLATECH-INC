import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Megaphone, Settings, Globe, GraduationCap, Film, BookOpen, BarChart, Palette, Presentation, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Administrative Support",
      description: "Reliable help with documents, tasks, planning, and day-to-day organisation.",
      details: "Professional administrative support that keeps your business running smoothly. From document preparation to task management, planning coordination to daily organizational needs—everything handled with care and attention to detail. Focus on your core work while the administrative foundation stays solid.",
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
      details: "Transform your knowledge into engaging online programs. Professional setup and support for Kajabi, LearnDash, Kartra, and ThriveCart. Course structure, content upload, student management, and technical support—everything needed to launch and maintain successful online learning programs.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Film,
      title: "Animation Support",
      description: "Access to creative animation for storytelling, training, or promotional content.",
      details: "Bring your ideas to life with professional animation support. Perfect for storytelling, training materials, promotional content, and explainer videos. Creative coordination that bridges your vision with polished animated content that engages your audience.",
      color: "from-primary to-primary/80"
    },
    {
      icon: BookOpen,
      title: "eBook Design",
      description: "Clean formatting and layout so your writing becomes a polished digital book.",
      details: "Transform your manuscript into a beautifully formatted digital book. Professional layout design, clean formatting, proper structure, and polished presentation. Your expertise deserves professional presentation—from concept to finished eBook ready for publication.",
      color: "from-accent to-accent/80"
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
      details: "Professional design that elevates your brand presence. From business cards to signage, packaging to promotional materials—creative design that captures your essence and communicates your values. Visual identity that makes lasting impressions.",
      color: "from-primary to-primary/80"
    },
    {
      icon: Presentation,
      title: "Pitch Decks",
      description: "Compelling, organised presentations that help you communicate your ideas with confidence.",
      details: "Present your ideas with confidence through professionally designed pitch decks. Compelling visuals, clear messaging, and organized flow that captures attention and communicates your vision effectively. Presentations that open doors and create opportunities.",
      color: "from-accent to-accent/80"
    },
    {
      icon: Smartphone,
      title: "App Guidance",
      description: "Direction and coordination for clients developing web or mobile apps.",
      details: "Navigate app development with expert guidance and coordination. Whether web or mobile, receive direction through planning, development coordination, and project management. Bridge the gap between vision and technical execution with professional support.",
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
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/92 to-background/80"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-2xl space-y-6 bg-background/40 backdrop-blur-sm p-8 rounded-lg">
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
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every partnership begins with a conversation. Share what you need, and together we'll create a plan that brings calm and clarity to your work.
          </p>

          <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
