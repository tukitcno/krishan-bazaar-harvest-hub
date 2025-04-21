
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Tractor, Wheat, Droplet, Sun, Cpu, Leaf, Plant } from "lucide-react";
import MobileAppBanner from "@/components/MobileAppBanner";

const Marketplace = () => {
  const products = [
    {
      title: "Premium Quality Seeds",
      category: "Seeds",
      price: "₹2,000/kg",
      description: "High-yield certified organic seeds with 95% germination rate",
      icon: Wheat
    },
    {
      title: "Farm Equipment Rental",
      category: "Equipment",
      price: "₹1,500/day",
      description: "Modern farming equipment for efficient field operations",
      icon: Tractor
    },
    {
      title: "Smart Irrigation System",
      category: "Technology",
      price: "$299",
      description: "AI-powered water management system that reduces water usage by 40%",
      icon: Droplet
    },
    {
      title: "Solar Powered Drones",
      category: "Technology",
      price: "$1,599",
      description: "Monitor crop health and automate field inspection with advanced imaging",
      icon: Sun
    },
    {
      title: "Soil Health Sensors",
      category: "Technology",
      price: "৳12,500",
      description: "Real-time soil nutrient and moisture monitoring with smartphone alerts",
      icon: Plant
    },
    {
      title: "AI Crop Analysis Platform",
      category: "Software",
      price: "$49/month",
      description: "Advanced analytics and yield prediction with machine learning",
      icon: Cpu
    },
    {
      title: "Organic Fertilizers",
      category: "Supplies",
      price: "৳1,800/bag",
      description: "Premium bio-enriched fertilizers for maximum yield with minimal environmental impact",
      icon: Leaf
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Farmers Marketplace</h1>
          <p className="text-gray-600">Quality agricultural supplies at competitive prices</p>
          
          <div className="mt-4 mb-6 bg-muted rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Accepted Currencies</h3>
              <div className="flex gap-3 mt-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">USD ($)</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">BDT (৳)</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p>Currency conversion available at checkout</p>
              <p>Secure international payment processing</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <product.icon className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <p className="text-2xl font-semibold text-primary mb-4">{product.price}</p>
                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <MobileAppBanner />
      <Footer />
    </div>
  );
};

export default Marketplace;
