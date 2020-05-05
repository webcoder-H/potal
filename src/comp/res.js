import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import Uni from "./img/uni.png";
import Sch from "./img/school.png";


class res extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1>Resources</h1>

     <div class="row">
      <div class="col s12 m5">
            <div class="card">
       <div class="card-image">
         <img src={Uni}/>
         <span class="card-title">Resources For University Students</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free resouces from the youtube as well as other resouces contributed by University Students and Teachers.</p>
       </div>
       <div class="card-action">
         <a href="#">Get Started</a>
       </div>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
   <div class="card-image">
     <img src={Sch}/>
     <span class="card-title">Resources For School Students</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free resouces from the youtube as well as other resouces contributed by other School Students and Teachers.</p>
   </div>
   <div class="card-action">
     <a href="#">Get Started</a>
   </div>
 </div>
</div>
</div>











    </div>
  );
}
}

export default res;
