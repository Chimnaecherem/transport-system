// import React from 'react';
import { motion } from 'framer-motion';
import  all from '../../assets/all.png'
import  plane from '../../assets/plane.png'
import  deliver from '../../assets/deliver2.png'
import  bike from '../../assets/biker.png'
import globe from '../../assets/globeb.png'
// import { div } from 'framer-motion/client';


const services = [
  {
    title: "Mailroom Services",
    description: "The SwiftHaul Mailroom Service puts you in decisive control of correspondence. Transform mail handling by outsourcing all sorting, tracking, and distribution.",
    color: "bg-[#f7bfc6]", // Light bluish-grey
    image: plane
  },
  {
    title: "Warehousing",
    description: "SwiftHaul Logistics provides secure, strategic warehousing and fulfilment engineered for high growth. Leverage our multi-location hubs and real-time visibility.",
    color: "bg-[#a9ec9c]", // Slightly lighter grey
    image: all
  },
  {
    title: "Last-Mile Delivery",
    description: "Need your package delivered to your doorstep? We will ship it! At SwiftHaul Logistics, we handle the final stretch so you don’t have to stress. Our last‑mile delivery service covers over 18 states across Nigeria, and goes even further, reaching doorsteps in the UK, USA, Canada, and Ghana.",
    color: "bg-[#6cceec]",
    image: bike
  },
{
    title: "GoFaster",
    description: "Enjoy the speed of GoFaster Interstate shipping service. Send items across Lagos, Abuja, Port Harcourt, Kano, Benin, Ilorin, Ibadan, Uyo, Calabar, Owerri, Enugu, Kaduna, Yola, Sokoto and Jos and receive them in 24 - 48 hours. ",
    color: "bg-[#bccef0]",
    image: globe
  },
{
    title: "E-commerce",
    description: "SwiftHaul Logistics drives seamless e-commerce with smart, reliable delivery solutions for every business owner. From Payment on Delivery with no handling fees to API integration, insurance cover, and the SwiftHaulGo Wallet, we simplify shipping. Grow, scale, and satisfy your customers — partner with us to deliver beyond expectations.",
    color: "bg-[#bcf0e0]",
    image: deliver
  }
];

const StackedCards = () => {
  return (
   
    <div>
     {/* for mobile */} 
<div className='md:hidden'>
  <div className="flex flex-col md:flex-col-2 items-center py-2 bg-gray-100">
      <div className="w-full max-w-2xl px-4 space-y-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
</div>

{/* desktop */}
<div className=' hidden md:grid grid-cols-2 relative pl-20 pr-12 bg-[#e1f5ef]'>
  <div className='pr-12 sticky top-0 h-screen '>
    <p className='pt-48 text-5xl font-bold text-red-700'>
      Domestic Shipping
    </p>

    <p className='pt-8 font-bold text-2xl '>
      SwiftHaul Logistics offers fast, affordable, and personalised domestic delivery services across Nigeria, with over 150 experience centres ensuring nationwide coverage. Ship via the SwiftHaul App or visit any  SwiftHaul Logistics Experience Centre nationwide.
    </p>
  </div>
 <div className="flex flex-col  items-center py-2 bg-gray-100">
      <div className="m-12 px-4 space-y-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
</div>

    </div>
  );
};



// 1. Define what a 'service' looks like
interface Service {
  title: string;
  description: string;
  color: string;
  image?: string; // The '?' means the image is optional
}

// 2. Define the Props for the component
interface ServiceCardProps {
  service: Service;
  index: number;
}

// 3. Apply the types to the component
const ServiceCard = ({ service,  }: ServiceCardProps) => (
    <motion.div
      // sticky top-[value] makes them stack.
      // We add index * 20 to slightly offset the stack if desired,
      // or keep it same to hide the one behind.
      className={`sticky top-20 w-full min-h-112.5 rounded-[40px] p-10 shadow-xl border border-gray-200/50 ${service.color} flex flex-col justify-between`}
      // Rest of your code...
    >
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{service.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="mt- rounded-2xl overflow-hidden shadow-inner">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
      </div>
    </motion.div>
    
);

export default StackedCards;