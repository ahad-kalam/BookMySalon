
import { Stylist } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface StylistCardProps {
  stylist: Stylist;
}

const StylistCard = ({ stylist }: StylistCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="w-full h-64 mb-4 overflow-hidden rounded-full mx-auto max-w-[200px]">
          <img 
            src={stylist.image} 
            alt={stylist.name}
            className="w-full h-full object-cover"
          />
        </div>
        <CardTitle className="text-center">{stylist.name}</CardTitle>
        <CardDescription className="text-center text-salon-primary font-medium">{stylist.role}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4">{stylist.bio}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {stylist.specialties.map((specialty, index) => (
            <Badge key={index} variant="outline" className="bg-salon-accent text-salon-dark">
              {specialty}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild className="w-full bg-salon-primary hover:bg-opacity-90">
          <Link to={`/booking?stylist=${stylist.id}`}>Book with {stylist.name.split(' ')[0]}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StylistCard;
