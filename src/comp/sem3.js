import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { theme } from "./script.js";
import { Link } from 'react-router-dom';


class Sem3 extends React.Component {
    componentDidMount() {
        theme();
    }
    render() {
        return (
            <div className="Content" ref={el => (this.div = el)}>
                <h1> 3rd Sem. Resouces for Students  </h1>
                <div class="collection">
                    <a href="https://drive.google.com/drive/folders/1acWA8ep043Bj7sVbQtzr7K6J7yxcPutc?usp=sharing" target="_blank" class="collection-item"><span class="badge"></span>Maths Notes</a>
                    <a href="https://drive.google.com/drive/folders/1qOju3_bZT07u43jPqtPxKDRcChhY7TaZ?usp=sharing" target="_blank" class="collection-item"><span class="badge"></span>Logic Design</a>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />




            </div>
        );
    }
}

export default Sem3;
