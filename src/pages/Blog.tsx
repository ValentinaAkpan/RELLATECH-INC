import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { BookConsultCTA } from "@/components/BookConsultCTA";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "How I Built a Full Student Onboarding Automation for Selling Circus",
      excerpt: "A behind-the-scenes look at creating a seamless journey for every new student. See how DocuSign, Zapier, TinkiFig, and ActiveCampaign came together to create a smooth onboarding experience.",
      date: "November 14, 2025",
      category: "Case Study",
      slug: "selling-circus-automation",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
      title: "How I Helped Austin Bryant Consulting Bring Order Back to Google Drive",
      excerpt: "A gentle behind-the-scenes look at solving digital clutter with care and clarity. Discover how custom automation and thoughtful organisation transformed a chaotic Google Drive into a clean, reliable system.",
      date: "November 14, 2025",
      category: "Case Study",
      slug: "google-drive-organization",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    },
    {
      title: "How a Virtual Assistant Helps You Get Your Time Back",
      excerpt: "Find clarity, calm, and steady support in the moments you need it most. Discover how a virtual assistant changes the rhythm of your day.",
      date: "November 14, 2025",
      category: "Productivity",
      slug: "virtual-assistant-time-back",
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80"
    },
    {
      title: "When Your Workday Feels Too Heavy, Here Is Where You Begin",
      excerpt: "A gentle guide for anyone carrying more than they planned to. Learn how to recognize overwhelm, release invisible work, and invite support before stress takes over.",
      date: "November 14, 2025",
      category: "Work-Life Balance",
      slug: "workday-too-heavy",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-4 py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full -translate-y-48"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full translate-y-40"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl space-y-6 text-primary-foreground py-16">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              Insights & Resources
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              Thoughtful guidance on virtual assistance, productivity, and creating calm in your workday.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden border-2 border-primary/20 hover:shadow-elegant transition-all hover-lift bg-background">
                <Link to={`/blog/${post.slug}`}>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-6 md:p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Read Article →
                      </Button>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">Have questions or ready to start? Let me know how I can help</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <CTASection 
        title="Ready to transform your workday?"
        buttonText="See My Services"
        buttonLink="/services"
      />

      <FAQ />

      <BookConsultCTA />

      <Footer />
    </div>
  );
};

export default Blog;
