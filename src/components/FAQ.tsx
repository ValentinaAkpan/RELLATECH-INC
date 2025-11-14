import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      answer: "Getting started is simple! Fill out the contact form or email me at valentina@rellatech.io. I'll schedule a consultation call to understand your needs and discuss how I can support you. From there, I'll create a customized plan and we can begin working together."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Have questions? Find answers to common inquiries below.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:valentina@rellatech.io" 
            className="text-xl font-semibold text-primary hover:underline"
          >
            valentina@rellatech.io
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
