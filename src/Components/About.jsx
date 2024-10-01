import React from "react";
import amazon from '../images/amazon.png';
import accenture from '../images/accenture.png';
import dell from "../images/dell.png";
import jj from "../images/jj.png";
import Merck from "../images/Merck.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const About = ()=>{
    return(
    <div className="about">
        <div className="comp">
         <div className="disc">
            <h2>85% of Fortune 100 companies choose Asana</h2>
         </div>
         <div className="companies">
            <img src={amazon}></img>
            <img src={accenture}></img>
            <img src={jj}></img>
            <img src={dell}></img>
            <img src={Merck}></img>
         </div>
        </div>
        <div className="card">
            <div className="c">
                <h1>A smarter way to work</h1>
                <p>Connect teams,tools, and work in a single platform</p>
                <div className="click">
                <p>Product overview</p>
                <BsFillArrowRightCircleFill className="icon"/>
                </div>
                
            </div>
            <div className="c">
                <h1>AI is no longer a tool—it's a teammate</h1>
                <p>Asana AI teammates take work off your hands by automating tasks and orchestrating workflows.onnect teams,tools, and work in a single platform</p>
                <div className="click">
                <p>Meet Asana AI</p>
                <BsFillArrowRightCircleFill className="icon"/>
                </div>
               
            </div>
            <div className="c">
                <h1>Asana for enterprises</h1>
                <p>Discover enterprise-grade features in a platform that can onboard over 200,000 users in a single deployment</p>
                <div className="click">
                <p>Explore Asana for enterprise</p>
                <BsFillArrowRightCircleFill className="icon"/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About;