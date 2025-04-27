
import { CheckCircle, Calendar, User, Scissors, IndianRupee } from 'lucide-react';

const BookingSteps = () => {
  const steps = [
    {
      icon: <Scissors className="h-12 w-12 text-salon-primary" />,
      title: "Choose a Service",
      description: "Browse our range of salon services and select the one that suits your needs."
    },
    {
      icon: <User className="h-12 w-12 text-salon-primary" />,
      title: "Select a Stylist",
      description: "Pick your preferred stylist from our team of experienced professionals."
    },
    {
      icon: <Calendar className="h-12 w-12 text-salon-primary" />,
      title: "Pick a Date & Time",
      description: "Choose a convenient appointment slot from our available times."
    },
    {
      icon: <IndianRupee className="h-12 w-12 text-salon-primary" />,
      title: "Confirm & Pay",
      description: "Complete your booking by confirming your details and paying at the salon."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Book your salon appointment in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                {step.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-center text-gray-600">{step.description}</p>
              </div>
              
              {/* Add number indicator */}
              <div className="absolute -top-4 -left-4 bg-salon-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              
              {/* Add connector between steps (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-salon-success text-salon-dark px-6 py-3 rounded-md">
            <CheckCircle size={20} />
            <span className="font-medium">No credit card required. Pay at the salon.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
