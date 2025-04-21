
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const Impact = () => {
  const impactStats = [
    { number: "10,000+", description: "Farmers Supported" },
    { number: "₹50 Crore+", description: "Total Investments" },
    { number: "15+", description: "States Covered" },
    { number: "30%", description: "Average Income Increase" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Investor",
      text: "KrishanBazaar has transformed how I think about investments. Not only am I seeing consistent returns, but I'm also contributing to sustainable farming practices."
    },
    {
      name: "Anita Sharma",
      role: "Farmer",
      text: "With the support from KrishanBazaar, I was able to expand my farm and implement modern techniques that have doubled my crop yield this year."
    },
    {
      name: "Priya Patel",
      role: "Community Leader",
      text: "The impact of KrishanBazaar in our village has been transformative. More farmers are able to access fair prices and modern farming knowledge."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Our Global Impact</h1>
            <p className="max-w-2xl mx-auto text-lg">
              KrishanBazaar is transforming agriculture and creating sustainable livelihoods across India
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Reputation</h2>
            <div className="flex justify-center mb-8">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-8 w-8 text-secondary fill-secondary" />
                ))}
              </div>
            </div>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
              KrishanBazaar has been recognized as one of the leading agricultural investment platforms in India, with awards for innovation, social impact, and farmer empowerment.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">What People Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impact;
