import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import Phy from "./img/phy.jpg";
import Chem from "./img/Chemistry.jpg";
import For from "./img/4th.jpg";
import The3 from "./img/3rd.jpg";
import {Link} from 'react-router-dom';






class Science extends React.Component {
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
            <Link to="/video4/Chemical_reaction_and_equation">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Chemical reaction and equation</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video4/Chemical_reaction_and_equation"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video4/Acid_base_and_salt">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Acid base and salt</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video4/Acid_base_and_salt"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
<div class="row">
 <div class="col s12 m5">
       <div class="card">
        <Link to="/video4/Metal_and_Non_metal">
  <div class="card-image">
    <img src={The3}/>
    <span class="card-title">Metal and Non metal</span>
  </div>
  <div class="card-content">
    <p>This section contains all the free Resources for 3rd Semester Students.</p>
  </div>
  <div class="card-action">
     <Link to="/video4/Metal_and_Non_metal"><a href="#">Get Started</a></Link>
  </div>
  </Link>
</div>
</div>

<div class="col s12 m5">
   <div class="card">
    <Link to="/video4/Carbon_and_its_compounds">
<div class="card-image">
<img src={For}/>
<span class="card-title">Carbon and its compounds</span>
</div>
<div class="card-content">
<p>This section contains all the free Resources for 4th Semester Students.</p>
</div>
<div class="card-action">
  <Link to="/video4/Carbon_and_its_compounds"><a href="#">Get Started</a></Link>

</div>
</Link>
</div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video4/Periodic_classification_of_elements">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Periodic classification of elements</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video4/Periodic_classification_of_elements"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video4/Life_processes">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Life processes</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video4/Life_processes"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video4/Control_and_Coordination">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Control and Coordination</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video4/Control_and_Coordination"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video4/How_do_Organism_Produce">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title"> How_do_Organism_Produce</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video4/How do Organism Produce"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video4/Heredity_and_Evolution">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Heredity and Evolution</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video4/Heredity_and_Evolution"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video4/Light_Reflection_and_Refraction">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Light Reflection and Refraction</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video4/Light_Reflection_and_Refraction"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
            <Link to="/video4/The_human_eye_and_the_colourful_world">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">The_human eye and the colourful world</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video4/The_human_eye_and_the_colourful_world"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video4/Electricity">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Electricity</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video4/Electricity"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
        <div class="card">
        <Link to="/video4/Magnetic_effect_of_electric_current">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Magnetic effect of electric current</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video4/Magnetic_effect_of_electric_current"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>
   </div>
   <div class="row">
    <div class="col s12 m5">
          <div class="card">
           <Link to="/video4/Sources_of_Energy">
     <div class="card-image">
       <img src={Phy}/>
       <span class="card-title">Sources of Energy</span>
     </div>
     <div class="card-content">
       <p>This section contains all the free Resources for Physcis Group Students.</p>
     </div>
     <div class="card-action">
        <Link to="/video4/Sources_of_Energy"><a href="#">Get Started</a></Link>
     </div>
     </Link>
   </div>
 </div>

<div class="col s12 m5">
      <div class="card">
       <Link to="/video4/Our_enviroment">
 <div class="card-image">
   <img src={Chem}/>
   <span class="card-title">Our enviroment</span>
 </div>
 <div class="card-content">
 <p>This section contains all the free Resources for Chemistry Group Students.</p>
 </div>
 <div class="card-action">
    <Link to="/video4/Our_enviroment"><a href="#">Get Started</a></Link>
 </div>
 </Link>
</div>
</div>

</div>
<div class="row">
 <div class="col s12 m5">
       <div class="card">
        <Link to="/video4/Management_of_Natural_Resources">
  <div class="card-image">
    <img src={Phy}/>
    <span class="card-title">Management of Natural Resources</span>
  </div>
  <div class="card-content">
    <p>This section contains all the free Resources for Physcis Group Students.</p>
  </div>
  <div class="card-action">
     <Link to="/video4/Management_of_Natural_Resources"><a href="#">Get Started</a></Link>
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

export default Science;
