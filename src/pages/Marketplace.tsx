
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Tractor, Wheat, Droplet, Sun, Cpu, Leaf, Microscope, Beaker, Shield } from "lucide-react";
import MobileAppBanner from "@/components/MobileAppBanner";

const Marketplace = () => {
  const products = [
    {
      title: "Organic Seed Varieties",
      category: "Seeds & Genetics",
      price: "$45/kg",
      description: "Climate-resilient, high-yield organic seeds with 98% germination rate",
      icon: Wheat,
      sustainability: "Non-GMO, heirloom varieties"
    },
    {
      title: "Precision Farming Drones",
      category: "Technology",
      price: "$2,499",
      description: "AI-powered crop monitoring with multispectral imaging and automated spraying",
      icon: Sun,
      sustainability: "Reduces pesticide use by 40%"
    },
    {
      title: "Smart Irrigation Controllers",
      category: "Water Management",
      price: "$399",
      description: "IoT-enabled irrigation system with soil moisture sensors and weather integration",
      icon: Droplet,
      sustainability: "Saves up to 30% water usage"
    },
    {
      title: "Biochar Soil Amendment",
      category: "Soil Health",
      price: "$28/bag",
      description: "Carbon-negative soil enhancer that improves fertility and water retention",
      icon: Leaf,
      sustainability: "Sequesters carbon permanently"
    },
    {
      title: "Beneficial Insect Colonies",
      category: "Pest Management",
      price: "$85/colony",
      description: "Natural predators for sustainable pest control without chemicals",
      icon: Shield,
      sustainability: "Chemical-free pest control"
    },
    {
      title: "Soil Health Testing Kit",
      category: "Analytics",
      price: "$149",
      description: "Complete soil analysis including nutrients, pH, organic matter, and microbiome",
      icon: Microscope,
      sustainability: "Optimize inputs, reduce waste"
    },
    {
      title: "Mycorrhizal Inoculants",
      category: "Biological",
      price: "$65/package",
      description: "Beneficial fungi that enhance nutrient uptake and plant resilience",
      icon: Beaker,
      sustainability: "Reduces fertilizer needs by 25%"
    },
    {
      title: "Solar Panel Systems",
      category: "Energy",
      price: "$3,200/kW",
      description: "Agricultural-grade solar systems designed for farm operations",
      icon: Sun,
      sustainability: "100% renewable energy"
    },
    {
      title: "Cover Crop Seeds",
      category: "Regenerative",
      price: "$12/lb",
      description: "Nitrogen-fixing cover crops for soil health and carbon sequestration",
      icon: Leaf,
      sustainability: "Builds soil carbon"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Sustainable Agriculture Marketplace</h1>
          <p className="text-gray-600 text-lg mb-6">
            Discover cutting-edge sustainable farming products and technologies that improve yields 
            while protecting the environment.
          </p>
          
          <div className="bg-muted rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Verified Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Partner Suppliers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                </div>
                <div className="bg-secondary/20 text-primary px-3 py-1 rounded-full text-xs font-medium w-fit">
                  {product.sustainability}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Leaf className="h-4 w-4 text-primary" />
                    <span>Eco-friendly</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Our Marketplace?</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Every product in our marketplace is vetted for sustainability, effectiveness, and ethical sourcing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <Shield className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">Quality Verified</h3>
                <p className="text-sm text-gray-600">All products tested and certified</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <Leaf className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">Sustainable</h3>
                <p className="text-sm text-gray-600">Environment-friendly practices</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <Cpu className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">Innovative</h3>
                <p className="text-sm text-gray-600">Latest agricultural technology</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                  <Tractor className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">Farm-Tested</h3>
                <p className="text-sm text-gray-600">Proven results in real conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileAppBanner />
      <Footer />
    </div>
  );
};

export default Marketplace;
