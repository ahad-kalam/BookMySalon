
const testimonials = [
  {
    id: 1,
    content: "BookMySalon transformed my look completely! The stylist understood exactly what I wanted and exceeded my expectations. The booking process was so simple too.",
    author: "Anita Desai",
    role: "Regular Client",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    content: "I've been to many salons, but the service here is unparalleled. The online booking system saved me so much time, and the staff are all incredibly talented.",
    author: "Rahul Mehta",
    role: "First-time Customer",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    id: 3,
    content: "I love that I can book my appointments any time without having to call. The salon provides exceptional service with great attention to detail.",
    author: "Priya Singh",
    role: "Monthly Subscriber",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied clients have to say
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col"
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-salon-primary" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v12H0V14.4C0 9.6 2.3 5.5 7 2l1.5 2C5.2 6 4 8 4 12h6zm20 0v12H20V14.4c0-4.8 2.3-8.9 7-12l1.5 2c-3.3 2-4.5 4-4.5 8h6z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">{testimonial.content}</p>
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full mr-4" 
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
