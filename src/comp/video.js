import React,{useState} from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';


function Video(props) {

  const videoName = props.match.params.videoName
  const courses ={
    PewDiePie:[
      {title:"video1",vid:"PUe-BLqeFwk"},
        {title:"video2",vid:"efXTz0h7ov4"},
          {title:"video3",vid:"efXTz0h7ov4"}
    ],
    course1:[
      {title:"title1",vid:"efXTz0h7ov4"},
        {title:"title2",vid:"efXTz0h7ov4"},
          {title:"title3",vid:"efXTz0h7ov4"}
    ]}
    const[vid,uid]= useState(courses[videoName][0].vid);
    const[title,utit]= useState(courses[videoName][0].title);

    const renderVideo = () =>{
      return(
        <div>
        <h1>{title}</h1>
        <div class="video-container">
  <iframe width="40%" height="25%" src={"//www.youtube.com/embed/"+ vid +"?rel=0"} frameBorder="0" allowfullscreen></iframe>
</div>
</div>
)
    }


  return (
    <div className="Content">
   <h1>  {videoName} </h1>
   {renderVideo()}
   <div className="collection">
     {courses[videoName].map(item=>{
       return      <a href="#!" className="collection-item" onClick={()=>{
         uid(item.vid)
         utit(item.title)
       }}>{item.title}</a>

     })}
   </div>
    </div>
  );
}

export default Video;
