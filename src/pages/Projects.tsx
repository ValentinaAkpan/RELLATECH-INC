import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform Optimization",
      description: "Streamlined operations and automated order processing for a growing online retail business, reducing processing time by 60%.",
      tags: ["Automation", "E-commerce", "Workflow"],
      impact: "60% time savings"
    },
    {
      title: "Executive Calendar Management",
      description: "Implemented comprehensive calendar and email management system for C-suite executive, improving scheduling efficiency and response times.",
      tags: ["Executive Support", "Scheduling", "Communication"],
      impact: "15+ hours saved weekly"
    },
    {
      title: "CRM Database Restructuring",
      description: "Reorganized and optimized customer database with advanced segmentation, leading to improved marketing campaign performance.",
      tags: ["Data Management", "CRM", "Analytics"],
      impact: "40% better engagement"
    },
    {
      title: "Website Development & Launch",
      description: "Designed and launched professional website for service-based business, including SEO optimization and content strategy.",
      tags: ["Web Development", "SEO", "Content"],
      impact: "300% traffic increase"
    },
    {
      title: "Process Documentation System",
      description: "Created comprehensive documentation and training materials for startup team, standardizing processes across departments.",
      tags: ["Documentation", "Training", "Systems"],
      impact: "Streamlined onboarding"
    },
    {
      title: "Financial Reporting Automation",
      description: "Automated monthly financial reporting and expense tracking, providing real-time insights into business performance.",
      tags: ["Finance", "Automation", "Reporting"],
      impact: "Real-time insights"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] px-4 py-20 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/85"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-2xl space-y-6 bg-white/70 dark:bg-background/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Recent Projects
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Success stories from businesses I've helped streamline and grow
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-accent">
                    Impact: {project.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground">Let's discuss how I can help transform your business operations</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <CTASection 
        title="Want results like these for your business?"
        buttonText="Start Your Project"
        buttonLink="/contact"
      />

      <FAQ />

      <Footer />
    </div>
  );
};

export default Projects;
