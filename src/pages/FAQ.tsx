import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQComponent from "@/components/FAQ";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <FAQComponent />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
