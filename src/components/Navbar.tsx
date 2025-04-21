
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-semibold text-primary">KrishanBazaar</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-primary">Home</a>
            <a href="#" className="text-gray-700 hover:text-primary">Projects</a>
            <a href="#" className="text-gray-700 hover:text-primary">About</a>
            <a href="#" className="text-gray-700 hover:text-primary">Contact</a>
            <Button className="bg-primary text-white hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
