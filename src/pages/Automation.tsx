import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Workflow, Clock, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const Automation = () => {
  const automationServices = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and create efficient workflows that save hours each week.",
      benefits: ["Automated email responses", "Task routing", "Approval processes"]
    },
    {
      icon: Clock,
      title: "Time Management Systems",
      description: "Implement smart scheduling and calendar management solutions for maximum productivity.",
      benefits: ["Smart scheduling", "Meeting automation", "Time tracking"]
    },
    {
      icon: TrendingUp,
      title: "Data & Reporting",
      description: "Automate data collection, analysis, and reporting for real-time business insights.",
      benefits: ["Automated reports", "Data visualization", "Performance tracking"]
    },
    {
      icon: Zap,
      title: "Integration Solutions",
      description: "Connect your tools and platforms for seamless data flow and communication.",
      benefits: ["API integrations", "Cross-platform sync", "Automated notifications"]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery",
      description: "I analyze your current processes to identify automation opportunities"
    },
    {
      step: "2",
      title: "Design",
      description: "Create custom automation workflows tailored to your business needs"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Set up and test automated systems to ensure smooth operation"
    },
    {
      step: "4",
      title: "Optimization",
      description: "Monitor and refine automations for maximum efficiency and ROI"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Automation Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Automate Your Business, Amplify Your Growth
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Save time, reduce errors, and scale efficiently with intelligent automation solutions
          </p>
          <Button asChild size="lg" className="text-lg">
            <a href="mailto:valentina@rellatech.io?subject=Automation Inquiry">
              Start Automating <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Automation Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Automation Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform manual processes into automated workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {automationServices.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven process for successful automation implementation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Why Automate?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Save 15+ Hours Weekly</h4>
                    <p className="text-sm text-muted-foreground">Eliminate repetitive manual tasks</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Reduce Errors by 80%</h4>
                    <p className="text-sm text-muted-foreground">Minimize human error in processes</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Scale Effortlessly</h4>
                    <p className="text-sm text-muted-foreground">Grow without adding overhead</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Instant Insights</h4>
                    <p className="text-sm text-muted-foreground">Real-time data and reporting</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Automate Your Workflow?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's identify opportunities to streamline your business processes
          </p>
          <Button asChild size="lg" className="text-lg">
            <a href="mailto:valentina@rellatech.io?subject=Automation Consultation">
              Schedule a Free Consultation
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Automation;
