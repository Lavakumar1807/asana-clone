import React from "react";
import { CiGlobe } from "react-icons/ci";
import logo from '../images/logo.png';
import { IoMenu } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = ()=>{
    return(
        <div className="navbar">
            <div className="left">
            <div className="logo">
                <img src={logo} id="asanalogo"></img>
                asana
            </div>
            <div className="links">
                <li>
                    <a>Features</a>
                    <a>Solutions</a>
                    <a>Resources</a>
                    <a>Enterprise</a>
                    <a>Pricing</a>
                </li>
            </div>
            </div>
            <div className="right">
             <div className="start">
                <CiGlobe id="globe" title="Choose your preferred language"/>
                <a>Contact sales</a>
                <a>Log In</a>
             </div>
             <div className="btn">
                <button id="startbtn" title="Get started">Get started</button>
             </div> 
             <IoMenu id="menuicon"/>
            </div>
        </div>
    );
}

export default Navbar;