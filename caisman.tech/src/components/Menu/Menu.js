import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  import About from "../About/About";

class Menu extends Component {
    render() { 
        return (<Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </nav>
              
              <Switch>
                <Route path= "/about" component ={About}>
                  </Route>
              </Switch>
          </div>
          </Router>  );
    }
}
 
export default Menu;