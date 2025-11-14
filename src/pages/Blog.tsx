import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "How a Virtual Assistant Helps You Get Your Time Back",
      excerpt: "Find clarity, calm, and steady support in the moments you need it most. Discover how a virtual assistant changes the rhythm of your day.",
      date: "March 20, 2024",
      category: "Productivity",
      slug: "virtual-assistant-time-back",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] px-4 py-12 md:py-20 overflow-hidden bg-primary">
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[30vh] md:min-h-[35vh] flex items-center">
          <div className="max-w-3xl space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
              Insights & Resources
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/95 leading-relaxed">
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

      <FAQ />

      <Footer />
    </div>
  );
};

export default Blog;
