// import React from 'react';
// import { div } from 'framer-motion/client';
import { ShieldCheck, Globe, Users, Award, Zap } from 'lucide-react';
import Footer from '../footer/Footer';
import Fott from '../footer/Fott';
import Nav from '../header/Nav';
import all from '../../assets/all.png'

const About = () => {
  const stats = [
    { label: "Experience Centres", value: "150+" },
    { label: "Delivery Experts", value: "2,000+" },
    { label: "Cities Covered", value: "36+" },
    { label: "Successful Deliveries", value: "1M+" },
  ];

  const values = [
    {
      icon: <Zap className="text-red-600" size={28} />,
      title: "Speed & Efficiency",
      description: "We optimize every route to ensure your packages reach their destination in record time."
    },
    {
      icon: <ShieldCheck className="text-red-600" size={28} />,
      title: "Security Guaranteed",
      description: "Your cargo is handled with the highest safety standards and real-time tracking."
    },
    {
      icon: <Globe className="text-red-600" size={28} />,
      title: "Nationwide Reach",
      description: "From urban centers to remote regions, we connect every corner of Nigeria and beyond."
    }
  ];

  return (
    <div>
      <Nav/>
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Moving the World, <span className="text-red-500">One Shipment</span> at a Time.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            SwiftHaul Logistics is more than just a delivery company. We are a technology-driven logistics 
            partner dedicated to solving the complex challenges of modern supply chains.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-8 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
              <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To provide seamless, affordable, and reliable logistics solutions through innovative technology 
            and a customer-centric approach. We empower businesses and individuals by bridging the 
            gap between supply and demand.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-red-50 p-2 rounded-lg"><Award className="text-red-600" /></div>
              <div>
                <h4 className="font-bold">Award Winning Service</h4>
                <p className="text-gray-500 text-sm">Recognized for excellence in West African logistics.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-red-50 p-2 rounded-lg"><Users className="text-red-600" /></div>
              <div>
                <h4 className="font-bold">Customer First</h4>
                <p className="text-gray-500 text-sm">Available 24/7 to support your shipping needs.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Placeholder for an Image */}
        <div className="bg-slate-100 h-96 rounded-3xl overflow-hidden relative shadow-2xl">
           <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium italic">
            <img src={all} alt="" className='md: h-full'/>
           </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-24 px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose SwiftHaul?</h2>
          <p className="text-gray-500">The pillars that define our professional standard.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="mb-6 inline-block p-4 bg-red-50 rounded-2xl">{val.icon}</div>
              <h3 className="text-xl font-bold mb-3">{val.title}</h3>
              <p className="text-gray-600 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Ready to ship with us?</h2>
          <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold hover:bg-red-700 transition transform hover:scale-105">
            Download the App
          </button>
        </div>
      </section>
</div>
<Footer/>
<Fott/>
    </div>
  );
};

export default About;