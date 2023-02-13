import React from "react";

import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './StockFeatures.jsx'


import image1 from "../assets/01.jpeg";
import image3 from "../assets/03.jpeg";
import image4 from "../assets/04.jpeg";
import WorldMap from "../assets/WorldMap_opacity.png"
import MobileMap from "../assets/MobileMap.jpg"


function Page() {
  return (
    <div className="stock-features">
        <div className="container">
        <Parallax 
          blur={{ min: -5, max: 5 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{ height: 725 }}>
            <div className="boxs header">
              <h1 className="title-country">Stock Market App</h1>
              <h4 className="title-date">November 2022</h4>
              <h4 className="introduction">
              A full stack stock portfolio manager using real-time data
              </h4>
              <div className="buttons">
                <a href="https://stockpapertrader.fly.dev/">
                  <AwesomeButton
                    size="medium"
                    type="secondary"
                  >
                    Demo
                  </AwesomeButton> 
                </a> 
                <div className="space"></div>
                <a href="https://github.com/blakeahalt/">
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
                  Harvard University's Introduction to Computer Science final CS50 EdX project. It is a web app that allows you to manage your own stock portfolio. Registered users can buy stocks from the <a href="https://iexcloud.io/docs/api/"><i>IEX Cloud API</i></a> with a $10,000 starting balance. All stock searches, transactions, and balances are stored in each user's portfolio.
                </div>
              </div>
            </div>
            <div style={{marginTop:-50}} className="boxs-title">
              <h2 className="blue">What was it built with?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  This app was built with Python, Flask, Jinja, Bootstrap, and SQL database. It's supplied with real-time stock data from the <a href="https://iexcloud.io/docs/api/"><i>IEX Cloud API</i></a>.
              </div>
              </div>
            </div>
            <div className="boxs-title">
              <h2 className="blue">What did I learn?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  I learned how to set state variables by sending async requests to an API with axios. Applying a filter to the state variable 'countries' users can quickly search for and see country data. Beyond the scope of the course requirements, I learned a lot about CSS styling by implementing responsive design as well as how to deploy on a host server.  
              </div>
              </div>
            </div>
          </div>
        </Parallax>


      <Parallax className="stock-features">
        <Icons />
      </Parallax>

    </div>
    <div className="footer">Footer. This code is open source.</div>

        </div>
  );
}

export default Page;
