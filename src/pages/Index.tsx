
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MobileAppBanner from "@/components/MobileAppBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-muted flex flex-col">
      <Navbar />
      <Hero />
      <MobileAppBanner />
      <Footer />
    </div>
  );
};

export default Index;
