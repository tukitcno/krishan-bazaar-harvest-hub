
import { Button } from "@/components/ui/button";
import { Leaf, Store, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-semibold text-primary">KrishanBazaar</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/projects" className="text-gray-700 hover:text-primary flex items-center gap-2">
              <BarChart2 className="h-4 w-4" />
              Projects
            </Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-primary flex items-center gap-2">
              <Store className="h-4 w-4" />
              Marketplace
            </Link>
            <Button className="bg-primary text-white hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
