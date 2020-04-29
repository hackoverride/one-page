import React from "react";
import Logo from "./lundlogo.svg";
import "./home.css";

function Home() {
    return (
        <div id="homeholder">
            <img src={Logo} alt="Logo" width="400" id="mainlogo"></img>
            <div className="tittelholder"><h1 className="overskrifter">Michael W. A. Lund</h1><span>Student | Programmerer | Pappa | DM</span></div>
        </div>
    );
}

export default Home;