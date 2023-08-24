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
                Monique Ouk
                <div style={{fontSize: '15px', letterSpacing: '1px', textTransform: 'lowercase'}}>
                    <NavLink exact to="/" activeClassName="navi">portfolio</NavLink>
                    &nbsp; 
                    <NavLink to="/" activeClassName="navi">about</NavLink>
                </div>
            </div>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/" component={Home}/>
                <Route path="/" component={Home}/>
            </div>

        </HashRouter>
    );
  }
}
 
export default Main;
