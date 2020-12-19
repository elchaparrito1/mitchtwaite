import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import Support from './pages/Support';
import ScrollToTop from './components/ScrollToTopWrapper';
import history from '../src/history';

import './App.css';

const App = () => {
    return (
      <Router history={history}>
        <div>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/resume" component={Resume}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/support" component={Support}/>
            </Switch>
          </ScrollToTop>
        </div>
      </Router>
    );
}

export default App;
