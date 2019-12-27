import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import PositionList from "./Components/PositionList.component.js";
import EditPosition from "./Components/EditPosition.component.js";
import CreatePosition from "./Components/CreatePosition.component.js";
import logo from "./logo.svg"; 

class App extends Component {
  render() {   
    return (
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://www.ezesoft.com/" target="_blank">
              <img src={logo} width="30" height="30" alt="www.ezesoft.com/" />
            </a>
            <Link to="/" className="navbar-brand">Position Editor </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">PositionList</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/createPosition" className="nav-link">Create Position</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={PositionList}/>
          <Route path="/editPosition/:id" component={EditPosition}/>
          <Route path="/createPosition" component={CreatePosition}/>
           </div>
        </Router>
    );
  }
}

export default App;