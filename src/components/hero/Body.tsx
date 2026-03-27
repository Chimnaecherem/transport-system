import  { useState, useEffect } from 'react';
import all from '../../assets/all.png'
import bus from '../../assets/buses.png'
import globe from '../../assets/globe.png'
import deliver from '../../assets/deliver.png'
// import { section } from 'framer-motion/client';


const slides = [
  {
    id: 1,
    title: "Delivering the Future of Global Logistics with",
    accent: "Speed and Precision",
    description: "Powering seamless delivery solutions for individuals, businesses and corporate organisations across borders.",
    buttonText: "Sign Up with SwiftHaul",
    image: globe,
  },
  {
    id: 2,
    title: "Warehouse Management & Global",
    accent: "Inventory Control",
    description: "Secure, tech-driven warehousing solutions designed to scale with your business demands.",
    buttonText: "Learn More",
    image: all,
  },
  {
    id: 3,
    title: "Fast Track Your E-commerce",
    accent: "Growth & Scale",
    description: "Direct integration with your online store for automated global shipping and fulfillment.",
    buttonText: "Get Started",
    image: bus,
  },
  {
    id: 4,
    title: "Eco-Friendly Last Mile",
    accent: "Green Deliveries",
    description: "Reducing our carbon footprint through optimized routing and sustainable transport methods.",
    buttonText: "Our Mission",
    image: deliver,
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play timer (changes every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className=''>
    <div className="relative w-full h-screen min-h-    image: deliver,
 md:h-162.5 lg:h-200 bg-white overflow-hidden flex flex-col">
     
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-32 ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* 1. TEXT LAYER (Top on mobile, Left on desktop) */}
          <div className="w-full mt-24 md:mt-0 z-30 text-center md:text-left">
            <div className={`transform transition-all duration-1000 delay-300 ${
              index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                {slide.title} <span className="text-[#C0242D] block">{slide.accent}</span>
              </p>
              <p className="mt-6 text-gray-600 text-base md:text-lg lg:text-xl max-w-md mx-auto md:mx-0">
                {slide.description}
              </p>
              <div className="mt-10">
                <button className="bg-[#C0242D] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>

          {/* 2. IMAGE LAYER (Bottom on mobile, Overlapping on desktop) */}
          <div className={`relative  mt-auto md:absolute md:right-0 md:bottom-0 w-full md:w-[60%] lg:w-[55%] z-20 flex justify-center md:justify-end items-end transition-all duration-1000 ease-out ${
            index === current ? "translate-x-0 opacity-100 scale-100" : "translate-x-12 opacity-0 scale-95"
          }`}>
            <img
              src={slide.image}
              alt={slide.accent}
              className="w-full max-h-87.5 md:max-h-125 lg:max-h-none h-auto object-contain object-bottom"
            />
          </div>
        </div>
      ))}

      {/* 3. SLIDE INDICATORS (Now with 4 dots) */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${
              i === current ? "bg-[#C0242D] w-12" : "bg-gray-300 w-2.5 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div> */}
</div>
    
    
    {/* last section */}
{/* <div className='grid grid-cols-2'> */}
{/* left side */}
  {/* <div>
    <p>Domestic Shipping</p>
    <p>SwiftHaul Logistics offers fast, affordable, and personalised domestic delivery services across Nigeria.With over 150 experience centers ensuring nationwide coverage. ship via the SwiftHaul Logistic App or visit any SwiftHaul experience center national wide.</p>
  </div> */}
  {/* right side */}
  {/* <div>
   
  </div>
</div> */}

    </section>
  );
};

export default HeroSlider;