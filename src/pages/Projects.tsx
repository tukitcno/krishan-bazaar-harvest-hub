
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, DollarSign } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Organic Rice Farming",
      location: "Punjab",
      investment: "₹50,000",
      duration: "6 months",
      returns: "12-15%",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },
    {
      title: "Sustainable Wheat Production",
      location: "Haryana",
      investment: "₹75,000",
      duration: "4 months",
      returns: "10-12%",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Investment Projects</h1>
        <p className="text-gray-600">Support local farmers and earn sustainable returns</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span>Min. Investment: {project.investment}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-primary" />
                  <span>Expected Returns: {project.returns}</span>
                </div>
              </div>
              <Button className="w-full mt-4">
                Invest Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
