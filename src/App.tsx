import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import AdministrativeSupport from "./pages/services/AdministrativeSupport";
import InboxCalendar from "./pages/services/InboxCalendar";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import CRMsAutomation from "./pages/services/CRMsAutomation";
import WebServices from "./pages/services/WebServices";
import LMSCourses from "./pages/services/LMSCourses";
import EbookDesign from "./pages/services/EbookDesign";
import BusinessReports from "./pages/services/BusinessReports";
import GraphicDesign from "./pages/services/GraphicDesign";
import PitchDecks from "./pages/services/PitchDecks";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import VirtualAssistantTimeBack from "./pages/blog/VirtualAssistantTimeBack";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Chatbot />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/administrative-support" element={<AdministrativeSupport />} />
          <Route path="/services/inbox-calendar" element={<InboxCalendar />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/crms-automation" element={<CRMsAutomation />} />
          <Route path="/services/web-services" element={<WebServices />} />
          <Route path="/services/lms-courses" element={<LMSCourses />} />
          <Route path="/services/ebook-design" element={<EbookDesign />} />
          <Route path="/services/business-reports" element={<BusinessReports />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/pitch-decks" element={<PitchDecks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/virtual-assistant-time-back" element={<VirtualAssistantTimeBack />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
