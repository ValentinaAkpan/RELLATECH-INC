import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WorkdayTooHeavy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>When Your Workday Feels Too Heavy, Here Is Where You Begin | Rellatech</title>
        <meta name="description" content="A gentle guide for anyone carrying more than they planned to. Learn how to recognize overwhelm, release invisible work, and invite support before stress takes over." />
        <meta name="keywords" content="overwhelm, work stress, burnout prevention, mental load, work-life balance, virtual assistant support, business overwhelm, stress management, workday balance" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://rellatech.io/blog/workday-too-heavy" />
        <meta property="og:title" content="When Your Workday Feels Too Heavy, Here Is Where You Begin" />
        <meta property="og:description" content="A gentle guide for anyone carrying more than they planned to. Find your starting point for relief." />
        <meta property="article:published_time" content="2025-11-14" />
        <meta property="article:author" content="Valentina Akpan" />
        <meta property="article:section" content="Work-Life Balance" />
        <meta property="article:tag" content="Overwhelm" />
        <meta property="article:tag" content="Stress Management" />
        <meta property="article:tag" content="Virtual Assistant" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rellatech.io/blog/workday-too-heavy" />
        <meta name="twitter:title" content="When Your Workday Feels Too Heavy, Here Is Where You Begin" />
        <meta name="twitter:description" content="A gentle guide for anyone carrying more than they planned to." />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "When Your Workday Feels Too Heavy, Here Is Where You Begin",
            "description": "A gentle guide for anyone carrying more than they planned to. Learn how to recognize overwhelm and find relief.",
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
              "@id": "https://rellatech.io/blog/workday-too-heavy"
            }
          })}
        </script>
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] px-4 py-20 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/85"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-2xl space-y-6 bg-background/95 backdrop-blur-md p-10 rounded-2xl shadow-2xl border-2 border-secondary/30">
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2 px-3 py-1 bg-secondary/20 rounded-full">
                <Calendar className="w-4 h-4 text-secondary" />
                <span className="text-secondary font-medium">November 14, 2025</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-accent/20 rounded-full">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-accent font-medium">6 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              When Your Workday Feels Too Heavy, Here Is Where You Begin
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
              A gentle guide for anyone carrying more than they planned to
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
              <p className="text-xl">
                There is a moment in every busy season when the mind starts to tug.
              </p>
              <p className="text-xl italic">
                A quiet whisper that says, <span className="text-foreground font-semibold">"This is too much. Something needs to change."</span>
              </p>
              <p>
                Most people ignore that first whisper. They tell themselves to push a little harder, stay up a little later, hold just one more thing. Weeks pass. The list grows. The pressure tightens. And suddenly the smallest task feels like climbing a mountain in soft shoes.
              </p>
              <div className="my-6 p-6 bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 rounded-xl border-l-4 border-secondary">
                <p className="text-xl font-semibold text-foreground">
                  If that sounds familiar, you are not alone.
                </p>
              </div>
              <p>
                I see this every day, and it is one of the biggest signs that you are overdue for support.
              </p>
              <p>
                Today, I want to offer something simple. A starting point. A shift. A breath. A place to begin again.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 pb-3 border-b-4 border-secondary/30">
                1. Notice What Hurts First
              </h2>
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/10">
                <img 
                  src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&q=80"
                  alt="Person feeling stressed with hands on head at desk"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Before I reorganize anything, I start with awareness.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Ask yourself:
                </p>
                <ul className="list-none space-y-3 my-6">
                  {[
                    "What part of my workday feels heavy?",
                    "Where is the tension coming from?",
                    "What keeps being pushed to tomorrow?"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 pl-2">
                      <span className="text-secondary text-2xl mt-1">•</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Sometimes the overwhelm is not the whole day. Sometimes it is just one area quietly pulling everything out of rhythm.
                </p>
                <div className="my-6 p-6 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl border-l-4 border-primary">
                  <p className="text-xl font-bold text-foreground">
                    Once you see it, you can finally address it.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 pb-3 border-b-4 border-accent/30">
                2. Bring the Invisible Work Into the Light
              </h2>
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/10">
                <img 
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80"
                  alt="Cluttered desk with scattered papers representing invisible work"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  So much of the stress people carry comes from tasks that never make it onto paper. Tiny things. Repeating things. Half-started things. Mental clutter.
                </p>
                <p className="text-lg font-semibold text-accent">
                  List them. Not neatly. Not perfectly. Just get them out.
                </p>
                <div className="my-6 p-6 bg-gradient-to-r from-accent/20 via-secondary/20 to-primary/20 rounded-xl border-l-4 border-accent">
                  <p className="text-xl font-bold text-foreground">
                    A messy list is kinder than a crowded mind.
                  </p>
                </div>
                <p>
                  When I work with clients, this is one of the first steps I take. The simple act of naming everything creates a shift. Suddenly the chaos is no longer swirling inside you. It is laid out calmly, ready to be handled.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 pb-3 border-b-4 border-primary/30">
                3. Choose the Next Three Steps, Not the Next Thirty
              </h2>
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80"
                  alt="Clean organized desk with laptop and notebook"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Most people try to fix everything at once. That is where burnout begins.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Instead, choose only three things:
                </p>
                <ul className="list-none space-y-3 my-6">
                  {[
                    "What actually matters this week",
                    "What supports that",
                    "What can wait"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 pl-2">
                      <span className="text-primary text-2xl mt-1">•</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="my-6 p-6 bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 rounded-xl border-l-4 border-secondary">
                  <p className="text-xl font-bold text-foreground">
                    Clarity is not created by speed. It is created by intention.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 pb-3 border-b-4 border-secondary/30">
                4. Release What Does Not Belong on Your Plate
              </h2>
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/10">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
                  alt="Hands passing documents representing delegation"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  There are tasks that drain you and tasks that sustain you. There are tasks you do because you must and tasks you do because you always have. There are tasks someone else can handle better, faster, or with far more ease.
                </p>
                <div className="my-6 p-6 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 rounded-xl border-l-4 border-accent">
                  <p className="text-xl font-bold text-foreground">
                    Letting go is not weakness. It is wisdom.
                  </p>
                </div>
                <p className="text-lg">
                  This is the heart of the work I do at Rellatech. I help you release what no longer belongs on your shoulders so you can take care of your business with strength and clarity.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 pb-3 border-b-4 border-accent/30">
                5. Invite Support Before the Stress Sharpens
              </h2>
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/10">
                <img 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"
                  alt="Calm workspace with tea cup representing relief"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Most people wait until they are drowning before they ask for help. But the best work happens before the panic sets in.
                </p>
                <p className="text-lg">
                  If your season is shifting<br />
                  If your days feel crowded<br />
                  If your shoulders feel too full
                </p>
                <div className="my-6 p-6 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl border-l-4 border-primary">
                  <p className="text-xl font-bold text-foreground">
                    This is the right time to reach out.
                  </p>
                </div>
                <p>
                  Support does not mean losing control of your business. It means creating structure, peace, and space so you can lead with confidence instead of exhaustion.
                </p>
              </div>
            </div>

            {/* Closing Section */}
            <div className="bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 rounded-2xl p-10 mb-12 border-2 border-primary/30 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                A Closing Thought
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-center">
                <p className="text-xl font-semibold text-foreground">
                  You are allowed to have a workday that feels lighter.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  You are allowed to ask for help before everything falls apart.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  You are allowed to create a future filled with clarity instead of chaos.
                </p>
                <div className="my-8 p-10 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl border-l-8 border-primary shadow-2xl">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-3">
                    When you are ready, I am here.
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">
                    Steady. Calm. Ready to help you breathe again.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-12 bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 rounded-2xl border-2 border-secondary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Begin Again?</h3>
              <Button size="lg" asChild className="text-lg px-10 py-7 h-auto shadow-xl hover:shadow-2xl transition-all">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <p className="mt-6 text-muted-foreground text-lg">
                Email: <a href="mailto:valentina@rellatech.io" className="text-primary hover:text-secondary font-semibold underline decoration-2 underline-offset-4 transition-colors">valentina@rellatech.io</a>
              </p>
            </div>

            {/* Hashtags */}
            <div className="mt-12 pt-8 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-2xl p-8 border-2 border-primary/30">
              <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Related Topics</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  '#WorkOverwhelm',
                  '#BurnoutPrevention',
                  '#StressRelief',
                  '#WorkLifeBalance',
                  '#VirtualAssistant',
                  '#MentalLoad',
                  '#BusinessSupport',
                  '#SelfCare',
                  '#ProductivityTips',
                  '#WorkSmarter',
                  '#DelegateAndElevate',
                  '#EntrepreneurWellness',
                  '#FindYourCalm',
                  '#SupportMatters'
                ].map((tag, index) => (
                  <Link
                    key={index}
                    to="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-primary/30 to-secondary/30 hover:from-primary/50 hover:to-secondary/50 text-foreground font-bold rounded-full text-base transition-all duration-300 border-2 border-primary/50 hover:border-primary hover:shadow-xl hover:scale-105"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection 
        title="Ready to lighten your workload?"
        buttonText="Discover How I Can Help"
        buttonLink="/services"
      />

      <Footer />
    </div>
  );
};

export default WorkdayTooHeavy;
