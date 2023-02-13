import React from "react";

import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './PhonebookFeatures.jsx'


import image1 from "../assets/01.jpeg";
import image3 from "../assets/03.jpeg";
import image4 from "../assets/04.jpeg";
import PhoneBookPic from "../assets/PhoneBookPic.png"
import MobileMap from "../assets/MobileMap.jpg"


function PhoneBook() {
  return (
    <div className="App">
        <div className="container">
        <Parallax bgImage={PhoneBookPic} 
          blur={{ min: -8, max: 8 }}
          className="opaque-image" 
          strength={300} 
          >
          <div style={{ height: 500 }}>
            <div className="boxs header">
              <h1 style={{color: 'black'}} className="title">Phonebook Feature</h1>
              <h4 className="introduction">
                  A simple phonebook feature that allows users to add, search, edit, and delete names and numbers.
              </h4>
              <div className="buttons">
                <a href="http://crud-phonebook.fly.dev/">
                  <AwesomeButton
                    size="medium"
                    type="secondary"
                  >
                    Demo
                  </AwesomeButton> 
                </a> 
                <div className="space"></div>
                <a href="https://github.com/blakeahalt/Full-Stack-Open-2022/tree/main/part3">
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
        <div style={{height: '1200px', marginTop:-400}}>
            <div className="boxs-title">
              <h2 className="blue ">What is it?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  A full stack app from the University of Helsinki's Full Stack Open 2022 course that fetches and displays information from the <a href="https://restcountries.com/" target="_blank" rel="noreferrer"><i>REST Countries</i></a> and <a href="https://openweathermap.org/" target="_blank" rel="noreferrer"><i>Open Weather Map</i></a> API's.
                </div>
              </div>
            </div>
            <div style={{marginTop:-30}} className="boxs-title">
              <h2 className="blue">What was it built with?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  This app was built with Javascript, React, and something something.  Node.js backedn with other stuff. It also uses API's from (here and here) 
              </div>
              </div>
            </div>
            <div className="boxs-title">
              <h2 className="blue">What did I learn?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  I learned how to set state variables by sending async requests to an API with axios. By applying a filter to the state variable 'countries', the app can very quickly display a list of countries and their data. Originally deployed on Heroku, but was migrated to fly.io.
              </div>
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  Beyond the scope of the course requirements, I learned how to style the CSS in order to accomodate for better responsive design on all devices.
              </div>
              </div>
            </div>
          </div>
        </Parallax>


      <Parallax className='phonebook-features'>
        <Icons />
      </Parallax>

    </div>
    <div className="footer">Footer. --Add Links--</div>

        </div>
  );
}

export default PhoneBook;
