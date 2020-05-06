import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Route} from 'react-router-dom';

import NavBar from "./comp/Navbar";
import Bodyi  from "./comp/body";
import Home  from "./comp/home";
import res  from "./comp/res";
import Uni  from "./comp/uni";
import Sch  from "./comp/school";
import About  from "./comp/about";





function App() {
  return (
    <BrowserRouter>
    <div className="App">

    <NavBar/>
    <Route exact path="/"  component={Home} />
    <Route path="/resources"  component={res} />
    <Route path="/uni"  component={Uni} />
    <Route path="/school"  component={Sch} />
    <Route path="/about"  component={About} />



    </div>
    </BrowserRouter>
  );
}

export default App;
