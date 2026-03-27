// import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import logo from '../../assets/logo.png'

const Footer = () => {
  const footerLinks = [
    {
      title: "Products",
      links: ["SwiftHaul App", "GoFaster", "Last-Mile Delivery", "E-commerce", "Haulage", "Mailroom Services", "Warehousing", "Alpha Shop", "Express Drop-Off"]
    },
    {
      title: "International Shipping",
      links: ["Export", "Import", "Canada to Nigeria & Ghana", "China to Nigeria & Ghana", "Ghana to Nigeria", "UK to Nigeria & Ghana", "USA to Nigeria & Ghana"]
    },
    {
      title: "Company",
      links: ["About Us", "Locations", "Mobile Experience Centre", "Corporate", "Careers"]
    },
    {
      title: "Resources",
      links: ["Shipping Rate Calculator", "FAQs", "Blog", "Privacy Policy", "Terms & Conditions", "Partnership", "Developers", "IMS Policy"]
    }
  ];

  return (
    <footer className="hidden md:block bg-blue-950 text-white py-16 px-8 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
       
        {/* Left Section: Branding & Contact */}
        <div className="lg:col-span-1 space-y-6">
          <img src={logo} className='flex justify-items-center h-28  pb-5' alt="" />
          <p className="text-sm text-gray-300 leading-relaxed">
            Delivering fast, reliable shipping and logistics solutions you can count on.
          </p>
         
          {/* Social Icons */}
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin, Twitter].map((Icon, i) => (
              <div key={i} className="bg-white/10 p-2 rounded-full hover:bg-white/20 cursor-pointer transition">
                <Icon size={18} className="text-white" />
              </div>
            ))}
          </div>

          {/* Contact Details */}
          <div className="space-y-4 pt-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gray-400" />
              <span>info@SwiftHaullogistics.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gray-400" />
              <span>+234 8085117768 <span className="text-xs text-gray-500">[Nigeria Contact Centre]</span></span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-gray-400 mt-1 shrink-0" />
              <span className="leading-tight">
                  SwiftHaul Logistics Technologies Limited, Ifite school gate, Awka, Anambra State.
              Opposite Nnamdi Azikiwe university, Awka Anambra State.
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Link Columns */}
        {footerLinks.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="font-bold text-lg mb-2">{section.title}</h3>
            <ul className="space-y-3">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
        © 2026 SwiftHaul Logistics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;