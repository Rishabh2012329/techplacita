import React from 'react';
import Header from './Layout/Header'
import NavBar from './Layout/NavBar'
import Home from './Components/Home'
import Footer from './Layout/Footer'
import Contact from './Components/Contact'
import Aboutus from './Components/Aboutus'
import Homec from './Components/Homec'
import config from 'react-reveal/globals';
import './Components/style.css'
import Nav2 from './Layout/Nav2'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

config({ ssrFadeout: true });
function App() {
  return (
  	<Router>
    	<div className="App" >
        <Nav2/>
	     	<NavBar/>
	     	<Header/>
	 <Switch>
          <Route path="/techplacita/aboutus">
            <Aboutus />
          </Route>
          <Route path="/techplacita/Contact">
            <Contact />
          </Route>
          <Route path="/techplacita">
            <Homec />
          </Route>
        </Switch>

	    </div>
    </Router>
  );
}

export default App;
