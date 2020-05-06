import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js"

class About extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1>About us</h1>
    <p>We are team of students who got bored after watching web series and desided to build some thing to make our life easy.(but it has done something different)</p>
    <h4> For now This page is our least priority </h4>





    </div>
  );
}
}

export default About;
