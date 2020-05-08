import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import Phy from "./img/phy.png";
import Chem from "./img/Chemistry.png";
import For from "./img/4th.png";
import The3 from "./img/3rd.png";
import {Link} from 'react-router-dom';






class Math extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1>Resources For 12th Students</h1>

     <div class="row">
      <div class="col s12 m5">
            <div class="card">
            <Link to="/video1/Relation_and_Function">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Relation and Function</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Relation_and_Function"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video1/Inverse_Trigonometric_Functions">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Inverse Trigonometric Function</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video1/Inverse_Trigonometric_Functions"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
<div class="row">
 <div class="col s12 m5">
       <div class="card">
        <Link to="/video1/Matrix">
  <div class="card-image">
    <img src={The3}/>
    <span class="card-title">Matrix</span>
  </div>
  <div class="card-content">
    <p>This section contains all the free Resources for 3rd Semester Students.</p>
  </div>
  <div class="card-action">
     <Link to="/video1/Matrix"><a href="#">Get Started</a></Link>
  </div>
  </Link>
</div>
</div>

<div class="col s12 m5">
   <div class="card">
    <Link to="/video1/Determinantss">
<div class="card-image">
<img src={For}/>
<span class="card-title">Determinants</span>
</div>
<div class="card-content">
<p>This section contains all the free Resources for 4th Semester Students.</p>
</div>
<div class="card-action">
  <Link to="/video1/Determinants"><a href="#">Get Started</a></Link>

</div>
</Link>
</div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video1/Continuity_and_Differentiability">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Continuity and Differentiability</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Continuity_and_Differentiability"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video1/Application_of_Derivative">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Application of Derivatives</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video1/Application_of_Derivative"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video1/Integrals">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Integrals</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Integrals"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video1/Applications_of_the_Integrals">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Application of Integrals</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video1/Applications_of_the_Integrals"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video1/Differential_Equations">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Differential Equation</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Differential_Equations"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video1/Vectors">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Vectors</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video1/Vectors"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
            <Link to="/video1/Three_dimensional_Geometry">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">3-Dimensional Geometry</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Three_dimensional_Geometry"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video1/Linear_Programming">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Linear Programming</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video1/Linear_Programming"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
        <div class="card">
        <Link to="/video1/Probability">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Probability</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Probability"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>
   </div>

  
<br/>







    </div>
  );
}
}

export default Math;
