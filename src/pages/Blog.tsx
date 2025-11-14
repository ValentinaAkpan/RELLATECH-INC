import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "5 Signs You Need a Virtual Assistant",
      excerpt: "Discover the key indicators that it's time to bring professional support into your business operations.",
      date: "March 15, 2024",
      category: "Productivity"
    },
    {
      title: "How Automation Can Transform Your Workflow",
      excerpt: "Learn how smart automation saves hours every week and reduces repetitive tasks in your business.",
      date: "March 10, 2024",
      category: "Automation"
    },
    {
      title: "The Benefits of Organized Email Management",
      excerpt: "Why inbox organization matters and how it impacts your productivity and peace of mind.",
      date: "March 5, 2024",
      category: "Tips & Tricks"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Insights, tips, and resources for better business operations
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <Card key={index} className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {post.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <Button variant="outline">Read More</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
