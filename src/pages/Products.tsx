// import React from "react";

import Footer from "../components/footer/Footer";
import Fott from "../components/footer/Fott";
import Nav from "../components/header/Nav";

const Support = () => {
  return (
    <div>
      <Nav/>
    <div className="bg-gray-50 text-gray-800 ">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Support Center
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          We're here to help you with your deliveries, tracking, and any issues you may have.
        </p>
      </section>

      {/* Support Options */}
      <section className="py-12 px-6 md:px-16 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
          <div className="text-orange-500 text-3xl mb-3">📦</div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Track Shipment
          </h3>
          <p className="mb-4">
            Enter your tracking number to get real-time updates on your delivery.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full">
            Track Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
          <div className="text-orange-500 text-3xl mb-3">💬</div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Live Chat
          </h3>
          <p className="mb-4">
            Chat with our support team for instant help and quick solutions.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full">
            Start Chat
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
          <div className="text-orange-500 text-3xl mb-3">📞</div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Call Support
          </h3>
          <p className="mb-4">
            Speak directly with our team for urgent delivery concerns.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full">
            Call Now
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-blue-50 py-12 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Send Us a Message
        </h2>

        <form className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition">
            Submit Request
          </button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-blue-900">
              How can I track my shipment?
            </h4>
            <p className="text-sm mt-2">
              Use the tracking number provided at checkout in the tracking section above.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-blue-900">
              What should I do if my delivery is delayed?
            </h4>
            <p className="text-sm mt-2">
              Contact our support team via chat or phone for immediate assistance.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold text-blue-900">
              Do you offer nationwide delivery?
            </h4>
            <p className="text-sm mt-2">
              Yes, we deliver across all major cities and regions.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-blue-950 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Immediate Help?
        </h2>
        <p className="mb-6 text-gray-200">
          Our team is always ready to assist you anytime, anywhere.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold">
          Contact Support
        </button>
      </section>
            </div>

<Footer/>
<Fott/>
    </div>
  );
};

export default Support;