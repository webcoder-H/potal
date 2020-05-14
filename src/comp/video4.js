import React,{useState} from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';


function Science10(props) {

  const videoName = props.match.params.videoName
  const courses ={
    Chemical_reaction_and_equation:[
    {
        title: "Disscussed important question for exam",
        vid: "tiINMqiIVzg"
    },
    {
        title: "Disscussed important question for exam 2",
        vid: "jKX94Nxabfw"
    },
    {
        title: "Disscussed important question for exam",
        vid: "9YXuvhDlueA"
    },
    {
        title: "Elements,compounds, chsracteristics of chemical reaction",
        vid: "MT_wNlIAf6Y"
    },
    {
        title: "Chemical equation,balancing of chemical equation,r",
        vid: "MuTcpg8cLPE"
    },
    {
        title: "Numericals",
        vid: "YWDuysc0zBk"
    },
    {
        title: "Types of chemical reaction,",
        vid: "-NCIwGLylkE"
    },
    {
        title: "Numericals",
        vid: "J-8nhRGc5Bc"
    },
    {
        title: "Endothermic and exothermic reaction,oxidation,reduction,redox reaction,randicity,corrision,",
        vid: "qTnw7BPuhwg"
    },
    {
        title: "Chemical_reaction_and_equation",
        vid: "43G7DnxgJCI"
    },
],
 Acid_base_and_salt: [
    {
        title: "INTRO",
        vid: "jn9f7PYtFgE"
    },
    {
        title: "Part 1 ",
        vid: "KwSmlODnUd0"
    },
    {
        title: "Part 2",
        vid: "gWhXcNnt8Uk"
    },
    {
        title: "Disscussed important question for exam",
        vid: "ePaQM6RU_Ro"
    },
    {
        title: "Whole chapter",
        vid: "Fy_bx00kyJY"
    },
    {
        title: "Bleaching powder,Baking powder ",
        vid: "7Fno3MKPzRI"
    },
],
Metal_and_Non_metal: [
    {
        title: "Vedantu Part 1",
        vid: "amtGW3CPxUA"
    },
    {
        title: "Vedantu Part 2",
        vid: "4jHhIxtqncw"
    },
    {
        title: "INTRO",
        vid: "NKw-2A92TiA"
    },
    {
        title: "Corrision and it's prevention",
        vid: "XCahzvfyIk8"
    },
    {
        title: "Whole chapter",
        vid: "d7RVnlA2XZY"
    },
    {
        title: "Whole chapter",
        vid: "EogTiiatyng"
    },
],
Carbon_and_its_compounds: [
    {
        title: "Disscussed important question for exam Part 1",
        vid: "R-2tVsg3dgQ"
    },
    {
        title: "Disscussed important question for exam Part 2",
        vid: "WpWRyIGgwsU"
    },
    {
        title: "Intro by dronestudy",
        vid: "2x1-hMnEg3o"
    },
    {
        title: " Intro by dronestudy 2",
        vid: "KYlGcmmMA5A"
    },
    {
        title: " Diamond-type of carbon",
        vid: "ObHu2XlhP5Q"
    },
    {
        title: "Chapter by edumantra",
        vid: "m5ffJpyg_PM"
    },
    {
        title: "Vedantu Part 1",
        vid: "V4SV_DDVokk"
    },
    {
        title: "Vedantu Part 2",
        vid: "NCSywzXvyBA"
    },
    {
        title: "Soap and Detergent",
        vid: "7UqxzL-68UU"
    },


],
Periodic_classification_of_elements: [
    {
        title: "Disscussed important question for exam",
        vid: "sHMMojZsoT0"
    },
    {
        title: "Newland's Law of Octave :",
        vid: "qzY83AE3e6w"
    },
    {
        title: "Mendeleev's Periodic Table",
        vid: "dR5flLWrRVk"
    },
    {
        title: "Chapter by dronestudy",
        vid: "wJ2O4vPCvdE"
    },
    {
        title: "Whole chapter by edumantra",
        vid: "8T2rUIVD9_c"
    },
    {
        title: "Whole chapter by physics wala ",
        vid: "94DXmFeY4rY"
    },
],
Life_processes:[
    {
        title: " Transportation",
        vid: "NS_l127FoFA"
    },
    {
        title: "Respiration - Types",
        vid: "4czWkj28liI"
    },
    {
        title: "Respiration ",
        vid: "Bxj7SXl5AI0"
    },
    {
        title: " Digestive System ",
        vid: "cstDmwqC7rc"
    },
    {
        title: "Nutrition",
        vid: "fzUWYyd0As8"
    },
    {
        title: "Transportation - Part 1",
        vid: "BKlnztkZamM"
    },
    {
        title: "Transportation - 2",
        vid: "C55wqFThrb8"
    },
    {
        title: "Transportation - 3 ",
        vid: "jnr2qMuOBuc"
    },
    {
        title: "Excretion",
        vid: "hj1hKD6XbAk"
    },
    {
        title: "Whole chapter",
        vid: "fjGQv5rMOPc"
    },
    {
        title: "Whole chapter",
        vid: "vCkuD3gXhow"
    },
    {
        title: "Nutrients",
        vid: "HyFuW9jVo9w"
    },
    {
        title: "Excretory System",
        vid: "M2VesZH8IX8"
    },
    {
        title: "Heart",
        vid: "06PJ5YuOcbs"
    },
    {
        title: "Digestive System",
        vid: "jBytzO0SXO0"
    },
    {
        title: "Respiration In Human",
        vid: "z0qblim73QE"
    },
    {
        title: "Blood Circulation",
        vid: "SMt-hc7F_gg"
    },
    {
        title: "Discuss important point and question",
        vid: "Vc-rUg7be58"
    },
    {
        title: "Discuss important point and question",
        vid: "C4Vor8PvSvA"
    },
],
Control_and_Coordination: [
    {
        title: "Control and Coordination In Plants",
        vid: "5Q9LgvQs5Nw"
    },
    {
        title: "Control and Coordination In Plants",
        vid: "yDg_REc7AKA"
    },
    {
        title: "Nervous system and Reflex action",
        vid: "5Xlb4lY-LhA"
    },
    {
        title: "Discuss important point and question",
        vid: "1dDsC7AVSv0"
    },
    {
        title: "Whole chapter",
        vid: "LU7lmgHm8Tg"
    },
    {
        title: "Revision of chapter",
        vid: "t19tTl34WmQ"
    },
    {
        title: "Nervous system",
        vid: "RmZcGXpUqRs"
    },
    {
        title: "HORMONES IN ANIMALS",
        vid: "EN_K6UGQfcI"
    },
    {
        title: "Contol and coordination",
        vid: "PXUg1VByG4E"
    },
    {
        title: "Contol and coordination",
        vid: "51Eq4Y42q3E"
    },
    {
        title: "Contol and coordination",
        vid: "CyFASVLmbwA"
    },
    {
        title: "Movement In Plants",
        vid: "gOUzJLjVjCQ"
    },
    {
        title: "Neuron Structure and Function",
        vid: "Saqbd4RTpKM"
    },
],
 How_do_Organism_Produce: [
    {
        title: "Overview of chapter and important question ",
        vid: "N2d15dRnssg"
    },
    {
        title: "Discuss important point and question",
        vid: "tYvcpnXRobQ"
    },
    {
        title: "Reproduction and Types of Reproduction",
        vid: "kapHnEw7EgM"
    },
    {
        title: "Spore Formation",
        vid: "7iTJU6bvg2M"
    },
    {
        title: "Vegetative Propagation",
        vid: "TWk9nsH38gU"
    },
    {
        title: "Reproduction and Types of Reproduction",
        vid: "-3qEjzzGF0I"
    },
    {
        title: "Regeneration ",
        vid: "Zeuc5sIey_8"
    },
    {
        title: "Asexual Reproduction",
        vid: "3TlwW0U4rks"
    },
    {
        title: " Fragmentation",
        vid: "BZYtiqLz6cg"
    },
    {
        title: " Sexual Reproduction in Flowering Plants",
        vid: "HP21hIVJhWI"
    },
    {
        title: " Chapter by Vedantu 1",
        vid: "z4DKys8Mj8k"
    },
    {
        title: "Chapter by Vedantu 2",
        vid: "cBJd4G_LIng"
    },
    {
        title: "Chapter by Vedantu 3",
        vid: "_YyvR4EpO_Q"
    },
    {
        title: "Introduction",
        vid: "MeWdILS9gaE"
    },
    {
        title: "Types of asexual reproduction",
        vid: "uoEo3jE7FTw"
    },
    {
        title: "SEXUAL REPRODUCTION, its significance, Sexual Reproduction in Flowering Plants",
        vid: "aNIJ0as79gE"
    },
    {
        title: "Reproduction in human beings,Reproductive Health",
        vid: "AFjc9q3qf_U"
    },

],
Heredity_and_Evolution: [
    {
        title: "Mendel's Contributions",
        vid: "eQgv-1UaOHU"
    },
    {
        title: "Darwin's Theory of Evolution",
        vid: "Ka8_ZBxayR8"
    },
    {
        title: "Mendel's Contributions",
        vid: "Fk7rVIQeEuI"
    },
    {
        title: "Darwin's Theory",
        vid: "_s8einyGMjQ"
    },
    {
        title: "Discuss important point and question",
        vid: "cDE2caHI4ns"
    },
    {
        title: "Discuss important point and question",
        vid: "ChW0cNiFRT0"
    },
    {
        title: "FULL CHAPTER",
        vid: "U-g8Y5GvmxU"
    },
    {
        title: "Discuss important point and question",
        vid: "Eq3WLj1UdzM"
    },
    {
        title: "Evolution",
        vid: "_QtMWPcLF7U"
    },
    {
        title: "Heredity",
        vid: "XI0MSBuVJMQ"
    },
    {
        title: "Evolution,Darwin's theory",
        vid: "nt9qlehMOQs"
    },
    {
        title: "Speciation, fossile",
        vid: "yyFlXdH5zLk"
    },
    {
        title: "Evolution by stage,human evolution",
        vid: "I57O5OgJHlQ"
    },
],
Our_enviroment: [
    {
        title: "FULL CHAPTER",
        vid: "MIAFFdWP7qw"
    },
    {
        title: "Full explanation",
        vid: "5Rg1fz6V_kA"
    },
    {
        title: "Ecosystem,it's component, food chain ",
        vid: "cI1HHb88iUo"
    },
    {
        title: "Garbage manegmant,ozone layer",
        vid: "3rsxZIiegq4"
    },
    {
        title: "Food Chain, Food Web and Trophic Levels",
        vid: "XrsfDM8r7jk"
    },
    {
        title: "Ozone Layer",
        vid: "vrXweCjRi9w"
    },
    {
        title: "Ecosystom,food chain,food web,flow of energy",
        vid: "5vY4g6c3ENo"
    },
],
Management_of_Natural_Resources: [
    {
        title: "Full explanation by bhai ki pdhai",
        vid: "u5gRFc3mScQ"
    },
    {
        title: "Full explanation by edumantra ",
        vid: "TyW7UCN7ZdU"
    },
    {
        title: " Full explanation by dronestudy",
        vid: "ABTGr0zVeoA"
    },
    {
        title: "Forest and Important question",
        vid: "Kq9MnrloVj0"
    },
    {
        title: "Water and Important question",
        vid: "QF5DA2IIstA"
    },
    {
        title: "Discuss Important point and question",
        vid: "P6me6KF6cg8"
    },
],
Light_Reflection_and_Refraction: [
    {
        title: "Discussed important question for exam",
        vid: "tL6DSJ4dsd8"
    },
    {
        title: "Discussed important question for exam",
        vid: "G2Yzcv91O5Q"
    },
    {
        title: "Law of reflection,types of curve mirror and terms related to mirrors and images",
        vid: "ZX-hmnCtC0U"
    },
    {
        title: "Formation of image from curve mirror at various distance",
        vid: "MnYPD7_DKeI"
    },
    {
        title: "Refraction ,law of refraction,refrective index,numerical",
        vid: "-wJJaWByRSI"
    },
    {
        title: "Lens,type of lens, terms related to lens",
        vid: "kDwUt_IeQO8"
    },
    {
        title: "Formation of image at various distance through lens",
        vid: "GrM80N8lA2E"
    },
    {
        title: "Mirror formula and magnification",
        vid: "CXr0uBlCI4Q"
    },
    {
        title: "Reflection(part-1)",
        vid: "HuyEnOZp7XY"
    },
    {
        title: "Refraction(part-1)",
        vid: "c4CqYGpceGY"
    },
    {
        title: "Refraction(part-2)",
        vid: "WTtr7Vh_zD4"
    },
],
The_human_eye_and_the_colourful_world: [
    {
        title: "Explaination of Structure of eye",
        vid: "Qt0s4kJnOww"
    },
    {
        title: "Eye defects,its causes",
        vid: "bRqo-IOPCOg"
    },
    {
        title: "Dispersion of light throught glass prism",
        vid: "oSCY7fVFk_Y"
    },
    {
        title: "Atmospheric refraction(twinkling of star,etc)",
        vid: "NLcT8RB77uk"
    },
    {
        title: "Scattering of light(why color of sky is blue?,color of the sun at sunrise and sunset)",
        vid: "QSEWjS_781w"
    },
    {
        title: "Intro by dronestudy",
        vid: "NYv87Hpriwc"
    },
    {
        title: "Eye",
        vid: "KvGGGpBGFmA"
    },
],
Electricity: [
    {
        title: "Electric Current conductors, and insulators of chapter Electricity",
        vid: "caJMuENuFTM"
    },
    {
        title: "Electric current",
        vid: "CXr0uBlCI4Q"
    },
    {
        title: "Cell",
        vid: "or1e1ZZGcZI"
    },
    {
        title: "Potential difference",
        vid: "mDptr2wgD-I"
    },
    {
        title: "Intro by bhai ki pdhai",
        vid: "cwQ042D0q-A"
    },
    {
        title: "Potential difference",
        vid: "slEqJAZRu2Q"
    },
    {
        title: "Symbol of various appliances used in an electrical circuit",
        vid: "JVjOFWZfj60"
    },
    {
        title: "Ohms law,Conductor,Insulator",
        vid: "5rE2I9AHRfA"
    },
    {
        title: "Resistance",
        vid: "sLusPKazHEE"
    },
    {
        title: "Series and Parallel",
        vid: "aI6MlD6DIrk"
    },
    {
        title: "Power concept and numerical",
        vid: "b9UcjHxNgq0"
    },
    {
        title: "Discussed important question for exam",
        vid: "tbiBVIdGuwU"
    },
    {
        title: "Discussed important question for exam",
        vid: "qMb-EBkxSUI"
    },
],
Magnetic_effect_of_electric_current: [
    {
        title: "Generator,electromagnetic induction,elctric motor,left hand rule",
        vid: "gHhOqFCgSWE"
    },
    {
        title: "Discussed important question for exam",
        vid: "LKcxem2xBVE"
    },
    {
        title: "Concet of the chapter",
        vid: "5xuXCCmVkfk"
    },
    {
        title: "Electromagnetic Induction ",
        vid: "o2s5q67nRIo"
    },
    {
        title: "Electric moter and Comercial motor",
        vid: "3nB5y8hhbuQ"
    },
    {
        title: "Generator(ac and dc)(dynamo)",
        vid: "mg30p9yuoI4"
    },
],
Sources_of_Energy: [
    {
        title: "Discussed important question for exam ",
        vid: "qcqDu4DlJUQ"
    },
    {
        title: "Discussed important question for exam",
        vid: "y_W8w2rIR9s"
    },
    {
        title: "Complete Explanation",
        vid: "iYKkU542nwY"
    },
    {
        title: "Hydro power",
        vid: "BFYaukdtoXQ"
    },
],


}
    const[vid,uid]= useState(courses[videoName][0].vid);
    const[title,utit]= useState(courses[videoName][0].title);

    const renderVideo = () =>{
      return(
        <>
        <h3>{title}</h3>
        <div class="video-container">
  <iframe width="40%" height="25%" src={"//www.youtube.com/embed/"+ vid +"?rel=0"} frameBorder="0" allowfullscreen></iframe>
</div>
</>
)
    }



  return (
    <div className="Content">
     <div class="row">

   <h3>  {videoName} </h3>
   <div class="col s12 m7">

   {renderVideo()}
   </div>
   <div class="col s12 m5">

   <div className="collection">
     {courses[videoName].map(item=>{
       return      <a href="#!" className="collection-item" onClick={()=>{
         uid(item.vid)
         utit(item.title)
       }}>{item.title}</a>

     })}
     </div>
     <br/>
     <br/>
     <br/>
   </div>

    </div>
    </div>
  );
}

export default Science10;
