import React from "react";

import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from '../components/Icons.jsx'
import Code from '../components/Code'


import image1 from "../assets/01.jpeg";
import image3 from "../assets/03.jpeg";
import image4 from "../assets/04.jpeg";
import WorldMap from "../assets/WorldMap_opacity.png"
import MobileMap from "../assets/MobileMap.jpg"


function CountryPage() {
  return (
    <div >
        <div className="container">
        <Parallax bgImage={WorldMap} 
          blur={{ min: -5, max: 5 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{ height: 725 }}>
            <div className="boxs header">
              <h1 className="title-country">Country and Weather Application</h1>
              <h4 className="introduction">
                A react app that fetches and displays data from the 
              </h4>
              <h4 style={{marginTop: -30}} className="introduction">
                <a href="https://restcountries.com/" target="_blank" rel="noreferrer"><i>REST Countries</i></a> and <a href="https://openweathermap.org/" target="_blank" rel="noreferrer"><i>Open Weather Map</i></a> API's.
              </h4>

              <div className="buttons">
                <a href="http://country.fly.dev/">
                  <AwesomeButton
                    size="medium"
                    type="secondary"
                  >
                    Demo
                  </AwesomeButton> 
                </a> 
                <div className="space"></div>
                <a href="https://github.com/blakeahalt/Full-Stack-Open-2022/tree/main/part2/countries">
                  <AwesomeButton
                    size="medium"
                    type="primary"
                  >
                    github
                  </AwesomeButton>
                </a> 
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax  >
          <div style={{ height: 750 }}>
            <div className="boxs">
              <h1 className="blue underline">Project Introduction</h1>
              <div className="box-con">
                A simple app from the University of Helsinki's Full Stack Open 2022 course 
              </div>
              <div className="box-con">
                focused on how to display items, handle forms, and introduced fetching data from JSON server with axios.
              </div>
            </div>
          </div>
        </Parallax>


      <Parallax style={{height: 725, marginBottom: -50}}>
        <Icons />
      </Parallax>

    </div>
    <div className="footer">Footer. This code is open source.</div>

        </div>
  );
}

export default CountryPage;
