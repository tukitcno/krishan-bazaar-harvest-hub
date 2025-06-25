
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, DollarSign, Leaf, TrendingUp, Shield, Award } from "lucide-react";

const InvestmentPlans = () => {
  const plans = [
    {
      title: "Sustainable Starter",
      description: "Perfect for new ethical investors",
      minInvestment: "$5,000",
      duration: "6 months",
      returns: "8-12%",
      sustainability: "Carbon offset: 2 tons CO2",
      features: [
        "Single sustainable farm investment",
        "Quarterly impact reports",
        "ESG compliance guarantee",
        "Carbon credit certificates"
      ]
    },
    {
      title: "Regenerative Growth",
      description: "For committed sustainable investors",
      minInvestment: "$25,000",
      duration: "12 months",
      returns: "12-16%",
      sustainability: "Soil restoration: 10 acres",
      features: [
        "Diversified regenerative portfolio",
        "Monthly sustainability metrics",
        "Farm visit opportunities",
        "Impact measurement dashboard",
        "Priority project access"
      ],
      popular: true
    },
    {
      title: "Climate Champion",
      description: "Maximum impact investment tier",
      minInvestment: "$100,000",
      duration: "24 months",
      returns: "15-20%",
      sustainability: "Water saved: 1M gallons",
      features: [
        "Climate-smart agriculture focus",
        "Weekly impact updates",
        "Direct farmer partnerships",
        "Research project participation",
        "Advisory board access",
        "Custom impact strategies"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Ethical Investment Plans</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Invest in sustainable agriculture projects that generate positive returns while creating 
            measurable environmental and social impact. Every dollar invested works toward a more 
            sustainable food system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-t-4 ${plan.popular ? 'border-t-secondary scale-105' : 'border-t-primary'} hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-primary px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <Briefcase className={`h-6 w-6 ${plan.popular ? 'text-secondary' : 'text-primary'}`} />
                </div>
                <p className="text-gray-500">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-primary mb-1">{plan.returns}</p>
                  <p className="text-gray-500">Expected Annual Returns</p>
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
                
                <div className="bg-primary/5 p-4 rounded-lg mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="h-4 w-4 text-primary" />
                    <span className="font-medium text-primary">Sustainability Impact</span>
                  </div>
                  <p className="text-sm text-gray-700">{plan.sustainability}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Plan Features:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <TrendingUp className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className={`w-full ${plan.popular ? 'bg-secondary text-primary hover:bg-secondary/90' : 'bg-primary hover:bg-primary/90'}`}>
                  Start Investing
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Ethical Crop Science?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our investment approach combines financial returns with measurable positive impact on 
              the environment and farming communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
              <p className="text-gray-600">Diversified portfolio with scientific risk assessment</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
              <p className="text-gray-600">Every investment contributes to climate solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Reporting</h3>
              <p className="text-gray-600">Regular updates on financial and impact metrics</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InvestmentPlans;
