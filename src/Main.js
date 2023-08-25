import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
} from "react-router-dom";
import './index.css';
import Home from "./Home";
import FarmPage from "./FarmPage"; // Import the FarmPage component

 
class Main extends Component {
  render() {
    return (
        // define routing region
        <HashRouter>
            <div class="bigText2">
                Monique Ouk
            </div>
            <div className="content">
                <Route exact path="/" component={Home}/>
            </div>
            <Route path="/farm" component={FarmPage} /> {/* Add the FarmPage route */}
        </HashRouter>
    );
  }
}
 
export default Main;
