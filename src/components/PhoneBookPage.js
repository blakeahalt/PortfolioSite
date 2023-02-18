import React from "react";
import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './PhonebookFeatures.jsx'
import Nav from './NavBar'

import PhoneBookPic from "../assets/PhoneBookPic.png"
import Phonebackground from "../assets/phone-background.png"

function PhoneBook() {
  return (
    <div className="parallax-features">
      <Nav isWhite={true} />
        <div className="container">
        <Parallax 
          bgImage={Phonebackground} 
          blur={{ min: -8, max: 8 }}
          className="opaque-image" 
          strength={300} 
          >
          <div style={{ height: 750, justifyContent: 'center' }}>
            <div className="boxs header">
              <h1 style={{color: 'black'}} className="title">Phonebook Feature</h1>
              <h4 className="introduction">
                A simple phonebook feature that allows users to 
              </h4>
              <h4 style={{ marginTop: '-1em' }}className="introduction">
                  add, search, edit, and delete names and numbers.
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
        <div style={{ height: '1200px', marginTop:-475 }}>
            <div className="boxs-title">
              <h2 className="blue ">What is it?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  A full stack app from the University of Helsinki's Full Stack Open 2022 course. This is a simple web app that implements basic CRUD (Create, Read, Update, Delete) functionality. 
                </div>
              </div>
            </div>
            <div style={{marginTop:-50}} className="boxs-title">
              <h2 className="blue">What was it built with?</h2>
              <div className="box-con">
                <div style={{justifyContent: 'flex-start', textAlign: 'left', marginLeft: '50px', width: '100%', color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  This app was built with a MERN stack (MongoDB, Express.js, React.js, and Node.js).
              </div>
              </div>
            </div>
            <div style={{marginTop: 50}} className="boxs-title">
              <h2 className="blue">What did I learn?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  Overall I learned how to create a simple full stack web application. Using React I created reusable components, managed component data with state and props, and worked with React's virtual DOM to render and update the UI. I also used several Express.js methods like 'get', 'post', 'put', delete', and 'use' to handle Node.js HTTP requests the contacts data stored in a database using MongoDB.
                  Beyond the scope of the course requirements I learned how to implement responsive design with stylized CSS and how to deploy the app to a cloud-based platform, originally on Heroku and later migrated to Fly.io.
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
