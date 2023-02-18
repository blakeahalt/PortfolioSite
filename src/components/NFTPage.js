import React from "react";
import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './NFTFeatures.jsx'
import NavBlue from './NavBarBlue'
import Button from './Button'

import nftBackground from "../assets/nft-background.png"

function Page() {
  return (
    <div className="parallax-features">
      <NavBlue  />
        <div className="nft-top-container">
        <Parallax 
          style={{marginTop:"-50px"}}
          bgImage={nftBackground} 
          blur={{ min: 3, max: 3 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{ height: 800 }}>
            <div className="boxs header">
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
        <div style={{height: '1500px', marginTop:-600}}>
            <div className="boxs-title">
              <h2 className="blue ">What is it?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  This personal project was my first attempt to build an actual site. I originally planned to use the sales data from the OpenSea API to make an 'NFT Fantasy League'.  However, I'm (still) waiting to get an OpenSea API key, so I decided to build an NFT sales tracking application.
                </div>
              </div>
            </div>
            <div style={{marginTop:-30}} className="boxs-title">
              <h2 className="blue">What was it built with?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                This web app has a front-end user interface (built with React) and a back-end server (built with Node.js and Express.js) that communicates with a database (MySQL) and external APIs (using Axios) while implementing secure authentication (OAuth2) and password hashing (Argon2).
              </div>
              </div>
            </div>
            <div style={{marginTop: 50}} className="boxs-title">
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
