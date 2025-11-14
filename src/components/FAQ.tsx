import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ChevronDown } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I provide virtual assistant services including administrative support, inbox and calendar management, workflow automation, social media support, web services, and creative coordination. Every service is tailored to your specific needs."
    },
    {
      question: "How do you charge for your services?",
      answer: "I offer flexible arrangements based on your needs. Whether you need ongoing support or project-based assistance, I'll create a custom plan that fits your budget and requirements. Contact me to discuss pricing specific to your situation."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes! While I'm based in Canada, I work with clients locally and internationally. Virtual support means I can help you regardless of your location, working across different time zones to ensure your needs are met."
    },
    {
      question: "What is your typical response time?",
      answer: "I typically respond to inquiries within 24 hours during business days. For ongoing clients, response times vary based on urgency and the service agreement, but I prioritize clear communication and timely support."
    },
    {
      question: "Can you help with one-time projects?",
      answer: "Absolutely! While I work with many clients on an ongoing basis, I also take on one-time projects such as website setup, automation implementation, special events, or specific organizational tasks. Let me know what you need."
    },
    {
      question: "What tools and platforms do you use?",
      answer: "I'm experienced with a wide range of tools including Google Workspace, Microsoft Office, various CRMs (HubSpot, Keap), project management platforms (Asana, Trello), automation tools, social media platforms, and AI tools like ChatGPT and Claude. If you use a specific tool, I'm happy to learn it."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple! Fill out the contact form or email me at valentina@rellatech.io. I'll schedule a consultation call to understand your needs and discuss how I can support you. From there, I'll create a customized plan and I can begin working with you."
    },
    {
      question: "What makes Rellatech different from other virtual assistant services?",
      answer: "Rellatech offers a personalized, thoughtful approach. I don't believe in cookie-cutter packages. Every plan is shaped around your unique needs, business goals, and working style. I work with you, not for you, becoming a trusted extension of your team."
    },
    {
      question: "Do you offer ongoing support or just one-time help?",
      answer: "Both! I provide ongoing support for clients who need regular administrative assistance, as well as one-time project help for specific needs like setting up automation, creating presentations, or organizing special events."
    },
    {
      question: "What industries do you have experience working with?",
      answer: "I have experience supporting clients across diverse industries including technology, creative services, professional consulting, and small business operations. My adaptable approach allows me to quickly understand your industry-specific needs."
    },
    {
      question: "How do you handle confidential information?",
      answer: "Confidentiality is paramount. I treat all client information with the utmost care and professionalism. I can sign NDAs and confidentiality agreements as needed, and I follow strict data protection practices."
    },
    {
      question: "Can you work with my existing team?",
      answer: "Yes! I seamlessly integrate with existing teams and workflows. I'm experienced in collaborating with team members, coordinating with other service providers, and adapting to your team's communication style and tools."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Have questions? Find answers to common inquiries below.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => {
            const colors = [
              'bg-gradient-to-br from-primary to-primary/90',
              'bg-gradient-to-br from-teal-500 to-teal-600',
              'bg-gradient-to-br from-accent to-accent/90',
              'bg-gradient-to-br from-primary to-primary/90',
              'bg-gradient-to-br from-teal-500 to-teal-600',
              'bg-gradient-to-br from-accent to-accent/90',
              'bg-gradient-to-br from-primary to-primary/90',
              'bg-gradient-to-br from-teal-500 to-teal-600',
              'bg-gradient-to-br from-accent to-accent/90',
              'bg-gradient-to-br from-primary to-primary/90',
              'bg-gradient-to-br from-teal-500 to-teal-600',
              'bg-gradient-to-br from-accent to-accent/90'
            ];
            return (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`${colors[index]} border-0 rounded-lg overflow-hidden`}
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline text-white px-4 md:px-6 py-4 gap-3 group">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span className="flex-1">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/95 leading-relaxed px-4 md:px-6 pl-14 md:pl-20">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
