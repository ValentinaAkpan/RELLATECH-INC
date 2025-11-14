import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const VirtualAssistantTimeBack = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>How a Virtual Assistant Helps You Get Your Time Back | Rellatech</title>
        <meta name="description" content="Discover how a virtual assistant can help you reclaim your time, reduce stress, and focus on what truly matters. Learn about administrative support, email management, and project coordination services." />
        <meta name="keywords" content="virtual assistant, time management, productivity, administrative support, email management, project coordination, virtual assistant services, get time back, reduce workload" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://rellatech.io/blog/virtual-assistant-time-back" />
        <meta property="og:title" content="How a Virtual Assistant Helps You Get Your Time Back" />
        <meta property="og:description" content="Find clarity, calm, and steady support in the moments you need it most. Learn how virtual assistant services can transform your workday." />
        <meta property="article:published_time" content="2025-11-14" />
        <meta property="article:author" content="Valentina Akpan" />
        <meta property="article:section" content="Productivity" />
        <meta property="article:tag" content="Virtual Assistant" />
        <meta property="article:tag" content="Time Management" />
        <meta property="article:tag" content="Productivity" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rellatech.io/blog/virtual-assistant-time-back" />
        <meta name="twitter:title" content="How a Virtual Assistant Helps You Get Your Time Back" />
        <meta name="twitter:description" content="Find clarity, calm, and steady support. Learn how virtual assistant services help you reclaim your time." />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How a Virtual Assistant Helps You Get Your Time Back",
            "description": "Discover how a virtual assistant can help you reclaim your time, reduce stress, and focus on what truly matters.",
            "image": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&q=80",
            "author": {
              "@type": "Person",
              "name": "Valentina Akpan",
              "url": "https://rellatech.io/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Rellatech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://storage.googleapis.com/gpt-engineer-file-uploads/0TEIpVo0J3RX5SOVJLFv7xaTWA52/uploads/1763093600620-cropped-High-Resolution-Color-Logo-on-Transparent-Background.png"
              }
            },
            "datePublished": "2025-11-14",
            "dateModified": "2025-11-14",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://rellatech.io/blog/virtual-assistant-time-back"
            }
          })}
        </script>
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] px-4 py-20 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/85"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-2xl space-y-6 bg-background/95 backdrop-blur-md p-10 rounded-2xl shadow-2xl border-2 border-primary/30">
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">November 14, 2025</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-secondary/20 rounded-full">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-secondary font-medium">5 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              How a Virtual Assistant Helps You Get Your Time Back
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Find clarity, calm, and steady support in the moments you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                There comes a moment in every person&apos;s day when everything feels heavier than it should. Emails multiply. Tasks pile quietly in the background. Deadlines shift. The hours slip away, and you wonder how you worked so hard and still feel behind.
              </p>
              <p className="text-xl font-semibold text-foreground">
                The truth is simple. You were never meant to carry all of it alone.
              </p>
              <p>
                A virtual assistant changes the rhythm of your day by taking the weight of everything that steals your focus. With quiet steadiness, a virtual assistant gives you back the one thing you miss most. Your time.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 pb-3 border-b-4 border-primary/30">
                Where Time Disappears Without You Noticing
              </h2>
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"
                  alt="Hands typing on a laptop during administrative support"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Time rarely slips away because of one big task. It dissolves through tiny interruptions.
                </p>
                <p>
                  An email that needs answering. A meeting that needs moving. A file that needs adjusting.
                </p>
                <p>
                  None of it is difficult, but all of it is draining, because scattered tasks scatter the mind too.
                </p>
                <p>
                  When your attention breaks again and again, it becomes much harder to focus on the work that matters.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 pb-3 border-b-4 border-secondary/30">
                How a Virtual Assistant Changes Everything
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  A virtual assistant brings order to the background of your day so you can return to your real priorities. This support is not loud or dramatic. It is quiet, gentle, and incredibly effective.
                </p>
                <p className="text-xl font-semibold text-primary">
                  Here is where the transformation begins.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  {[
                    {
                      title: "Inbox and Calendar Care",
                      description: "Your email becomes clear and your schedule becomes steady. You begin the day knowing exactly what awaits you.",
                      gradient: "from-primary/20 to-primary/5"
                    },
                    {
                      title: "Administrative Relief",
                      description: "Documents, follow ups, and recurring tasks are handled with care. You feel lighter almost instantly.",
                      gradient: "from-secondary/20 to-secondary/5"
                    },
                    {
                      title: "Project Support",
                      description: "Your projects move forward with calm, consistent progress rather than last-minute rushes.",
                      gradient: "from-accent/20 to-accent/5"
                    },
                    {
                      title: "Marketing Support",
                      description: "Your online presence stays active without you having to stop and remember what to post.",
                      gradient: "from-primary/20 to-primary/5"
                    },
                    {
                      title: "System and Tool Support",
                      description: "Your platforms stay organised so your work feels smoother and less overwhelming.",
                      gradient: "from-secondary/20 to-secondary/5"
                    }
                  ].map((service, index) => (
                    <div 
                      key={index} 
                      className={`bg-gradient-to-br ${service.gradient} border-l-4 ${
                        index % 3 === 0 ? 'border-primary' : index % 3 === 1 ? 'border-secondary' : 'border-accent'
                      } rounded-r-lg pl-6 py-6 pr-4 shadow-md hover:shadow-xl transition-all duration-300`}
                    >
                      <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 pb-3 border-b-4 border-accent/30">
                The Feeling of Time Returning
              </h2>
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/10">
                <img 
                  src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1200&q=80"
                  alt="Planner and warm sunlight on a calm workspace"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  When someone helps carry your workload, your mind begins to relax. You think more clearly. You breathe more easily. You focus on the work that brings you energy instead of the tasks that drain it.
                </p>
                <p className="text-xl font-semibold text-primary">
                  This is not only about productivity. It is about peace.
                </p>
                <p>
                  Days that feel calm. Decisions that feel grounded. A life that feels less crowded and more intentional.
                </p>
                <div className="my-6 p-6 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl border-l-4 border-primary">
                  <p className="text-2xl font-bold text-foreground">
                    You deserve that.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 pb-3 border-b-4 border-primary/30">
                A Virtual Assistant Is a Partner, Not a Task-Doer
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The true value of a virtual assistant is not measured by how many tasks get completed. It is found in the calm they restore and the clarity they create.
                </p>
                <p>
                  You are not hiring someone to help with chores. You are inviting support. You are creating space for yourself. You are letting someone walk beside you so the load feels lighter.
                </p>
                <p className="text-xl font-semibold text-accent">
                  That is partnership. And that is where real change happens.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 border-2 border-secondary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How to Know If You Are Ready for Help
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">You may be ready for support if:</p>
                <ul className="list-none space-y-3">
                  {[
                    "You are exhausted by small tasks",
                    "You work all day and still feel behind",
                    "You lose time responding to messages and shifting schedules",
                    "You delay important projects because you feel scattered",
                    "You crave structure but do not have the time to build it"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 pl-2">
                      <span className="text-primary text-2xl mt-1">•</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg pt-4">
                  If any of these feel familiar, you are not alone. Support may be exactly what your days have been missing.
                </p>
              </div>
            </div>

            {/* Final Section */}
            <div className="bg-muted/30 rounded-lg p-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Final Thoughts
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your time is precious. Your peace matters. With gentle partnership and steady care, your work can feel lighter, clearer, and far more manageable.
                </p>
                <p>
                  Rellatech offers thoughtful support for those who want order, attention, and calm woven back into their days.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Get Your Time Back?</h3>
              <Button size="lg" asChild className="text-lg px-10 py-7 h-auto shadow-xl hover:shadow-2xl transition-all">
                <Link to="/contact" className="flex items-center gap-2">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <p className="mt-6 text-muted-foreground text-lg">
                Email: <a href="mailto:valentina@rellatech.io" className="text-primary hover:text-secondary font-semibold underline decoration-2 underline-offset-4 transition-colors">valentina@rellatech.io</a>
              </p>
            </div>

            {/* Hashtags */}
            <div className="mt-12 pt-8 border-t-2 border-primary/20">
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  '#VirtualAssistant',
                  '#TimeManagement',
                  '#Productivity',
                  '#AdminSupport',
                  '#WorkLifeBalance',
                  '#BusinessSupport',
                  '#EmailManagement',
                  '#ProjectCoordination',
                  '#RemoteWork',
                  '#EntrepreneurLife',
                  '#SmallBusiness',
                  '#VirtualAssistantServices',
                  '#GetYourTimeBack',
                  '#DelegateToElevate'
                ].map((tag, index) => (
                  <Link
                    key={index}
                    to="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary font-semibold rounded-full text-sm hover:from-primary/30 hover:to-secondary/30 transition-all shadow-sm hover:shadow-md"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default VirtualAssistantTimeBack;
