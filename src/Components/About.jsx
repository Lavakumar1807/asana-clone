import React from "react";
import amazon from '../images/amazon.png';
import accenture from '../images/accenture.png';
import dell from "../images/dell.png";
import jj from "../images/jj.png";
import Merck from "../images/Merck.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";

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
        <h1 id="head">See how Asana connects work across different departments</h1>
        <div className="department">
            <div className="buttons">
                <button className="depbtn">Company-wide</button>
                <button className="depbtn">Marketing</button>
                <button className="depbtn">Operations</button>
                <button className="depbtn">IT</button>
                <button className="depbtn">Product</button>
            </div>
        </div>

        <div className="getstartsection">
            <div className="leftpart">
               <h1>Get started easily</h1>
               <p>Tour the platform, read a few deep dives, or kickstart your work management journey with the right template.</p>
            </div>
            <div className="rightpart">
               <div className="go">
                <div className="heading">
                    <h4>Try the Asana demo</h4>
                    <p>See Asana in action</p>
                </div>
                <div><FaArrowCircleRight id="go"/></div>
               </div>
               <div className="go">
                <div className="heading">
                    <h4>Discover resources</h4>
                    <p>Help articles and tutorials</p>
                </div>
                <FaArrowCircleRight id="go"/>
               </div>
               <div className="go">
                <div className="heading">
                    <h4>Start with a template</h4>
                    <p>Get started faster with a template</p>
                </div>
                <FaArrowCircleRight id="go"/>
               </div>
            </div>
        </div>

    </div>
    );
}

export default About;