import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js"

class Bodyi extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="App" ref={el => (this.div = el)}>
  








    </div>
  );
}
}

export default Bodyi;
