import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
} from "react-router-dom";
import './css/Index.css';
import Home from "./Home";
import FarmPage from "./FarmPage"; // Import the FarmPage component
import SF2019 from "./SF2019"; // Import the SF2019 component
import KNY from "./KNY"; // Import the SF2019 component
import Reyes from "./Reyes";
import Stanford from "./Stanford"

class Main extends Component {
  render() {
    return (
        // define routing region
        <HashRouter>
            <div class="bigText2">
                Monique Ouk
                <div class="nav">
                    <NavLink exact to="/" activeClassName="active-link">Portfolio</NavLink>
                    <NavLink exact to="/farm" activeClassName="active-link">Farm</NavLink>
                    <NavLink exact to="/sf19" activeClassName="active-link">Bay Area</NavLink>
                    <NavLink exact to="/kny" activeClassName="active-link">hills</NavLink>
                    <NavLink exact to="/reyes" activeClassName="active-link">pt. reyes</NavLink>
                    <NavLink exact to="/stanford" activeClassName="active-link">Stanford</NavLink>


                </div>
            </div>
            <div className="content">
                <Route exact path="/" component={Home}/>
            </div>
            <Route path="/farm" component={FarmPage} /> 
            <Route path="/sf19" component={SF2019} />
            <Route path="/kny" component={KNY} /> 
            <Route path="/reyes" component={Reyes} /> 
            <Route path="/stanford" component={Stanford} /> 
        </HashRouter>
    );
  }
}
 
export default Main;
