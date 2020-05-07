import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Route} from 'react-router-dom';

import NavBar from "./comp/Navbar";
import Bodyi  from "./comp/body";
import Home  from "./comp/home";
import Res  from "./comp/res";
import Uni  from "./comp/uni";
import Sch  from "./comp/school";
import About  from "./comp/about";
import Video from "./comp/video";
import Video1 from "./comp/gdrive";
import Submit from "./comp/submit";
import SectionD from "./comp/sectiond";
import Tma201 from "./comp/tma201";
import Tcs201 from "./comp/tcs201";
import Upnav from "./comp/upnav";
import Elec from "./comp/electrical";
import Ee from "./comp/ee";











function App() {
  return (
    <BrowserRouter>
    <div className="App">

    <NavBar/>
    <Upnav/>
    <Route exact path="/"  component={Home} />
    <Route exact path="/resources"  component={Res} />
    <Route exact path="/uni"  component={Uni} />
    <Route exact path="/school"  component={Sch} />
    <Route exact path="/about"  component={About} />
    <Route exact path="/submit"  component={Submit} />

    <Route exact path="/video/:videoName" component={Video}/>
    <Route exact path="/gdrive/:videoName" component={Video1}/>
    <Route exact path="/sectiond" component={SectionD}/>
    <Route exact path="/tma" component={Tma201}/>
    <Route exact path="/tcs" component={Tcs201}/>
    <Route exact path="/Elec" component={Elec}/>
    <Route exact path="/404" component={Ee}/>










    </div>
    </BrowserRouter>
  );
}

export default App;
