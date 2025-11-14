import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Recent Projects
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Success stories from businesses I've helped streamline and grow
          </p>
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
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how I can help transform your business operations
          </p>
          <a
            href="mailto:valentina@rellatech.io"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <FAQ />

      <Footer />
    </div>
  );
};

export default Projects;
