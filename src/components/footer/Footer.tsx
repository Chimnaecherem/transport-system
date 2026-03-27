// import React from 'react';
import {
  Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin
} from 'lucide-react';
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white p-8 md:hidden font-sans">
        <div>
            <img src={logo} className='flex justify-items-center h-28 pl-20 pb-5' alt="" />
        </div>
      <div className="max-row-container max-w-6xl mx-auto">
       
        {/* Social Icons Row */}
        <div className="flex flex-wrap gap-4 mb-10">
          {[Facebook, Instagram, "TikTok", Youtube, Linkedin, "X", "Threads"].map((Icon, index) => (
            <div key={index} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-gray-800 cursor-pointer transition-colors">
              {typeof Icon === 'string' ? (
                <span className="font-bold text-lg">{Icon[0]}</span>
              ) : (
                <Icon size={20} />
              )}
            </div>
          ))}
        </div>

        {/* Contact Information Section */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-4">
            <Mail className="text-gray-400" size={24} />
            <a href="mailto:info@giglogistics.com" className="hover:text-gray-300">necheremstar10@gmail.com</a>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-gray-400 mt-1" size={24} />
            <div>
              <p className="text-lg">+234 8085117768</p>
              <p className="text-gray-500 text-sm">[Nigeria Contact Centre]</p>
            </div>
          </div>

          <div className="flex items-start gap-4 max-w-md">
            <MapPin className="text-gray-400 mt-1 shrink-0" size={24} />
            <p className="leading-relaxed text-gray-300">
              SwiftHaul Logistics Technologies Limited, Ifite school gate, Awka, Anambra State.
              Opposite Nnamdi Azikiwe university, Awka anambra State.
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Products Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">SwiftHaul App</li>
              <li className="hover:text-white cursor-pointer transition-colors">GoFaster</li>
              <li className="hover:text-white cursor-pointer transition-colors">Last-Mile Delivery</li>
              <li className="hover:text-white cursor-pointer transition-colors">E-commerce</li>
              <li className="hover:text-white cursor-pointer transition-colors">Haulage</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mailroom Services</li>
            </ul>

            <ul>
                <p className='text-3xl font-bold pt-5'>Company</p>
                <li className='pt-3 text-gray-400'>About Us</li>
                <li className='pt-3 text-gray-400'>Locations</li>
                <li className='pt-3 text-gray-400'>Mobile Experience Centre</li>
                <li className='pt-3 text-gray-400'>Corporate Careers</li>
            </ul>
          </div>

          {/* International Shipping Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">International Shipping</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Export</li>
              <li className="hover:text-white cursor-pointer transition-colors">Import</li>
              <li className="hover:text-white cursor-pointer transition-colors">Canada to Nigeria & Ghana</li>
              <li className="hover:text-white cursor-pointer transition-colors">China to Nigeria & Ghana</li>
            </ul>

<ul>
                <p className='text-3xl font-bold pt-5'>Resources</p>
                <li className='pt-3 text-gray-400'>Shipping Rate Calculato</li>
                <li className='pt-3 text-gray-400'>Privacy Policy</li>
                <li className='pt-3 text-gray-400'>Terms & Conditions</li>
                <li className='pt-3 text-gray-400'>Partnership</li>
            </ul>

          </div>
        </div>
      </div>

      <hr  className='mt-8 bg-white'/>
      <div>
        © 2026 SwiftHaul. All rihts reserved.
      </div>


    </footer>
  );
};

export default Footer;
