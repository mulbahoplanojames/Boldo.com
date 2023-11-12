import React from 'react'
import '/src/Components/Hero/Hero.css'
import Btn1 from '../Buttons/Btn1'
import Btn2 from '../Buttons/Btn2'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className="hero">
      <div className="hero_wripper">
        <div className="hero_content">
            <h1 className="hero_title">Save time by building fast with Boldo Template</h1>
            <p className="hero_description">Securing funds for B2B iPad partnership with a first-mover advantage, emphasizing innovation, successful deployments, and confidentiality through a handshake with the buyer.</p>
            <div className="hero_btns">
                <Link to="/login">
                < Btn2 value={'Buy Template'}/>
                </Link>
               <Link to="/about">
               < Btn1 />
               </Link>
            </div>
        </div>
        <div className="hero_content hero_content2">
            <img src="src/assets/hero-graphics.png" alt="" />
        </div>
       </div>
      </div>
     

    </>
  )
}

export default Hero