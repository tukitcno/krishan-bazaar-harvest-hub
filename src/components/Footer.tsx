
import { Link } from "react-router-dom";
import { Phone, MapPin, Star, Link as LinkIcon } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Investment Plans", url: "/investment-plans" },
    { name: "Marketplace", url: "/marketplace" },
    { name: "Projects", url: "/projects" },
    { name: "Impact", url: "/impact" },
    { name: "Success Stories", url: "/success-stories" },
  ];

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">KrishanBazaar</h3>
            <p className="mb-6">Empowering Farmers, Growing Communities</p>
            <div className="flex items-center gap-2 mb-3">
              <Phone className="h-4 w-4" />
              <span>+1234568</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Adabor, Dhaka</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.url} className="flex items-center gap-2 hover:underline">
                    <LinkIcon className="h-4 w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <p className="mb-3">Follow us on social media for updates and news</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary">Facebook</a>
              <a href="#" className="hover:text-secondary">Twitter</a>
              <a href="#" className="hover:text-secondary">Instagram</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-3">Subscribe to get updates on new investment opportunities</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 rounded-l text-gray-800 w-full"
              />
              <button className="bg-secondary text-primary px-4 py-2 rounded-r font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} KrishanBazaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
