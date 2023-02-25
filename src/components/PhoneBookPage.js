import React from "react";
import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './PhonebookFeatures.jsx'
import Nav from './NavBar'
import Button from './Button'
import Footer from './Footer'

import PhoneBookPic from "../assets/PhoneBookPic.png"
import Phonebackground from "../assets/phone-background.png"

function PhoneBook() {

  let backgroundImage;
  
    if (window.innerWidth > 1200) {
      backgroundImage = 710
    } else if (window.innerWidth > 665) {
      backgroundImage = '100vh'
    } else {
      backgroundImage = '100vh'
    }

  return (
    < >
      <Nav isWhite={true} />
        <div className="container">
        <Parallax 
          bgImage={Phonebackground} 
          blur={{ min: -8, max: 8 }}
          className="opaque-image" 
          strength={300} 
          >
          <div style={{ height: backgroundImage, justifyContent: 'center' }}>
            <div className="boxs header">
              <h1 style={{color: 'black'}} className="title">Phonebook Feature</h1>
              <h4 className="introduction">
                A simple phonebook feature that allows users to 
              </h4>
              <h4 style={{ marginTop: '-1em' }}className="introduction">
                  add, search, edit, and delete names and numbers.
              </h4>
              <div >
              <Button style={{backgroundColor: 'white'}} text="See Demo" link='https://crud-phonebook.fly.dev/' />
                <div className="space"></div>
              <Button text="Github" link="https://github.com/blakeahalt/Full-Stack-Open-2022/tree/main/part3" />
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax  >
        <div style={{ height: '1300px', marginTop:-550 }}>
            <div className="boxs-title">
              <h2 className="blue ">What is it?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  From the University of Helsinki's Full Stack Open 2022 course this is a simple web application that implements basic CRUD (Create, Read, Update, Delete) methods to update a phone contacts list. 
                </div>
              </div>
            </div>
            <div style={{marginTop:-60}} className="boxs-title">
              <h2 className="blue">What was it built with?</h2>
              <div className="box-con">
              <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  This app was built with a MERN stack (MongoDB, Express.js, React.js, and Node.js).
              </div>
              </div>
            </div>
            <div style={{marginTop: 50}} className="boxs-title">
              <h2 className="blue">What did I learn?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  I learned how to build a simple full stack web application that uses React to create reusable components and manage component data with state and props. Using Express.js methods (get, post, put, delete, and use) to handle Node.js HTTP requests, I was able to interact with the a MongoDB database to manipulate contact data.
                  I also learned how to implement responsive design with stylized CSS and how to deploy the app to cloud-based platforms Heroku and Fly.io.
              </div>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax className='phonebookPage-features'>
          <Icons />
        </Parallax>
      </div>
    
      <Footer/>
    </>
  );
}

export default PhoneBook;
