
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-muted to-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Next-Gen Agricultural Platform
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              The Future of Farming is Here
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Leveraging cutting-edge technology to revolutionize agriculture. Connect with investors, 
              access AI-powered farming solutions, and grow your agricultural business with KrishanBazaar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-6">
                Start Investing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/10 text-lg px-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Advanced Agricultural Technology"
                className="rounded-lg shadow-lg object-cover h-[500px] w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-sm rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">AI-Powered Farm Management</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 z-10 max-w-[200px] hidden md:block">
              <div className="text-sm font-bold text-primary">+35%</div>
              <div className="text-xs text-gray-500">Average Yield Increase</div>
            </div>

            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 z-10 max-w-[200px] hidden md:block">
              <div className="text-sm font-bold text-primary">1200+</div>
              <div className="text-xs text-gray-500">Farmers Empowered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
