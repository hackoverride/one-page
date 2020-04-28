import React from "react";
import Logo from "./lundlogo.svg";

function Home() {
    return (

        <div id="homeholder">
            <img src={Logo} alt="Logo" width="400" id="mainlogo"></img>
            <h1>Michael W. A. Lund</h1>
        </div>

    );
}

export default Home;