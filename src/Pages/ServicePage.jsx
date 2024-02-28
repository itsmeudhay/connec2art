
import Card from "../components/Card";
import { services } from "../data";

function ServicePage() {
    
  
    return (
      <div id="services" className="container px-4 py-16 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-700 font-secondary">Our Services</h1>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} {...service} />
          ))}
        </div>
      </div>
    );
  }
  
  
  
  export default ServicePage;