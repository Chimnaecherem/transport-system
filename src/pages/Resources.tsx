import Footer from "../components/footer/Fott";
import Nav from "../components/header/Nav";


const Resources: React.FC = () => {
  return (
    <div>
<Nav/>
   
        <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Have questions or need help? Reach out to SwiftHaul anytime.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 px-6 md:px-16 grid md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-900">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Our team is always available to assist you with your logistics needs.
          </p>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
              <span className="text-orange-500 text-2xl">📍</span>
              <div>
                <h4 className="font-semibold text-blue-900">Address</h4>
                <p className="text-sm text-gray-600">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
              <span className="text-orange-500 text-2xl">📞</span>
              <div>
                <h4 className="font-semibold text-blue-900">Phone</h4>
                <p className="text-sm text-gray-600">
                  +234 800 000 0000
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
              <span className="text-orange-500 text-2xl">✉️</span>
              <div>
                <h4 className="font-semibold text-blue-900">Email</h4>
                <p className="text-sm text-gray-600">
                  support@swifthaul.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="bg-white p-8 rounded-2xl shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            Send a Message
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Map Section (Optional Placeholder) */}
      <section className="px-6 md:px-16 pb-12">
        <div className="bg-blue-200 h-64 rounded-2xl flex items-center justify-center text-blue-900 font-semibold">
          Map Location Placeholder
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Move Your Goods Today
        </h2>
        <p className="mb-6 text-gray-200">
          SwiftHaul is ready to deliver fast and reliably.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold">
          Get Started
        </button>
      </section>
    </div>

    
<Footer/>
     </div>
  );
};

export default Resources;
