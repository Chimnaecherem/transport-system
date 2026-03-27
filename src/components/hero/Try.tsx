// import React from 'react'
import fleet from '../../assets/all.png' 

function Body() {
  return (
    <div>

<div className="grid grid-cols-1 p-4 md:grid-cols-2 items-center mt-8">
  
  {/* Left Column (Text) */}
  <div className="z-20 relative"> 
    <h1 className="text-6xl font-bold">Delivering the Future...</h1>
    {/* Higher z-index ensures text stays on TOP of the overlapping image */}
  </div>

  {/* Right Column (Image) */}
  <div className="z-10 mt-8 lg:-ml-48"> 
    {/* Negative margin pulls the image LEFT, into the text area */}
    <img src={fleet} className="min-w-[10%] h-auto" />
  </div>

</div>


    </div>
  )
}

export default Body