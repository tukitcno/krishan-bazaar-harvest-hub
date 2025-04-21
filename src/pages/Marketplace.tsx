
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Tractor, Wheat } from "lucide-react";

const Marketplace = () => {
  const products = [
    {
      title: "Premium Quality Seeds",
      category: "Seeds",
      price: "₹2,000/kg",
      icon: Wheat
    },
    {
      title: "Farm Equipment Rental",
      category: "Equipment",
      price: "₹1,500/day",
      icon: Tractor
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Farmers Marketplace</h1>
          <p className="text-gray-600">Quality agricultural supplies at competitive prices</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index}>
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
      <Footer />
    </div>
  );
};

export default Marketplace;
