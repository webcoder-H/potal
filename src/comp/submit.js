import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js"

class Submit extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h3>Submit a resource</h3>

  <div class="row">
    <form class="col s12" netlify>
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="text" type="text" class="validate"/>
          <label for="text">Link for resource</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
    <button type="submit" class="waves-effect waves-light btn-small"> Submit </button>
    </form>
  </div>
    </div>
  );
}
}

export default Submit;
