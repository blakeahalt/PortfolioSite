import React from "react";

import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './NFTFeatures.jsx'


import image1 from "../assets/01.jpeg";
import image3 from "../assets/03.jpeg";
import image4 from "../assets/04.jpeg";
import WorldMap from "../assets/WorldMap_opacity.png"
import MobileMap from "../assets/MobileMap.jpg"


function Page() {
  return (
    <div className="nft-features">
        <div className="container">
        <Parallax 
          blur={{ min: -5, max: 5 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{ height: 725 }}>
            <div className="boxs header">
              <h1 className="title-country">NFT Sales Tracker</h1>
              <h4 className="title-date">November 2022</h4>
              <h4 className="introduction">
              A full stack application that tracks the most recent trending NFT sales
              </h4>
              <div className="buttons">
                <a href="https://nftleague2.herokuapp.com/">
                  <AwesomeButton
                    size="medium"
                    type="secondary"
                  >
                    Demo
                  </AwesomeButton> 
                </a> 
                <div className="space"></div>
                <a href="https://github.com/blakeahalt/nftleague2">
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
        <div style={{height: '1500px', marginTop:-600}}>
            <div className="boxs-title">
              <h2 className="blue ">What is it?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  This personal project was my first attempt to build an actual site. I originally planned to use the OpenSea API sales data to set up an 'NFT fantasy league' of sorts. However, I was unable to (still) to get an OpenSea API key, so I decided to make it an NFT sales tracking tool.
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
            <div style={{marginTop: 125}} className="boxs-title">
              <h2 className="blue">What did I learn?</h2>
              <div className="box-con">
              <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop: -15}}>
              By completing this project, I learned how to build the following features from scratch: 
              <ul style={{marginLeft: -70}}>
                <li>
                enabling OAuth2 login capability for users to log in with their Google accounts
                </li>
                <li>
                encrypting and storing Argon2 encrypted passwords into a MySQL database  
                </li>
                <li>
                creating protected routes with JSON access and refresh web tokens for both registered users and Google users
                </li>
                <li style={{ listStyleType: 'disclosure-open' }}>
                mapping and filtering specific data from API responses:
                <ul style={{ listStyleType: 'none', marginLeft: -90 }}>
                  <li>
                    changing ISP180 number data into '1 hour ago' string format
                  </li>
                  <li>
                    removing the collection name from one url and appending it to a new one
                  </li>
                  <li>
                    attaching the appropriate blockchain currency to each market
                  </li>
                </ul>
                </li>
              </ul>
            </div>

              </div>
            </div>
          </div>
        </Parallax>


      <Parallax className="nft-features">
        <Icons />
      </Parallax>

    </div>
    <div className="footer">Footer. This code is open source.</div>

        </div>
  );
}

export default Page;
