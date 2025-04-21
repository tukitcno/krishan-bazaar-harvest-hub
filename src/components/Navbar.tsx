
import { Button } from "@/components/ui/button";
import { Leaf, Store, BarChart2, Award, Star, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-semibold text-primary">KrishanBazaar</span>
            <span className="ml-1 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">Premium</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link to="/projects" className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2">
              <BarChart2 className="h-4 w-4" />
              Projects
            </Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2">
              <Store className="h-4 w-4" />
              Marketplace
            </Link>
            <Link to="/investment-plans" className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Investment Plans
            </Link>
            <Link to="/impact" className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2">
              <Star className="h-4 w-4" />
              Impact
            </Link>
            <Link to="/success-stories" className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2">
              <Award className="h-4 w-4" />
              Success Stories
            </Link>
            <Button className="bg-primary text-white hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
