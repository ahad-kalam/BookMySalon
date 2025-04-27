
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import BookingForm from "@/components/BookingForm";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("service") || undefined;
  const stylistId = searchParams.get("stylist") || undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Book Your Appointment</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Select your preferred service, stylist, and time slot to schedule your appointment.
            </p>
          </div>
          
          <BookingForm initialServiceId={serviceId} initialStylistId={stylistId} />
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
