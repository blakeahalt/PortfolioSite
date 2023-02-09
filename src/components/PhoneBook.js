import React from "react";

import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './IconsPhonebook.jsx'
import Code from '../components/Code'


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
          <div style={{ height: 750 }}>
            <div className="boxs">
              <h1 className="blue underline">Project Information</h1>
              <div className="box-con">
                A simple CRUD (Create, Read, Update, Delete) feature from the University of Helsinki's Full Stack Open 2022 course
              </div>
              <div className="box-con-li">
              <li className="list1" style={{marginLeft: 22}}>
                MERN stack: MongoDB, Express, React, Node.js
                </li>
              <li className="list2" style={{marginLeft: 19}}>
                Implements REST API in Nodes.js using Express
                </li>
                <li className="list3" style={{marginLeft: -46}}>
                Stores data in a MongoDB database
                </li>
                <li className="list4" style={{marginLeft: 35}}>
                Responsive design for better mobile and web UI/UX
                </li>
              </div>
            </div>
          </div>
        </Parallax>


      <Parallax style={{height: 750, marginBottom: -50}}>
        <Icons />
      </Parallax>

    </div>
    <div className="footer">Footer. This code is open source.</div>

        </div>
  );
}

export default PhoneBook;
