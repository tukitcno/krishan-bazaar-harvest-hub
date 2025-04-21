
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users } from "lucide-react";

const SuccessStories = () => {
  const womenEntrepreneurs = [
    {
      name: "Lakshmi Devi",
      age: 35,
      location: "Tamil Nadu",
      business: "Organic Vegetable Farming",
      story: "A single mother who transformed her 2-acre land into a profitable organic vegetable farm with KrishanBazaar's support. Now employs 5 women from her village.",
      earnings: "₹30,000/month",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Meena Kumari",
      age: 42,
      location: "Rajasthan",
      business: "Goat Farming",
      story: "Started with just 2 goats, Meena has expanded to a herd of 50 with KrishanBazaar's investment plan. She now runs a successful dairy business.",
      earnings: "₹40,000/month",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    }
  ];

  const youngEntrepreneurs = [
    {
      name: "Rahul Singh",
      age: 22,
      location: "Uttar Pradesh",
      business: "Mushroom Cultivation",
      story: "A college dropout who found his passion in mushroom farming. With guidance from KrishanBazaar, he now supplies to restaurants across the region.",
      earnings: "₹25,000/month",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f"
    },
    {
      name: "Arjun Kumar",
      age: 24,
      location: "Karnataka",
      business: "Hydroponic Farming",
      story: "Using technology-driven farming methods, Arjun has revolutionized cultivation in his drought-prone village, inspiring other young people to take up agriculture.",
      earnings: "₹35,000/month",
      image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4"
    }
  ];

  const customerReviews = [
    {
      name: "Vikram Mehta",
      location: "Mumbai",
      rating: 5,
      review: "I've been investing with KrishanBazaar for over a year now. The returns have been consistent and the transparency is commendable."
    },
    {
      name: "Sanjana Reddy",
      location: "Bangalore",
      rating: 4,
      review: "The investment process is straightforward and the customer service is excellent. I appreciate the regular updates about my investments."
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      rating: 5,
      review: "Not just financially rewarding, but also emotionally satisfying to know I'm helping farmers while making my money work for me."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Success Stories</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Discover how KrishanBazaar is transforming lives and creating agricultural entrepreneurs across India
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Women Entrepreneurs</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {womenEntrepreneurs.map((entrepreneur, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <img 
                      src={entrepreneur.image} 
                      alt={entrepreneur.name}
                      className="h-full w-full object-cover"
                    />
                    <div>
                      <CardHeader>
                        <CardTitle>{entrepreneur.name}, {entrepreneur.age}</CardTitle>
                        <CardDescription>{entrepreneur.location} | {entrepreneur.business}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{entrepreneur.story}</p>
                        <div className="bg-primary/10 p-3 rounded-md">
                          <p className="font-semibold text-primary">Monthly Earnings: {entrepreneur.earnings}</p>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
          
          <section className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Young Entrepreneurs</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {youngEntrepreneurs.map((entrepreneur, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <img 
                      src={entrepreneur.image} 
                      alt={entrepreneur.name}
                      className="h-full w-full object-cover"
                    />
                    <div>
                      <CardHeader>
                        <CardTitle>{entrepreneur.name}, {entrepreneur.age}</CardTitle>
                        <CardDescription>{entrepreneur.location} | {entrepreneur.business}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{entrepreneur.story}</p>
                        <div className="bg-primary/10 p-3 rounded-md">
                          <p className="font-semibold text-primary">Monthly Earnings: {entrepreneur.earnings}</p>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
          
          <section>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Customer Reviews</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {customerReviews.map((review, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{review.name}</CardTitle>
                    <CardDescription>{review.location}</CardDescription>
                    <div className="flex mt-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">"{review.review}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Star = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default SuccessStories;
