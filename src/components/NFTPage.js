import React from "react";
import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './NFTFeatures.jsx'
import Nav from './NavBar'
import Button from './Button'
import Footer from './Footer'


import nftBackground from "../assets/nft-background.png"

function Page() {
  
  let backgroundImage;

  if (window.innerWidth > 1200) {
    backgroundImage = 710
  } else if (window.innerWidth > 665) {
    backgroundImage = '100vh'
  } else {
    backgroundImage = '100vh'
    }


  return (
    <div >
      <Nav isWhite={true} />
        <div className="nft-top-container">
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
              <h4 style={{ color: 'white' }} className="introduction">
              A full stack application that tracks the most recent trending NFT sales
              </h4>
              <div>
              <Button style={{backgroundColor: 'white'}} text="See Demo" link='https://nftleague2.herokuapp.com/' />
                <div className="space"></div>
              <Button text="Github" link="https://github.com/blakeahalt/nftleague2" />
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax  >
        <div style={{height: 1600, marginTop:-670}}>
            <div className="boxs-title">
              <h2 className="blue ">What is it?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  This is a personal project and was my first attempt to build an entire full stack web application. I originally planned to implement sales data from the OpenSea API to create an 'NFT Fantasy League', but have yet to obtain an OpenSea API key. Instead, I built an NFT sales tracking application using available API data from CryptoSlam, NFTStats and RapidAPI. Then I implemented JSON web tokens and private routes for secure user registration and login.
                </div>
              </div>
            </div>
            <div style={{marginTop:-80}} className="boxs-title">
              <h2 className="blue">What was it built with?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                This web application has a front-end user interface (built with React) and a back-end server (built with Node.js and Express.js) that communicates with a database (MySQL) and external APIs (using Axios) while implementing secure authentication (OAuth2) and password hashing (Argon2).
              </div>
              </div>
            </div>
            <div style={{marginTop: 50}} className="boxs-title">
              <h2 className="blue">What did I learn?</h2>
              <div className="box-con">
              <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop: -15}}>
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
            </div>
          </div>
        </Parallax>

        <Parallax >
          <Icons />
        </Parallax>
      </div>

      <Footer/>
    </div>
  );
}

export default Page;
