
import { Service } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { IndianRupee } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="w-full h-48 mb-4 overflow-hidden rounded-md bg-muted">
          <img 
            src={service.image} 
            alt={service.name}
            className="w-full h-full object-cover"
          />
        </div>
        <CardTitle>{service.name}</CardTitle>
        <CardDescription className="flex items-center justify-between mt-2">
          <span className="price-tag text-lg flex items-center">
            <IndianRupee className="h-4 w-4 mr-1" />
            {service.price}
          </span>
          <span className="text-sm text-gray-500">{service.duration} min</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{service.description}</p>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild className="w-full bg-salon-primary hover:bg-opacity-90">
          <Link to={`/booking?service=${service.id}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
