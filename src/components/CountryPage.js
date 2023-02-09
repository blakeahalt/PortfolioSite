import React from "react";

import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './IconsCountry.jsx'
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
              <h4 className="title-date"><i>August 2022</i></h4>
              <h4 className="introduction">
                A full stack React app that displays country information and a 3-day weather forecast.
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
          <div style={{ height: 750, marginBottom: -125 }}>
            <div className="boxs">
              <h2 style={{marginTop: -300}} className="blue">What is it?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black'}}>
                  A full stack app from the University of Helsinki's Full Stack Open 2022 course that fetches and displays information from the <a href="https://restcountries.com/" target="_blank" rel="noreferrer"><i>REST Countries</i></a> and <a href="https://openweathermap.org/" target="_blank" rel="noreferrer"><i>Open Weather Map</i></a> API's.
              </div>
              </div>
              {/* <div className="box-con-li">
                <li className="list1" style={{marginLeft: -18}}>
                Displays a country's flag and coat of arms
                </li>
                <li className="list2" style={{marginLeft: 31}}>
                Facts: Capital, Population, Languages, and currency
                </li>
                <li className="list3" style={{marginLeft: -17}}>
                Displays a 3-day forecast and temperature
                </li>
                <li className="list4" style={{marginLeft:3}}>
                Responsive design for mobile and web UI/UX
                </li>
              </div> */}
            </div>
            <div className="boxs">
              <h2 style={{marginTop: -120}} className="blue">What was it built with?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black'}}>
                  This app was built with Javascript, React, and something something.  Node.js backedn with other stuff. It also uses API's from (here and here) 
              </div>
              </div>
            </div>
            <div className="boxs">
              <h2 style={{marginTop: 250}} className="blue">What did I learn?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black'}}>
                  I learned how to set state variables with axios async requests to an API. After setting a state variable (i.e. countries) and applying a filter, users are able to quickly search for and see country data. Beyond the scope of the course requirements, I learned a lot about CSS styling, how to implement responsive design, and how to deploy on a host server. 
              </div>
              </div>
            </div>
          </div>
        </Parallax>


      <Parallax style={{height: 725, marginBottom:20}}>
        <Icons />
      </Parallax>

    </div>
    <div className="footer">Footer. This code is open source.</div>

        </div>
  );
}

export default CountryPage;
