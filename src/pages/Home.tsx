// import React from 'react'
import Footer from '../components/footer/Footer'
import Fott from '../components/footer/Fott'
import Nav from '../components/header/Nav'
import Body from '../components/hero/Body'
import SecondBody from '../components/hero/SecondBody'
import ThirdBody from '../components/hero/ThirdBody'

function Home() {
  return (
    <div className='bg-blue-100'>


      <Nav/>
      <Body/>
      <SecondBody/>
      <ThirdBody/>
      <Footer/>
      <Fott/>
    </div>
  )
}

export default Home