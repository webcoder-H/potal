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







    </div>
  );
}
}

export default home;
