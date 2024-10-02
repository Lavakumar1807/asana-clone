import React from "react";
import asana from "../images/asana1.png";
import appstore from "../images/appstore.png";
import googleplay from "../images/googleplay.png";
import { CiGlobe } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = ()=>{
    return(
        <center>
        <div className="footer">
            <div className="title">
                 <div className="ttl">
                   <p>The only platform that can support your company at any scale</p>
                 </div>
                 <div className="footerbtn">
                    <button>Get started</button>
                 </div>
            </div>
            <div className="info">
                <p>1. Accurate as of December 2023, includes free and paid users.</p>
                <p>2. See the <u><a>2023 Gartner® Magic Quadrant™ for Collaborative Work Management (CWM)</a></u>. GARTNER is a registered trademark and service mark of Gartner, Inc. and/or its affiliates in the U.S. and internationally, MAGIC QUADRANT and PEER INSIGHTS are registered trademarks and The GARTNER PEER INSIGHTS CUSTOMERS’ CHOICE badge is a trademark and service mark of Gartner, Inc. and/or its affiliates and is used herein with permission. All rights reserved.</p>
                <p>3. See <u><a>The Forrester Wave™: Collaborative Work Management Tools, Q4 2022 report</a></u>. The Forrester Wave: Collaborative Work Management Tools, Q4 2022. The Forrester Wave is copyrighted by Forrester Research, Inc. Forrester and Forrester Wave are trademarks of Forrester Research, Inc. The Forrester Wave is a graphical representation of Forrester’s call on a market and is plotted using a detailed spreadsheet with exposed scores, weightings, and comments. Forrester does not endorse any vendor, product, or service depicted in the Forrester Wave. Information is based on best available resources. Opinions reflect judgment at the time and are subject to change.</p>
                <p>4. IDC MarketScape: Worldwide Collaborative Work Management 2023–2024 Vendor Assessment — Uniting Teams, Data, and AI for Flexible Work, Doc #US49434923, December 2023</p>
            </div>
            <div className="relatedlinks">
                  <div className="logo">
                      <img src={asana}></img>
                  </div>
                  <div className="lks">
                     <div id="asana">
                        <ul>
                            <li className="name">Asana</li>
                            <li><a>Home</a></li>
                            <li><a>Product</a></li>
                            <li><a>What's New</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Starter</a></li>
                            <li><a>Advanced</a></li>
                            <li><a>Enterprise</a></li>
                            <li><a>Custom Success</a></li>
                            <li><a>Asna Templates</a></li>
                            <li><a>Time & Security</a></li>
                            <li><a>Status</a></li>
                        </ul>
                     </div>
                     <div id="aboutus">
                        <ul>
                        <li className="name">About Us</li>
                            <li><a>Company</a></li>
                            <li><a>Leadership</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Diversity</a></li>
                            <li><a>Careers</a></li>
                            <li><a>Press</a></li>
                            <li><a>Wavelength</a></li>
                            <li><a>Inside Asana</a></li>
                            <li><a>Investor Relations</a></li>
                            <li><a>Sitemap</a></li>
                            <li><a>Modern Slavery Transparency Statement</a></li>
                        </ul>
                      </div>
                     <div id="workflow">
                     <ul>
                        <li className="name">Workflow Solutions</li>
                            <li><a>Project Management</a></li>
                            <li><a>Goal Management</a></li>
                            <li><a>Agile Management</a></li>
                            <li><a>Task Management</a></li>
                            <li><a>Increasre Productivity</a></li>
                            <li><a>Work Management</a></li>
                            <li><a>Project Planning</a></li>
                            <li><a>To DO Lists</a></li>
                            <li><a>See All Uses</a></li>
                            <li><a>See All Teams</a></li>
                        </ul>
                     </div>
                     <div id="resources">
                     <ul>
                        <li className="name">Resources</li>
                            <li><a>Help Cnter</a></li>
                            <li><a>Forum</a></li>
                            <li><a>Support</a></li>
                            <li><a>App Directory</a></li>
                            <li><a>Developers & API</a></li>
                            <li><a>Partners</a></li>
                            <li><a>Asana Community</a></li>
                            <li><a>Events</a></li>
                            <li><a>Asana for Nonprofits</a></li>
                            <li><a>Asana for Education</a></li>
                            <li><a>Accessibility</a></li>
                        </ul>
                     </div>
                     <div id="learn">
                     <ul>
                        <li className="name">Learn</li>
                            <li><a>11 Leadership Styles</a></li>
                            <li><a>110 Icebreaker Questions</a></li>
                            <li><a>Executive Summary Tips</a></li>
                            <li><a>Imposter Syndrome Tips</a></li>
                            <li><a>Prevent Team Burnout</a></li>
                            <li><a>SWOT AnalysisTips</a></li>
                            <li><a>What are OKRs?</a></li>
                            <li><a>What are SMART Goals?</a></li>
                            <li><a>What is Scope Creep?</a></li>
                            <li><a>See All resources</a></li>
                        </ul>
                     </div>
                  </div>
                  
            </div>
            <div className="media">
                 <div className="item">
                    <p>&copy; 2024 Asana, Inc.</p>
                 </div>
                 <div className="item">
                    <CiGlobe id="lang"/>
                    <a className="open">English</a>
                 </div>
                 <div className="item">
                    <p>
                    <a title="Terms" className="open">Terms</a> & 
                    <a title="Privacy" className="open"> Privacy</a>
                    </p>
                 </div>
                 <div className="item">
                    <div id="mediaicons">
                    <FaSquareXTwitter className="ic" title="Twitter"/>
                    <FaLinkedin className="ic" title="LinkedIn"/>
                    <FaInstagramSquare className="ic" title="Instagram"/>
                    <FaFacebook className="ic" title="Facebook"/>
                    <FaYoutubeSquare className="ic"title="Youtube"/>
                    </div>
                 </div>
                 <div className="item">
                    <img src={appstore} id="i1" title="Download the Asana Apple app"></img>
                    <img src={googleplay} id="i2" title="Download the Asana Android app"></img>
                 </div>
            </div>
        </div>
        </center>
    );
}

export default Footer;