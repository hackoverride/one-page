import React from "react";
import "./about.css";

function About() {
    return (
        <div id="beholder">
            <h1 className="overskrifter">Michael W.A. Lund</h1>
            <p>
                I started developing a passion for IT with MSDOS and Windows 3.11 on a 486 PB,
                continued with HTML (pre css) around the early to mid-90's with creative table uses.
                But... The the time to choose careers I decided to study hospitality management as
                I wanted to travel and explore the world and work closely with customers.
                In 2018 I rediscovered programming with basic Java programming from IT-FAG by NTNU.
                While working fulltime and kids at kindergarden levels- I recieved a 'B' on the exam and was hooked.
                I am now studying System-development with Agile project management in USN.
            </p>
            <p>
                Since 2018 I decided to become the best Full-Stack programmer and developer I can become,
                right now I am reaching out to find a place where I can continue to level up while working in a relevant position.
                I am competent in React, JavaScript manipulation and pick up frameworks/other languages fairly quick.
                In my free-time I do traditional and digital art and run a campaign in the DND universe.
                Let me know If there is anything I can help out with!
                Thanks :)
            </p>
            <a href="http://michaelwalund.com/assets/michaellund.pdf" id="resume"><p className="overskrifter">Download my Resume here</p></a>
        </div>
    );
}

export default About;