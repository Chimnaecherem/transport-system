import  { useEffect, useState } from 'react';

const SwiftHaulServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { title: "Domestic Courier", icon: "🚚", desc: "Fast delivery across the state." },
    { title: "International Shipping", icon: "✈️", desc: "Global reach for your goods." },
    { title: "Corporate Logistics", icon: "🏢", desc: "Bulk haulage for businesses." },
    { title: "Last Mile Delivery", icon: "🚲", desc: "Right to your doorstep." }
    
  ];

  return (
    <div className="p-8 bg-gray-50 pb-12">
      <h2 className="text-2xl font-bold mb-8 text-blue-900 ">SwiftHaul Services</h2>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              // Stagger the delay: 100ms, 200ms, 300ms, etc.
              transitionDelay: `${index * 150}ms`
            }}
            className={`bg-white p-6 rounded-xl shadow-md border-b-4 border-blue-800 transform transition-all duration-1000 ease-out  hover:animate-bounce
              ${isVisible
                ? 'translate-y-0 opacity-100' // Final position (stacked)
                : 'translate-y-20 opacity-0'  // Starting position (bottom)
              }`}
          >
            <div className="text-4xl ">{service.icon}</div>
            <h3 className="font-bold text-lg text-gray-800">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwiftHaulServices;