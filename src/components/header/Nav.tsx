// import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
import icon from '../../assets/hamburger.png'

function Nav() {
  return (
    <div className='sticky top-0 z-50 bg-white/70'>
<div className='bg-blue-950 h-6 md:h-9 w-full text-white text-center font-bold'>
<p className='text-sm md:text-2xl'>World's Reliable Tecnology-Driven Logistics Company</p>
</div>


      <div className="flex items-center px-4 py-2">

  {/* LEFT */}
  <div className="flex-1">
    <Link to="/">
<img src={logo} alt="logo" className='h-16 w-40'/>
      </Link> 

  </div>

  {/* CENTER */}
  <div className="hidden md:flex flex-1 justify-center ">
                  <ul className='bg-blue-800 flex space-x-4 w-lg rounded-3xl px-2 '>
            <li className='bg-white m-2 rounded-2xl  transform -skew-x-16 w-full p-3 hover:bg-blue-400 hover:text-white font-bold'><Link to="/about" className='block skew-x-12'>About Us</Link></li>
            <li className='bg-white m-2 rounded-2xl  transform -skew-x-16 w-full p-3 hover:bg-blue-400 hover:text-white font-bold'><Link to="/contact" className='block skew-x-12'>Contact Us</Link></li>
            <li className='bg-white m-2 rounded-2xl  transform -skew-x-16 w-full p-3 hover:bg-blue-400 hover:text-white font-bold'><Link to="/resources" className='block skew-x-12'>Resources</Link></li>
            <li className='bg-white m-2 rounded-2xl  transform -skew-x-16 w-full p-3 hover:bg-blue-400 hover:text-white font-bold'><Link to="/products" className='block skew-x-12'>SupportUs</Link></li>
           </ul>

  </div>

  {/* RIGHT */}
  <div className="flex-1 flex justify-end">
        {/* Desktop right content (optional) */}
    <div className="hidden md:block">
                 <button className='bg-red-600 rounded-2xl text-xl text-white p-2 hover:bg-black hidden md:block'>
                Track Shipment
            </button>

    </div>

    {/* Mobile hamburger */}
      <details className="dropdown md:hidden ">
          <summary className="btn m-1  list-none shadow-none"><img src={icon}alt="" className='m-4 h-6   ' /></summary>
          <ul className="menu dropdown-content  rounded-box z-1 w-52 shadow-sm  bg-blue-600  px-2 ">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/products">Support</Link></li>
          </ul>
        </details>

  </div>

</div>
    </div>
  )
}

export default Nav