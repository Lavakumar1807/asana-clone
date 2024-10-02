import React from "react";

const Home = ()=>{
    return(
       <div className="home">
            <center>
            <h1>Where work connects</h1>
            <p>Connect work to goals and automate workflow with AI as your teammate</p>
            <div className="btns">
              <button id="b1">Get started</button>
              <button id="b2">View demo</button>
            </div>
            <div className="video">
            <iframe id="video" frameborder="0" allowfullscreen="" loading="lazy" src="https://fast.wistia.net/embed/iframe/e63ziqkf6i?fitStrategy=cover"></iframe>
            </div>
            </center>
       </div>
    );
}

export default Home;