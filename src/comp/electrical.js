import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import {Link} from 'react-router-dom';


class Elec extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1> Name </h1>
    <h1> Collection of All  Resouces Only For Section D Students  </h1>
    <div class="collection">

    <a href="https://drive.google.com/drive/folders/1hXYkdW6Vf5kBVxyqD_8w55IUY_wFcsAq" class="collection-item" target="_blank"><span class="badge"></span>Gdrive link</a>
    <Link to="http://vlabs.iitb.ac.in/vlabs-dev/vlab_bootcamp/bootcamp/Sadhya/labs/circuit-parameters-oc-test-iitr/simulation.html" class="collection-item"><span class="badge"></span>Virtual Lab link</Link>
    <Link to="http://vlabs.iitkgp.ernet.in/asnm/exp7/index.html#" class="collection-item"><span class="badge"></span>Three Phase Power Measurement</Link>
    <Link to="https://drive.google.com/file/d/15k7YM-508jyMUGLr-iSQ8SaGiFqpcg8r/view" class="collection-item"><span class="badge"></span>Two -Wattmeter Methord</Link>
      </div>






    </div>
  );
}
}

export default Elec;
