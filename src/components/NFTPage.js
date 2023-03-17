import React, {useState, useEffect} from 'react'
import WebFont from 'webfontloader';
import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './NFTFeatures.jsx'
import Nav from './NavBar'
import Button from './Button'
import Footer from './Footer'


import nftBackground from "../assets/nft-background.png"

function Page() {
  
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
          bgImage={nftBackground} 
          blur={{ min: 3, max: 3 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{height: backgroundImage}} >
            <div className="boxs">
              <h1 style={{textAlign: 'center' }} className="title-nft">NFT Sales Tracker</h1>
              <h4 style={{ color: 'rgb(180,180,180)' }} className="title-date">November 2022</h4>
              <h4 style={{ color: 'white' }} className="introduction">
              A full stack application that tracks top sales from NFT marketplaces
              </h4>
              <div style={{textAlign: 'center' }}>
              <Button style={{backgroundColor: 'white'}} text="See Demo" link='https://nftleague2.herokuapp.com/' />
                <div className="space"></div>
              <Button text="Github" link="https://github.com/blakeahalt/nftleague2" />
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax  >
        <div style={{ marginTop: '5vh'}}>
          <h2 className="blue ">What is it?</h2>
            <div className='project-desc'>
                This is a personal project and was my first attempt to build an entire full stack web application. I originally planned to implement sales data from the OpenSea API to create an 'NFT Fantasy League', but have yet to obtain an OpenSea API key. Instead, I built an NFT sales tracking application using available API data from CryptoSlam, NFTStats and RapidAPI. Then I implemented JSON web tokens and private routes for secure user registration and login.
              </div>
          <h2 className="blue">What was it built with?</h2>
            <div className='project-desc'>
            This web application has a front-end user interface (built with React) and a back-end server (built with Node.js and Express.js) that communicates with a database (MySQL) and external APIs (using Axios) while implementing secure authentication (OAuth2) and password hashing (Argon2).
            </div>
          <h2 className="blue">What did I learn?</h2>
            <div className='project-desc'>
            By completing this project, I learned how to implement the following features: 
              <ul style={{marginLeft: -70}}>
                <li>
                enable OAuth2 allowing users to log in with their Google accounts
                </li>
                <li>
                store Argon2 hashed passwords into a MySQL database  
                </li>
                <li>
                protect routes with JSON access and refresh web tokens for both registered users and Google users
                </li>
                <li>
                convert ISO 8601 date format to '1 hour ago' string format
                </li>
                <li>
                loop over fetched API data capturing collection names and appending them to different urls.
                </li>
              </ul>
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
        <div >
        <Parallax 
          bgImage={nftBackground} 
          blur={{ min: 3, max: 3 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{height: backgroundImage}} >
            <div className="boxs">
              <h1 className="title-nft">NFT Sales Tracker</h1>
              <h4 style={{ color: 'rgb(180,180,180)' }} className="title-date">November 2022</h4>
              <h4 style={{ color: 'white', marginTop: '4vh' }} className="introduction">
              A full stack application that tracks the most recent trending NFT sales
              </h4>
              <div style={{ marginTop: '10vh', textAlign: 'center' }}>
              <Button style={{backgroundColor: 'white' }} text="See Demo" link='https://nftleague2.herokuapp.com/' />
                <div className="space"></div>
              <Button text="Github" link="https://github.com/blakeahalt/nftleague2" />
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax  >
        <div style={{ marginTop: '5vh'}}>
          <h2 className="blue ">What is it?</h2>
            <div className='project-desc'>
                This is a personal project and was my first attempt to build an entire full stack web application. I originally planned to implement sales data from the OpenSea API to create an 'NFT Fantasy League', but have yet to obtain an OpenSea API key. Instead, I built an NFT sales tracking application using available API data from CryptoSlam, NFTStats and RapidAPI. Then I implemented JSON web tokens and private routes for secure user registration and login.
              </div>
            <h2 className="blue">What was it built with?</h2>
              <div className='project-desc'>
              This web application has a front-end user interface (built with React) and a back-end server (built with Node.js and Express.js) that communicates with a database (MySQL) and external APIs (using Axios) while implementing secure authentication (OAuth2) and password hashing (Argon2).
            </div>
            <h2 className="blue">What did I learn?</h2>
              <div className='project-desc'>
                By completing this project, I learned how to implement the following features: 
                <ul style={{marginLeft: -70}}>
                  <li>
                  enable OAuth2 allowing users to log in with their Google accounts
                  </li>
                  <li>
                  store Argon2 hashed passwords into a MySQL database  
                  </li>
                  <li>
                  protect routes with JSON access and refresh web tokens for both registered users and Google users
                  </li>
                  <li>
                  convert ISO 8601 date format to '1 hour ago' string format
                  </li>
                  <li>
                  loop over fetched API data capturing collection names and appending them to different urls.
                  </li>
                </ul>
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
        <div >
        <Parallax 
          bgImage={nftBackground} 
          blur={{ min: 3, max: 3 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{ height: backgroundImage, justifyContent: 'center' }}>
            <div className="boxs header">
              <h1 className="title-nft">NFT Sales Tracker</h1>
              <h4 style={{ color: 'rgb(180,180,180)' }} className="title-date">November 2022</h4>
              <h4 style={{ color: 'white', marginTop: '4vh' }} className="introduction">
              A full stack application that tracks top trending NFT sales
              </h4>
              <div style={{ marginTop: '10vh', textAlign: 'center'}}>
              <Button style={{backgroundColor: 'white'}} text="See Demo" link='https://nftleague2.herokuapp.com/' />
                <div className="space"></div>
              <Button text="Github" link="https://github.com/blakeahalt/nftleague2" />
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax  >
          <div style={{ marginTop: '5vh'}}>
            <h2 className="blue ">What is it?</h2>
              <div className='project-desc'>
                  This is a personal project and was my first attempt to build an entire full stack web application. I originally planned to implement sales data from the OpenSea API to create an 'NFT Fantasy League', but have yet to obtain an OpenSea API key. Instead, I built an NFT sales tracking application using available API data from CryptoSlam, NFTStats and RapidAPI. Then I implemented JSON web tokens and private routes for secure user registration and login.
                </div>
            <h2 className="blue">What was it built with?</h2>
              <div className='project-desc'>
                This web application has a front-end user interface (built with React) and a back-end server (built with Node.js and Express.js) that communicates with a database (MySQL) and external APIs (using Axios) while implementing secure authentication (OAuth2) and password hashing (Argon2).
              </div>
            <h2 className="blue">What did I learn?</h2>
              <div className='project-desc'>
                By completing this project, I learned how to implement the following features: 
              <ul style={{marginLeft: '-7vh'}}>
                <li>
                enable OAuth2 allowing users to log in with their Google accounts
                </li>
                <li>
                store Argon2 hashed passwords into a MySQL database  
                </li>
                <li>
                protect routes with JSON access and refresh web tokens for both registered users and Google users
                </li>
                <li>
                convert ISO 8601 date format to '1 hour ago' string format
                </li>
                <li>
                loop over fetched API data capturing collection names and appending them to different urls.
                </li>
              </ul>
            </div>
          </div>
        </Parallax>
      </div>
      </div>
    )
    }


  return (
    <div className='font-load'>
      {screen}
        <Parallax >
          <Icons />
        </Parallax>
      <Footer/>
    </div>
  );
}

export default Page;
