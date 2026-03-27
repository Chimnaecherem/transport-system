// import React from "react";
// import { div } from 'framer-motion/client'
import all from '../assets/all.png'
import Nav from '../components/header/Nav';
import Fott from '../components/footer/Fott';
import Footer from '../components/footer/Footer';


const About = () => {
  return (
    <div>
   <Nav/>
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About SwiftHaul
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Delivering speed, reliability, and trust across every mile.
        </p>
      </section>

      {/* Company Info */}
      <section className="py-12 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Who We Are
          </h2>
          <p className="mb-4">
            SwiftHaul Logistics is a trusted delivery and logistics company
            committed to providing fast, safe, and reliable transportation
            services. We connect businesses and individuals with efficient
            logistics solutions tailored to their needs.
          </p>
          <p>
            With a focus on customer satisfaction and innovation, we ensure your
            goods reach their destination on time, every time.
          </p>
        </div>

        <div className="bg-orange-500 h-96 rounded-2xl shadow-lg flex items-center justify-center text-white text-xl font-semibold">
          <img src={all} alt="" className='h-92' />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-blue-50 py-12 px-6 md:px-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500">
          <h3 className="text-2xl font-semibold text-blue-900 mb-3">
            Our Mission
          </h3>
          <p>
            To provide reliable, efficient, and affordable logistics solutions
            that empower businesses and individuals to move goods seamlessly.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500">
          <h3 className="text-2xl font-semibold text-blue-900 mb-3">
            Our Vision
          </h3>
          <p>
            To become a leading logistics brand recognized for innovation,
            speed, and exceptional customer service across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-orange-500 mb-2">
              Reliability
            </h4>
            <p>We deliver on time and keep our promises.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-orange-500 mb-2">
              Speed
            </h4>
            <p>Fast delivery without compromising quality.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-orange-500 mb-2">
              Customer Focus
            </h4>
            <p>Your satisfaction is our top priority.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Move with SwiftHaul?
        </h2>
        <p className="mb-6 text-gray-200">
          Let us handle your logistics while you focus on what matters most.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
          Get Started
        </button>
      </section>
    </div>
    <Footer/>
<Fott/>
    </div>
  );
};

export default About;