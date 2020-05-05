import React from "react";
import "./prosjekt.css";

function Projects() {
    return (

        <div id="beholder">
            <h1 className="overskrifter">Projects:</h1>
            <ul>
                <a href="https://michaelwalund.com/AR" id="nocss"><li className="overskrifter prosjekttittel">Augmented Reality Tattoo</li></a>
                <p>Tech: AR.js, PHP and MySQL</p>
                <p>School project at the end of year 1. We worked as a team with Scrum. <br />
                Analyzed a business need with AR.js tattoo and created an mvp.</p>
                <p>My role was project owner. I did some backend, frontend and worked with the ar.js solution.<br />
                This was heavily impacted by the Corona/Covid19 pandemic.</p>
            </ul>
        </div>

    );
}

export default Projects;