import React, {useState, useEffect} from 'react'
import WebFont from 'webfontloader';
import '../App2.css';
import { Parallax } from "react-parallax";
import Icons from './PhonebookFeatures.jsx'
import Nav from './NavBar'
import Button from './Button'
import Footer from './Footer'

import Phonebackground from "../assets/phone-background.png"

function PhoneBook() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins']
      }
    });
   }, []);
  
  let backgroundImage;
  let screen;
  
    if (window.innerWidth > 1200) {
      backgroundImage = 710
      screen = (
        <div className='font-load'>
          <Nav isWhite={true} />
            <div >
              <Parallax 
                bgImage={Phonebackground} 
                blur={{ min: -8, max: 8 }}
                className="opaque-image" 
                strength={300} 
                >
                <div style={{ height: backgroundImage, justifyContent: 'center' }}>
                  <div className="boxs header">
                    <h1 style={{color: 'black', fontSize: '2.5em'}} className="phonebook-title">Phonebook Feature</h1>
                    <h4 className="title-date">August 2022</h4>
                    <h4 className="introduction">
                      A simple phonebook feature that allows users to 
                    </h4>
                    <h4 style={{ marginTop: '-1em' }}className="introduction">
                        add, search, edit, and delete names and numbers.
                    </h4>
                    <div style={{textAlign: 'center'}}>
                    <Button style={{backgroundColor: 'white'}} text="See Demo" link='https://crud-phonebook.fly.dev/' />
                      <div className="space"></div>
                    <Button text="Github" link="https://github.com/blakeahalt/Full-Stack-Open-2022/tree/main/part3" />
                    </div>
                  </div>
                </div>
              </Parallax>
              <Parallax  >
                <div style={{ marginTop: '5vh'}}>
                  <h2 className="blue ">What is it?</h2>
                    <div className='project-desc'>
                      From the University of Helsinki's Full Stack Open 2022 course this is a simple web application that implements basic CRUD (Create, Read, Update, Delete) methods to update a phone contacts list. 
                    </div>
                  <h2 className="blue ">What was it built with?</h2>
                    <div className='project-desc'>
                        This app was built with a MERN stack (MongoDB, Express.js, React.js, and Node.js).
                    </div>
                  <h2 className="blue ">What did I learn?</h2>
                    <div className='project-desc'>
                      I learned how to build a simple full stack web application that uses React to create reusable components and manage component data with state and props. Using Express.js methods (get, post, put, delete, and use) to handle Node.js HTTP requests, I was able to interact with the a MongoDB database to manipulate contact data.
                      I also learned how to implement responsive design with stylized CSS and how to deploy the app to cloud-based platforms Heroku and Fly.io.
                    </div>
                  </div>
                </Parallax>
            </div>
      </div>
      )
    } else if (window.innerWidth > 665) {
      backgroundImage = '100vh'
      screen = (
        <div className='font-load'>
        <Nav isWhite={true} />
          <div>
          <Parallax 
            bgImage={Phonebackground} 
            blur={{ min: -8, max: 8 }}
            className="opaque-image" 
            strength={300} 
            >
            <div style={{ height: backgroundImage }}>
              <div className="boxs header">
                <h1 style={{color: 'black'}} className="title-phone">Phonebook Feature</h1>
                <h4 className="title-date">August 2022</h4>
                <h4 className="introduction" style={{ marginTop: '4vh' }}>
                  A simple phonebook feature that allows users to add, search, edit, and delete names and numbers.
                </h4>
                <div style={{ marginTop: '10vh', textAlign: 'center' }}>
                <Button style={{backgroundColor: 'white'}} text="See Demo" link='https://crud-phonebook.fly.dev/' />
                  <div className="space"></div>
                <Button text="Github" link="https://github.com/blakeahalt/Full-Stack-Open-2022/tree/main/part3" />
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax  >
            <div style={{ marginTop: '5vh'}}>
              <h2 className="blue ">What is it?</h2>
                <div className='project-desc'>
                  From the University of Helsinki's Full Stack Open 2022 course this is a simple web application that implements basic CRUD (Create, Read, Update, Delete) methods to update a phone contacts list. 
                </div>
              <h2 className="blue ">What was it built with?</h2>
                <div className='project-desc'>
                    This app was built with a MERN stack (MongoDB, Express.js, React.js, and Node.js).
                </div>
              <h2 className="blue ">What did I learn?</h2>
                <div className='project-desc'>
                  I learned how to build a simple full stack web application that uses React to create reusable components and manage component data with state and props. Using Express.js methods (get, post, put, delete, and use) to handle Node.js HTTP requests, I was able to interact with the a MongoDB database to manipulate contact data.
                  I also learned how to implement responsive design with stylized CSS and how to deploy the app to cloud-based platforms Heroku and Fly.io.
                </div>
              </div>
          </Parallax>
        </div>
        </div>
      )
    } else {
      backgroundImage = '100vh'
      screen = (
        <div className='font-load'>
        <Nav isWhite={true} />
          <div>
          <Parallax 
            bgImage={Phonebackground} 
            blur={{ min: -8, max: 8 }}
            className="opaque-image" 
            strength={300} 
            >
            <div style={{ height: backgroundImage }}>
              <div className="boxs header">
                <h1 className="title-phone">Phonebook Feature</h1>
                <h4 className="title-date">August 2022</h4>
                <h4 style={{ fontSize: '1.5em', marginTop: '4vh' }}className="introduction">
                  A simple phonebook feature that allows users to add, search, edit, and delete names/numbers.
                </h4>
                <div style={{ marginTop: '10vh', textAlign: 'center'}}>
                <Button style={{backgroundColor: 'white'}} text="See Demo" link='https://crud-phonebook.fly.dev/' />
                  <div className="space"></div>
                <Button text="Github" link="https://github.com/blakeahalt/Full-Stack-Open-2022/tree/main/part3" />
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax  >
          <div style={{ marginTop: '5vh'}}>
            <h2 className="blue ">What is it?</h2>
              <div className='project-desc'>
                From the University of Helsinki's Full Stack Open 2022 course this is a simple web application that implements basic CRUD (Create, Read, Update, Delete) methods to update a phone contacts list. 
              </div>
            <h2 className="blue ">What was it built with?</h2>
              <div className='project-desc'>
                  This app was built with a MERN stack (MongoDB, Express.js, React.js, and Node.js).
              </div>
            <h2 className="blue ">What did I learn?</h2>
              <div className='project-desc'>
                I learned how to build a simple full stack web application that uses React to create reusable components and manage component data with state and props. Using Express.js methods (get, post, put, delete, and use) to handle Node.js HTTP requests, I was able to interact with the a MongoDB database to manipulate contact data.
                I also learned how to implement responsive design with stylized CSS and how to deploy the app to cloud-based platforms Heroku and Fly.io.
              </div>
            </div>
          </Parallax>
        </div>
        </div>
      )
    }

  return (
    <div className='font-load' >
      {screen}
        <Parallax className='phonebookPage-features'>
          <Icons />
        </Parallax>
    
      <Footer/>
    </div>
  );
}

export default PhoneBook;
