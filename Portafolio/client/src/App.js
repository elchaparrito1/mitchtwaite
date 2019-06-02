import React from "react"
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Support from './pages/Support';
import history from "../src/history";

import './App.css';

const App = () => {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/support" component={Support}/>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
