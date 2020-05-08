import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import Phy from "./img/phy.png";
import Chem from "./img/Chemistry.png";
import For from "./img/4th.png";
import The3 from "./img/3rd.png";
import {Link} from 'react-router-dom';






class Dev extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1>Resources For University Students</h1>

     <div class="row">
       <div class="col s12 m5">
       <Link to="/maths12">
            <div class="card">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Resources For University Students</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free resouces from the youtube as well as other resouces contributed by University Students and Teachers.</p>
       </div>
       <div class="card-action">
         <Link to="/maths12">Get Started</Link>
       </div>
     </div>
     </Link>
   </div>

</div>



<br/>
<br/>
<br/>
<br/>
<br/>







    </div>
  );
}
}

export default Dev;
