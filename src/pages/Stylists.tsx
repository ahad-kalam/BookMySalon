
import Layout from "@/components/layout/Layout";
import StylistCard from "@/components/StylistCard";
import { stylists } from "@/data/stylistsData";

const Stylists = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Our Expert Team</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our talented team of professionals dedicated to making you look and feel amazing.
              Each stylist brings their unique expertise and passion to every service.
            </p>
          </div>
          
          {/* Stylists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {stylists.map((stylist) => (
              <StylistCard key={stylist.id} stylist={stylist} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stylists;
