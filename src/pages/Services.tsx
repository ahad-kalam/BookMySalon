
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ServiceCard";
import { services, categories } from "@/data/servicesData";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of salon services to help you look and feel your best.
              Browse our services and book your appointment today.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <Button
              onClick={() => setSelectedCategory("All")}
              variant={selectedCategory === "All" ? "default" : "outline"}
              className={selectedCategory === "All" ? "bg-salon-primary" : ""}
            >
              All
            </Button>
            
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-salon-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600">No services found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
