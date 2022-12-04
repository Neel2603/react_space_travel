import React from 'react'
import Footer from '../Components/Footer'
import HeroImage from '../Components/HeroImage'
import Navbar from '../Components/Navbar'
import Pricings from "../Components/Pricing"

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading="Pricing." text="Choose your trip."/>
        <Pricings/>
        <Footer/>
    </div>
  )
}

export default Pricing