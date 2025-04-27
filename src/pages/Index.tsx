
import Layout from "@/components/layout/Layout";
import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import Testimonials from "@/components/Testimonials";
import StepByStepBooking from "@/components/StepByStepBooking";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "@/data/servicesData";
import { stylists } from "@/data/stylistsData";

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      <FeaturedServices services={services.slice(0, 6)} />
      
      <section className="py-16 bg-salon-primary bg-opacity-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Expert Stylists</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented team of professionals is dedicated to making you look and feel your best
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stylists.slice(0, 3).map((stylist) => (
              <div key={stylist.id} className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src={stylist.image} 
                    alt={stylist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{stylist.name}</h3>
                <p className="text-salon-primary font-medium">{stylist.role}</p>
                <p className="mt-2 text-gray-600 line-clamp-2">{stylist.bio}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-salon-primary hover:bg-opacity-90">
              <Link to="/stylists">View All Stylists</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <StepByStepBooking />
      
      <Testimonials />
      
      <section className="py-16 bg-salon-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your appointment now and experience the best salon services in town.
          </p>
          <Button asChild className="bg-white text-salon-primary hover:bg-gray-100 text-lg px-8 py-6">
            <Link to="/booking">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
