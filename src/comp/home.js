import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js"

class home extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
     <h3>Educational Potal</h3>
    <p>Well we guys are still working on it... nothing much yet.. we well add something funcky don't worry</p>






    </div>
  );
}
}

export default home;
