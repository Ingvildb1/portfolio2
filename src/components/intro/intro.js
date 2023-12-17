import React from "react";
import './intro.css';
import bg from './../../assets/i-b4.jpg – redigert.png'
//import { Link } from "react-scroll";

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm Ingvild</span>
                <p className="introPara">I am a web designer</p>
                
            </div>
            <img src={bg} alt="profile" className="bg"></img>
        </section>
        
    )
}

export default Intro; 