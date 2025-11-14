import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const VirtualAssistantTimeBack = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] px-4 py-20 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/85"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-2xl space-y-6 bg-background/90 backdrop-blur-md p-10 rounded-lg shadow-xl border-2 border-primary/20">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>November 14, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Where Time Disappears Without You Noticing
              </h2>
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How a Virtual Assistant Changes Everything
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  A virtual assistant brings order to the background of your day so you can return to your real priorities. This support is not loud or dramatic. It is quiet, gentle, and incredibly effective.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  Here is where the transformation begins.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  {[
                    {
                      title: "Inbox and Calendar Care",
                      description: "Your email becomes clear and your schedule becomes steady. You begin the day knowing exactly what awaits you."
                    },
                    {
                      title: "Administrative Relief",
                      description: "Documents, follow ups, and recurring tasks are handled with care. You feel lighter almost instantly."
                    },
                    {
                      title: "Project Support",
                      description: "Your projects move forward with calm, consistent progress rather than last-minute rushes."
                    },
                    {
                      title: "Marketing Support",
                      description: "Your online presence stays active without you having to stop and remember what to post."
                    },
                    {
                      title: "System and Tool Support",
                      description: "Your platforms stay organised so your work feels smoother and less overwhelming."
                    }
                  ].map((service, index) => (
                    <div key={index} className="border-l-4 border-accent pl-6 py-4">
                      <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Feeling of Time Returning
              </h2>
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
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
                <p>
                  This is not only about productivity. It is about peace.
                </p>
                <p>
                  Days that feel calm. Decisions that feel grounded. A life that feels less crowded and more intentional.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  You deserve that.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Virtual Assistant Is a Partner, Not a Task-Doer
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The true value of a virtual assistant is not measured by how many tasks get completed. It is found in the calm they restore and the clarity they create.
                </p>
                <p>
                  You are not hiring someone to help with chores. You are inviting support. You are creating space for yourself. You are letting someone walk beside you so the load feels lighter.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  That is partnership. And that is where real change happens.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How to Know If You Are Ready for Help
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You may be ready for support if:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are exhausted by small tasks</li>
                  <li>You work all day and still feel behind</li>
                  <li>You lose time responding to messages and shifting schedules</li>
                  <li>You delay important projects because you feel scattered</li>
                  <li>You crave structure but do not have the time to build it</li>
                </ul>
                <p>
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
            <div className="text-center py-8">
              <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <p className="mt-4 text-muted-foreground">
                Email: <a href="mailto:valentina@rellatech.io" className="text-primary hover:underline">valentina@rellatech.io</a>
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default VirtualAssistantTimeBack;
