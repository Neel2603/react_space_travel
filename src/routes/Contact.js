import React from 'react'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import HeroImage from '../Components/HeroImage'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading="Contact." text="Contact Space Travel." />
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact