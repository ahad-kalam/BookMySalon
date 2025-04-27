
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import { Button } from '@/components/ui/button';
import { Service } from '@/types';
import { Link } from 'react-router-dom';

interface FeaturedServicesProps {
  services: Service[];
}

const FeaturedServices = ({ services }: FeaturedServicesProps) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const featuredServices = services.slice(0, visibleCount);
  
  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, services.length));
  };
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Popular Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most requested services that keep our clients coming back
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {visibleCount < services.length && (
            <Button onClick={showMore} variant="outline" className="w-full sm:w-auto">
              Show More
            </Button>
          )}
          <Button asChild className="w-full sm:w-auto bg-salon-primary hover:bg-opacity-90">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
