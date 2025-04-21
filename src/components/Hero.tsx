
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Empowering Farmers, Growing Communities
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Connect with investors, access modern farming solutions, and grow your agricultural business with KrishanBazaar.
            </p>
            <div className="flex gap-4">
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
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
              alt="Farming"
              className="rounded-lg shadow-lg object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
