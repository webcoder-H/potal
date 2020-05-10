import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import Res from "./res.js";
import Logo from "./img/logo2.png";

class home extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <marquee scrollamount="10" direction="left" behavior="scroll">
    <div><img src={Logo} align="left" width="200px" height="150px" position="absolute"/></div>
    <div class="font_changer">

     <h3>&nbsp;&nbsp;Educational&nbsp; Potal</h3>
     <h4>That is what you can call this site for now...</h4>
        </div>
     </marquee>

     <Res/>






    </div>
  );
}
}

export default home;
