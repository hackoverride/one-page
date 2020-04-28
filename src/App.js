import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";
import Logo from "./lundlogo.svg";


function App() {
    return (

        <Router>
            <div>
                <nav>
                    <img id="logo" src={Logo} alt="" width="100" />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;