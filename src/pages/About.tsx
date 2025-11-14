import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Heart, Handshake, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import rellatechLogo from "@/assets/rellatech-logo.png";
import valentinaProfile from "@/assets/valentina-profile.png";
import aboutHero from "@/assets/about-hero.jpg";
import virtualGurusLogo from "@/assets/virtual-gurus-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] px-4 py-20 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/85"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-3xl space-y-6 bg-white/70 dark:bg-background/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              About Rellatech
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Personal, steady support for individuals, teams, and businesses who want their workload to feel lighter.
            </p>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">My Approach</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              In a world where business owners often feel stretched too thin, Rellatech offers a different kind of support. I provide more than task completion. I bring calm, clarity, and a steady hand to the behind-the-scenes work that keeps your business running smoothly. My services are thoughtfully crafted for clients who value reliability, personalised attention, and genuine care in every interaction.
            </p>
            <p>
              I believe in a collaborative approach, taking time to understand your rhythm, your priorities, and the way you work. There are no cookie-cutter packages here. Every plan is shaped around your unique needs, your business goals, and the areas where you need support most. Whether you are managing daily operations, navigating seasonal demands, or building systems that scale, I tailor my services to fit your reality.
            </p>
            <p className="text-xl font-semibold text-foreground">
              I don't work for you; <em>I work with you</em>, becoming a trusted extension of your team and a steady partner in your business journey.
            </p>
            <p>
              My approach is both holistic and precise. I look at the full picture while focusing on the specific actions that move the needle. This allows me to provide support that is efficient, effective, and aligned with the elevated standard you expect. When your operations flow smoothly, you gain space to think clearly, lead confidently, and focus on the work only you can do.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full max-w-md mx-auto aspect-square rounded-lg overflow-hidden shadow-xl">
                <img
                  src={valentinaProfile}
                  alt="Valentina Rella, Founder of Rellatech Virtual Assistant Services in Canada, professional business portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 border-4 border-accent rounded-lg p-6 md:p-8 bg-background shadow-lg space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Valentina Rella</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary">Founder and Principal</h3>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Valentina's journey into virtual assistance is rooted in meaningful collaboration with individuals, teams, and businesses across Canada and beyond. With experience supporting clients in diverse industries, from technology and creative services to professional consulting and small business operations, she founded Rellatech to bring a more human, thoughtful approach to business support.
                </p>
                <p>
                  Valentina believes that great support is built on listening, adapting, and treating every client's workload with the same care they would give it themselves. Her vision offers clients dependable service that feels personal, professional, and refreshingly straightforward. She values balance and believes that when your business operations are organised, your mind feels clearer and your days feel lighter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured</h2>
            <p className="text-xl text-muted-foreground">
              Recognised for innovation and exceptional client service
            </p>
          </div>
          
          <Card className="border-border shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              {/* Image Side */}
              <div className="relative h-64 md:h-auto bg-muted/30 flex items-center justify-center p-6 sm:p-8">
                <img
                  src={virtualGurusLogo}
                  alt="Virtual Gurus logo - Featured recognition for innovation and exceptional client service"
                  className="max-w-full max-h-32 sm:max-h-48 object-contain"
                />
              </div>
              
              {/* Content Side */}
              <div className="p-8 flex flex-col justify-center">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl md:text-3xl mb-3">
                    How AI Became My Superpower
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Featured by Virtual Gurus • October 2025</p>
                </CardHeader>
                
                <CardContent className="p-0 space-y-4">
                  <div className="bg-muted/50 border-l-4 border-primary p-4 rounded-r">
                    <p className="italic text-foreground">
                      "I always ask myself first, can AI help with the heavy lifting? If it can, I use it."
                    </p>
                  </div>

                  <p className="text-muted-foreground">
                    Celebrated as one of Virtual Gurus' most innovative assistants for creative use of AI and ability to save clients thousands of dollars through smart automation.
                  </p>

                  <Button asChild variant="outline" className="gap-2 w-full md:w-auto">
                    <a 
                      href="https://thevirtualgurus.com/blog/virtual-assistant-profile-valentina" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Read Full Article <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Working Together Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Working Together</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At Rellatech, collaboration is simple and sincere. You are not passed from one person to another. You work directly with me. I bring a steady presence to your operations, carrying the administrative, organisational, and technical tasks that give you room to focus on strategy, creativity, and leadership. My goal is to make your work feel lighter and more manageable, without ever losing the personal connection that matters so much.
            </p>
            <p>
              When a project calls for support beyond my own skill set, I reach into a small circle of trusted specialists I have built relationships with over time. These are people whose work I know well and whose values align with mine. I coordinate everything quietly in the background so you never feel the weight of managing multiple hands. You continue to work with me as your point of contact while receiving the benefit of extended expertise only when it truly strengthens your outcome.
            </p>
            <p>
              This approach allows you to stay grounded and supported without the noise of a large team. Whether you need ongoing administrative care, help with a specific project, or guidance setting up systems that grow with you, Rellatech offers service shaped with intention, precision, and genuine commitment. The focus is not on doing more. The focus is on doing what matters, with clarity and care.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">My Philosophy</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="border-border">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-center text-2xl uppercase">Professional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Support that respects your standards and reflects the care you put into your work.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center mb-4">
                  <Handshake className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-center text-2xl uppercase">Authentic</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  A partnership built on honesty, trust, and real human connection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-center text-2xl uppercase">Thoughtful</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  An approach shaped by patience, intention, and attention to the details that matter.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I believe support should feel personal and steady, not rushed or impersonal. My work is rooted in listening closely, understanding your pace, and helping you move forward with clarity. I pay attention to the full shape of your responsibilities while taking care of the small tasks that bring order to your day.
            </p>
            <p>
              This gentle way of working creates space for you to breathe, plan, and feel in control again. My goal is simple. To show up with care, communicate with respect, and create a sense of calm in the places that feel crowded. When support is thoughtful and sincere, your entire work life becomes lighter and more aligned.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Feeling Overwhelmed and Stuck?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Connect with me today by scheduling a consultation and start your journey towards a more efficient and successful business.
          </p>
          <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
          <p className="mt-6 text-muted-foreground">
            Email: <a href="mailto:valentina@rellatech.io" className="text-primary hover:underline">valentina@rellatech.io</a>
          </p>
        </div>
      </section>

      <FAQ />

      <Footer />
    </div>
  );
};

export default About;
