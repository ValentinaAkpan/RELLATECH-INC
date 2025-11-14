import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SellingCircusAutomation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Full Width Image */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1920&q=80"
          alt="Clean workspace with tablet showing DocuSign in soft teal tones"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/85"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10 min-h-[70vh] flex items-center px-4">
          <div className="max-w-3xl space-y-6 bg-white/70 dark:bg-background/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              How I Built a Full Student Onboarding Automation for Selling Circus
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A behind-the-scenes look at creating a seamless journey for every new student
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              When Selling Circus reached out to me, their student onboarding was a mix of manual steps, repeated tasks, and little pieces of information scattered across different tools. Each new student required time, attention, and a long list of steps that needed to happen in the right order.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              They wanted something smoother.<br />
              Something kinder to their team.<br />
              Something that welcomed students with clarity instead of chaos.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              This is where thoughtful automation becomes a gift.<br />
              And this project was one of the most rewarding pieces I have built.
            </p>
          </div>

          {/* Section 1: DocuSign Signature */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              1. It All Begins When a Student Signs Their Contract
            </h2>
            
            <div className="flex justify-center my-8">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="DocuSign signature completion showing milestone moment"
                className="rounded-2xl shadow-xl max-w-2xl w-full"
              />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The onboarding journey begins the moment a student signs their contract through DocuSign. Instead of the team checking for new signings or manually updating records, I connected DocuSign to Zapier so the moment a signature is received, the workflow starts automatically.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              This tiny shift saves hours every month and removes the risk of missing a new student.
            </p>
          </section>

          {/* Section 2: TinkiFig Profile */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              2. Creating the Student Profile in TinkiFig
            </h2>

            <div className="flex justify-center my-8">
              <img 
                src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80"
                alt="Organized student profile interface with clean structure"
                className="rounded-2xl shadow-xl max-w-2xl w-full"
              />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Once DocuSign completes the contract, Zapier takes the next step quietly:
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              It creates a new student profile in TinkiFig.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              No manual entry.<br />
              No delays.<br />
              No duplicate records.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every new contract now becomes a structured student record instantly, making the student's information clear, accessible, and ready for the rest of the system.
            </p>
          </section>

          {/* Section 3: ActiveCampaign Automation */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              3. Triggering the Automation in ActiveCampaign
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-xl my-8">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="Automation flow dashboard showing smooth connected workflow"
                className="w-full"
              />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              After the TinkiFig profile is created, the system moves into the heart of the onboarding experience.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Zapier tells ActiveCampaign to add the student into a specific automation designed for new members of Selling Circus. This automation sends the welcome email, introduces key details, and guides the student through their early steps in the program.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              This ensures:
            </p>

            <ul className="space-y-3 text-lg text-muted-foreground ml-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>every student receives consistent information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>nothing is forgotten</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>the brand voice stays warm and encouraging</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>the experience feels intentional</span>
              </li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              A whole set of tasks that once lived in someone's head now unfolds on its own.
            </p>
          </section>

          {/* Section 4: Welcome Email */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              4. The Welcome Email Arrives Right on Time
            </h2>

            <div className="flex justify-center my-8">
              <img 
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"
                alt="Welcome email with warm inviting friendly design"
                className="rounded-2xl shadow-xl max-w-2xl w-full"
              />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The welcome email is a moment that shapes the student's first impression. Instead of sending it manually or worrying that it was delayed, the system sends it the moment the student enters the automation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The tone stays aligned with Selling Circus.<br />
              The timing is perfect.<br />
              The student feels seen and supported.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              This is what automation is meant to do.<br />
              Clear steps.<br />
              No stress.<br />
              A soft and steady hand guiding the process.
            </p>
          </section>

          {/* Section 5: Master Sheet */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              5. Updating the Master Sheet for Full Visibility
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-xl my-8">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Google Sheets with clean organized columns showing clarity"
                className="w-full"
              />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Once the automation has completed the key steps, the system finishes by updating a master Google Sheet. It logs:
            </p>

            <ul className="space-y-3 text-lg text-muted-foreground ml-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>the student's name</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>the date the DocuSign contract was signed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>the date the Typeform was completed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>internal notes needed for reporting</span>
              </li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed">
              This gives Selling Circus a single source of truth.<br />
              No more searching through emails.<br />
              No more checking multiple platforms.<br />
              Everything is in one place, clean and organised.
            </p>
          </section>

          {/* Section 6: Why This Matters */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              6. Why This Matters for a Growing Company
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-xl my-8">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Team collaborating around laptop with supportive collaborative atmosphere"
                className="w-full"
              />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Onboarding shapes the early experience of every student. When the process is messy or delayed, the student feels it. When it is calm and well designed, the student enters the program with confidence.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              For the Selling Circus team, this automation means:
            </p>

            <ul className="space-y-3 text-lg text-muted-foreground ml-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>less manual admin</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>fewer mistakes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>more time for teaching, coaching, and connection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>consistent student experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>stronger systems that scale naturally</span>
              </li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              What once required hours of work now unfolds on its own with quiet precision.
            </p>
          </section>

          {/* Closing Thought */}
          <section className="bg-primary/5 rounded-2xl p-8 md:p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              A Closing Thought
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Automation is not about replacing the human touch.<br />
                It is about creating space so the human moments can be stronger.
              </p>

              <p>
                Building this onboarding system for Selling Circus was a reminder of how technology and care can work together. Every step of the process now supports the team and welcomes each student with clarity and warmth.
              </p>

              <p className="font-medium text-foreground">
                If your business is ready for a smoother way of working, I would be glad to help you create a system that brings calm back into your workflow.
              </p>
            </div>

            <div className="pt-4">
              <Link to="/contact">
                <Button size="lg" className="text-lg">
                  Contact Me
                </Button>
              </Link>
            </div>
          </section>

        </div>
      </article>

      {/* Related Topics Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background/50 backdrop-blur-sm rounded-3xl p-12 border-2 border-primary/20">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Related Topics</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  '#Automation',
                  '#Zapier',
                  '#DocuSign',
                  '#ActiveCampaign',
                  '#StudentOnboarding',
                  '#WorkflowAutomation',
                  '#BusinessProcesses',
                  '#SystemsIntegration',
                  '#DigitalTransformation',
                  '#OnboardingExperience',
                  '#ScalingSystems',
                  '#EducationTech'
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
      </section>

      {/* Share This Article */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-muted/50 rounded-2xl">
            <div>
              <h3 className="text-2xl font-bold mb-2">Found this helpful?</h3>
              <p className="text-muted-foreground">Share it with someone who needs smoother onboarding systems</p>
            </div>
            <Button size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to automate your onboarding?"
        buttonText="See My Services"
        buttonLink="/services"
      />

      <Footer />
    </div>
  );
};

export default SellingCircusAutomation;
