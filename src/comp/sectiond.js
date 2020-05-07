import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import {Link} from 'react-router-dom';


class Sectiond extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1> Collection of All  Resouces Only For Section D Students  </h1>
    <div class="collection">
    <Link to="/tma" class="collection-item"><span class="badge"></span>TMA201</Link>
    <Link to="/tcs" class="collection-item"><span class="badge"></span>TCS201</Link>
    <Link to="/video/TPH201%20By%20Dr%20Deepak%20Sir" class="collection-item"><span class="badge"></span>TPH201</Link>
    <Link to="/Elec" class="collection-item"><span class="badge"></span>Electrical Lab</Link>

      </div>
<br/>
<br/>
<br/>
<br/>




    </div>
  );
}
}

export default Sectiond;
