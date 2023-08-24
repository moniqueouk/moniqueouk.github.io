import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import './index.css';
import Home from "./Home";
 
class Main extends Component {
  render() {
    return (
        // define routing region
        <HashRouter>
            <div class="bigText2">
                Monique Ouuk
            </div>
            <div className="content">
                <Route exact path="/" component={Home}/>
            </div>

        </HashRouter>
    );
  }
}
 
export default Main;
