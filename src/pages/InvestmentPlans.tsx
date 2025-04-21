
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, DollarSign } from "lucide-react";

const InvestmentPlans = () => {
  const plans = [
    {
      title: "Starter",
      description: "Perfect for new investors",
      minInvestment: "₹10,000",
      duration: "3 months",
      returns: "8-10%",
      features: [
        "Single farm investment",
        "Quarterly updates",
        "No withdrawal fees"
      ]
    },
    {
      title: "Growth",
      description: "For experienced investors",
      minInvestment: "₹50,000",
      duration: "6 months",
      returns: "12-15%",
      features: [
        "Multiple farm investments",
        "Monthly updates",
        "Priority support",
        "Early harvest benefits"
      ]
    },
    {
      title: "Premium",
      description: "High-yield agricultural investments",
      minInvestment: "₹1,00,000",
      duration: "12 months",
      returns: "15-20%",
      features: [
        "Portfolio diversification",
        "Weekly updates",
        "VIP support",
        "Farm visits",
        "Profit sharing options"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Investment Plans</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of agricultural investment plans designed to meet your financial goals while supporting local farmers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`border-t-4 ${index === 1 ? 'border-t-secondary' : 'border-t-primary'}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <Briefcase className={`h-6 w-6 ${index === 1 ? 'text-secondary' : 'text-primary'}`} />
                </div>
                <p className="text-gray-500">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-primary mb-2">{plan.returns}</p>
                  <p className="text-gray-500">Expected Returns</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minimum Investment</span>
                    <span className="font-medium">{plan.minInvestment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{plan.duration}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Features:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <DollarSign className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className={`w-full ${index === 1 ? 'bg-secondary text-primary hover:bg-secondary/90' : ''}`}>
                  Invest Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InvestmentPlans;
