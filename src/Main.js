import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import './index.css';
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        // define routing region
        <HashRouter>
            <div class="bigText2">
                Monique Ouk
                <div style={{fontSize: '15px', letterSpacing: '1px', textTransform: 'lowercase'}}>
                    <NavLink exact to="/" activeClassName="navi">portfolio</NavLink>
                    &nbsp; 
                    <NavLink to="/monique" activeClassName="navi">about</NavLink>
                    &nbsp; 
                    <NavLink to="mailto:oukm@stanford.edu" activeClassName="navi">contact</NavLink>
                </div>
            </div>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/monique" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
            </div>

        </HashRouter>
    );
  }
}
 
export default Main;