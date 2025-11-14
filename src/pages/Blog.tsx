import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "How a Virtual Assistant Helps You Get Your Time Back",
      excerpt: "Find clarity, calm, and steady support in the moments you need it most. Discover how a virtual assistant changes the rhythm of your day.",
      date: "November 14, 2025",
      category: "Productivity",
      slug: "virtual-assistant-time-back",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
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

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] px-4 py-20 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/85"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-2xl space-y-6 bg-white/70 dark:bg-background/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Insights & Resources
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Thoughtful guidance on virtual assistance, productivity, and creating calm in your workday.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden border-2 border-border hover:shadow-xl transition-shadow">
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
                        <span className="text-sm font-semibold text-primary">{post.category}</span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <Button variant="outline">
                        Read Article
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

      <Footer />
    </div>
  );
};

export default Blog;
