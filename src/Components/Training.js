import React from 'react'
import "./TrainingStyles.css"
import Pod from "../assets/pod.jpg"
import Moon from "../assets/moon.jpg"
import { Link } from 'react-router-dom'
function Training() {
  return (
    <div className="training">
        <div className='left'>
            <h1>Training</h1>
            <p>Training will prepare you to go in to the space and how to survive there.</p>
            <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="image-stack top">
                    <img src={Moon} className="img" alt=''/>
                </div>
                <div className="image-stack bottom">
                    <img src={Pod} className="img" alt=''/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Training