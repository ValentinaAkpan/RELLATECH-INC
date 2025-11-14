import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GoogleDriveOrganization = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Full Width Image */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1593642532400-2682810df593?w=1920&q=80"
          alt="Calm teal-toned workspace with laptop open to Google Drive and notebook"
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
              How I Helped Austin Bryant Consulting Bring Order Back to Google Drive
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A gentle behind-the-scenes look at solving digital clutter with care and clarity
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
              There is something almost heavy about a crowded Google Drive.<br />
              Folders in the wrong place. Files scattered across personal and business accounts.<br />
              Important documents living in two homes at once.<br />
              Nothing feels quite settled.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              When Austin Bryant Consulting reached out to me, this was exactly the situation. Years of work stored inside a personal Google Drive needed to be moved carefully into the business account. Nothing could be lost. Nothing could be misplaced. And the process needed to be smooth and reliable.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              This is the kind of work I love.<br />
              Quiet digital organisation.<br />
              Simple systems.<br />
              Small shifts that bring big relief.
            </p>
          </div>

          {/* Section 1: Understanding the Problem */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              1. Understanding the Problem
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Austin had hundreds of files that needed a new home.<br />
                  Some were personal.<br />
                  Some were business.<br />
                  Some were deeply important to ongoing client work.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  The challenge was simple to describe but delicate to execute. Everything had to move from one Drive to another, cleanly, safely, and in order. No duplicates. No missing folders. No surprises.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Before touching anything, I took time to understand his structure. Where his projects lived. How he named his documents. What needed priority. What needed protection.
                </p>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80"
                  alt="Scattered folders floating in digital grid showing cluttered state"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Building a Gentle, Automated Solution */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              2. Building a Gentle, Automated Solution
            </h2>

            <div className="flex justify-center my-8">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                alt="Clean code lines showing Google Apps Script automation"
                className="rounded-2xl shadow-xl max-w-2xl w-full"
              />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Instead of dragging files manually, I created a custom workflow using Google Apps Script. This allowed me to move folder by folder with clarity and precision.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The automation did three things quietly in the background:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-muted/30 p-6 rounded-xl text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <p className="text-foreground font-medium">Moved each folder into the new business Drive</p>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground font-medium">Checked every file for errors or permission issues</p>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-foreground font-medium">Logged every action into a Google Sheet</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The spreadsheet became the heartbeat of the project. Every successful move. Every skipped file. Every confirmation note. All captured in one clean place so Austin could review the entire process if he wished.
            </p>
          </section>

          {/* Section 3: Why This Matters */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              3. Why This Matters More Than People Think
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-xl my-8">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                alt="Clean organized Google Drive folder structure"
                className="w-full"
              />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Digital clutter drains energy just as much as a messy desk. Files stored in the wrong place slow people down. Searching for documents steals minutes every day. And using a personal account for business creates confusion that grows quietly in the background.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Once everything was moved, Austin had:
            </p>

            <ul className="space-y-3 text-lg text-muted-foreground ml-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>a clean business Google Drive</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>a record of all transferred files</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>a structure that matched his workflow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>confidence that nothing was missing</span>
              </li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Most importantly, his digital world became lighter.
            </p>
          </section>

          {/* Section 4: Heart of Rellatech */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              4. This Is the Heart of Rellatech
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-xl my-8">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80"
                alt="Hands typing gently on laptop keyboard"
                className="w-full"
              />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              People often think virtual assistance is all calendars and emails. But it is also quiet problem solving. Small automations. Digital cleanups. Thoughtful organisation that frees people to move through their day with ease.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Helping Austin Bryant Consulting was a reminder of why I do what I do. Every system tells a story. Every workflow can be softened. Every piece of digital chaos can be untangled with patience, clarity, and care.
            </p>
          </section>

          {/* Section 5: Closing Thought */}
          <section className="bg-primary/5 rounded-2xl p-8 md:p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              5. A Gentle Closing Thought
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                You are allowed to have a digital world that feels organised and light. You are allowed to create systems that support you instead of overwhelm you. And when things get too crowded, you do not need to figure it all out alone.
              </p>

              <p className="font-medium text-foreground">
                When you are ready to bring order back to your files, your workflow, or your systems, I am here to help you breathe again.
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
                  '#DigitalOrganization',
                  '#GoogleDrive',
                  '#VirtualAssistant',
                  '#WorkflowOptimization',
                  '#SystemsThinking',
                  '#GoogleAppsScript',
                  '#RemoteWork',
                  '#BusinessEfficiency',
                  '#DigitalCleanup',
                  '#FileManagement',
                  '#CloudStorage'
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
              <p className="text-muted-foreground">Share it with someone who needs a calmer digital workspace</p>
            </div>
            <Button size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to bring calm to your digital workspace?"
        buttonText="See My Services"
        buttonLink="/services"
      />

      <Footer />
    </div>
  );
};

export default GoogleDriveOrganization;
