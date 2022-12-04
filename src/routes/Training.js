import React from 'react'
import Footer from '../Components/Footer'
import HeroImage from '../Components/HeroImage'
import Navbar from '../Components/Navbar'
import Trainings from "../Components/Training"
const Training = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading="training" text="Pre-Flight & In-Flight Training."/>
        <Trainings/>
        <Footer/>

    </div>
  )
}

export default Training