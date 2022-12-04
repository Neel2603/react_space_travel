import React from 'react'
import {Link} from "react-router-dom"
import "./VideoStyles.css"

import SpaceVideo from "../assets/space.mp4"

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id="video">
            <source src={SpaceVideo} type="video/mp4"/>

        </video>
            <div className="content">
                <h1>Galaxy. Travel.</h1>
                <p> World's first civilian space travel.</p>

            <div>
                <Link to="training" className='btn'>Training</Link>
                <Link to="contact" className='btn'>Launch</Link>
            </div>

            </div>
    </div>
  )
}

export default Video