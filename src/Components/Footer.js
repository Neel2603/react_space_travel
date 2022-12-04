import React from 'react'
import "./FooterStyles.css";
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaSearchLocation size={20} style={{color : '#ffffff', marginRight:"2rem"}}/>

                <div>
                    <p>Reichenhainer Straße-35.</p>
                    <h4>Chemnitz, Germany</h4>
                </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color : '#ffffff', marginRight:"2rem"}}/>+49 1794165256</h4>

                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color : '#ffffff', marginRight:"2rem"}}/>neeljivani26@gmail.com</h4>

                </div>
                
            </div>
            <div className='right'>
                <h4>About me</h4>
                <p>Hello there, I am Neel Jivani with 2+ years of experience in Web Development. I like to take challanges which help me to enhance my boundry of knowledge.</p>
            </div>
<div className='social'>
    <FaFacebook size={20} style={{color : '#ffffff', marginRight:"1rem"}} />
    <FaLinkedin size={20} style={{color : '#ffffff', marginRight:"1rem"}} />
    <FaTwitter size={20} style={{color : '#ffffff', marginRight:"1rem"}}/>

</div>
        </div>
    </div>
  )
}

export default Footer