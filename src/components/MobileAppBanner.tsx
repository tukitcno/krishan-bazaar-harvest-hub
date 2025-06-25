
import { Button } from "@/components/ui/button";
import { AppleIcon, PlayIcon } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const MobileAppBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Experience KrishanBazaar on Mobile</h2>
            <p className="text-gray-700 mb-6">
              Access our premium services on the go with our native mobile apps, 
              featuring an intuitive UI and exclusive mobile-only features.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-black text-white hover:bg-black/90 flex items-center gap-2">
                <AppleIcon className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-sm font-medium">App Store</span>
                </div>
              </Button>
              <Button className="bg-black text-white hover:bg-black/90 flex items-center gap-2">
                <PlayIcon className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Get it on</span>
                  <span className="text-sm font-medium">Google Play</span>
                </div>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="flex justify-center">
              <div className="relative z-10 mx-2">
                <OptimizedImage 
                  src="https://cdn.dribbble.com/users/1998175/screenshots/15459384/media/48bfd64313c75b68fcb51a0f7799d123.png" 
                  alt="KrishanBazaar Mobile App on iPhone" 
                  className="h-[500px] rounded-2xl shadow-xl object-cover" 
                />
              </div>
              <div className="relative mx-2 mt-8">
                <OptimizedImage 
                  src="https://cdn.dribbble.com/users/1998175/screenshots/15459384/media/66509fa6c2f36d3f890f2d73314b1599.png" 
                  alt="KrishanBazaar Mobile App on Android" 
                  className="h-[500px] rounded-2xl shadow-xl object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppBanner;
