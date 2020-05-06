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
import Video from "./comp/video";
import Video1 from "./comp/gdrive";







function App() {
  return (
    <BrowserRouter>
    <div className="App">

    <NavBar/>
    <Route exact path="/"  component={Home} />
    <Route exact path="/resources"  component={res} />
    <Route exact path="/uni"  component={Uni} />
    <Route exact path="/school"  component={Sch} />
    <Route exact path="/about"  component={About} />
    <Route exact path="/video/:videoName" component={Video}/>
    <Route exact path="/gdrive/:videoName" component={Video1}/>





    </div>
    </BrowserRouter>
  );
}

export default App;
