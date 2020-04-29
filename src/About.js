import React from "react";
import "./about.css";


function About() {
    return (

        <div id="beholder">
            <h1 className="overskrifter">Michael W. A. Lund</h1>
            <h2>Education</h2>
            <table>
                <tr><th>Date</th><th>Where</th><th>What</th><th>Details</th></tr>
                <tr><td>2019 -> 2022</td><td>Universitetet i SørØst Norge</td><td>Informasjons </td><td>Java, System utvikling, Web utvikling, Databaser (SQL), Prosjekt utvikling(Scrum)</td></tr>
                <tr><td>2018</td><td>NTNU (Nettstudier)</td><td>Java programmering</td><td>Karakter: B</td></tr>
                <tr><td>2005 -> 2007</td><td>International College of Management in Sydney, Australia</td><td>Associates Degree in Hospitality Management</td><td>Area of Study: Leadership, Management, Psychology, Accounting, Economy, Statistics and Law.</td></tr>
            </table>

            <h2>Work Experience</h2>
            <table>
                <tr><th>Date</th><th>Where</th><th>What</th><th>Details</th></tr>
                <tr><td>2009 -> 2020</td><td>Farris Bad and Quality Grand Farris</td><td>Receptionist, Front office, Costumer relations, Booking</td><td>Hotel Domain experience from high intenisty costumer relations team.</td></tr>
                <tr><td>2006 -> 2009</td><td>Sheraton on the Park</td><td>Concierge - ShiftLeader</td><td>5* Hotel - Front office and responsible for day to day activities and rostering with 37 employees.</td></tr>
            </table>
            <h2>Projects</h2>
            <table>
                <tr><td>Date</td><td>Name</td><td>Details</td><td>Tech used</td><td>What I learned</td></tr>
                <tr><td>2019 -> 2020</td><td>Augemented Tattoo-viewer</td><td>Created a website using AR.js to build a design viewer for tattoo studioes</td><td>JavaScript, PHP, SQL, MariaDB, AR.js, CSS</td><td>I was the Product Owner and TeamLead - Worked on AR.js and some Design/Graphics and JavaScript solutions.</td></tr>

            </table>
            <h2>Certificates</h2>

        </div>

    );
}

export default About;