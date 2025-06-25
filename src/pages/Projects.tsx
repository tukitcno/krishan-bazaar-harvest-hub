
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, DollarSign, Leaf, Droplets } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const Projects = () => {
  const projects = [
    {
      title: "Regenerative Wheat Farming",
      location: "Iowa, USA",
      investment: "$25,000",
      duration: "12 months",
      returns: "15-18%",
      impact: "Carbon sequestration: 50 tons CO2",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sustainability: "Soil restoration project"
    },
    {
      title: "Organic Quinoa Cultivation",
      location: "Peru",
      investment: "$15,000",
      duration: "8 months",
      returns: "12-15%",
      impact: "Water saved: 30%",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sustainability: "Fair trade certified"
    },
    {
      title: "Precision Rice Farming",
      location: "Vietnam",
      investment: "$40,000",
      duration: "6 months",
      returns: "14-16%",
      impact: "Pesticide reduction: 60%",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sustainability: "Smart irrigation system"
    },
    {
      title: "Vertical Farm Innovation",
      location: "Netherlands",
      investment: "$60,000",
      duration: "18 months",
      returns: "20-25%",
      impact: "Land use: 95% less",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sustainability: "Year-round production"
    },
    {
      title: "Drought-Resistant Corn",
      location: "Kenya",
      investment: "$20,000",
      duration: "10 months",
      returns: "13-17%",
      impact: "Climate resilience boost",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sustainability: "Smallholder support"
    },
    {
      title: "Hydroponic Vegetables",
      location: "Singapore",
      investment: "$35,000",
      duration: "9 months",
      returns: "16-19%",
      impact: "Zero soil degradation",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sustainability: "Urban agriculture"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Sustainable Agriculture Projects</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Invest in innovative farming projects that advance sustainable agriculture while generating positive returns. 
            Each project is carefully vetted for environmental impact and ethical practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <OptimizedImage 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                  <Leaf className="h-3 w-3 inline mr-1" />
                  Sustainable
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <span>{project.location}</span>
                  <span className="text-primary">• {project.sustainability}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      Min. Investment
                    </span>
                    <span className="font-semibold">{project.investment}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center gap-1">
                      <BarChart2 className="h-4 w-4" />
                      Expected Returns
                    </span>
                    <span className="font-semibold text-primary">{project.returns}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                </div>
                
                <div className="bg-muted p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-1 text-sm">
                    <Droplets className="h-4 w-4 text-primary" />
                    <span className="font-medium">Impact:</span>
                    <span className="text-gray-700">{project.impact}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 transition-colors">
                  Invest Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Why Invest in Sustainable Agriculture?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$2.3T</div>
                <div className="text-gray-600">Global sustainable agriculture market by 2030</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-gray-600">Higher yields with sustainable practices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-gray-600">Reduced environmental impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
