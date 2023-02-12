import React, { useState, useRef } from "react";

import icon1 from "../assets/i1.png";
import icon2 from "../assets/i2.png";
import icon3 from "../assets/i3.png";
import MobileMap from "../assets/MobileMap.jpg";
import test1 from "../assets/icons8-sun.svg"

import "../Icons/Icon.css";

const Icons = () => {
  const [visibility1, setVisibility1] = useState(false)
  const [visibility2, setVisibility2] = useState(false)
  const [visibility3, setVisibility3] = useState(false)
  const [visibility4, setVisibility4] = useState(true)
  const [visibilityBottom, setVisibilityBottom] = useState(true)
  const [currentVisibility, setCurrentVisibility] = useState('visibilityBottom');


const toggleVisibility1 = () => {
  setVisibility1(!visibility1)
  setVisibilityBottom(false)
  setCurrentVisibility('visibility1')
}
const toggleVisibility2 = () => {
  setVisibility2(!visibility2)
  setVisibilityBottom(false)
  setCurrentVisibility('visibility2')
}
const toggleVisibility3 = () => {
  setVisibility3(!visibility3)
  setVisibilityBottom(false)
  setCurrentVisibility('visibility3')
}
const toggleVisibility4 = () => {
  setVisibility3(!visibility4)
  setVisibilityBottom(false)
  setCurrentVisibility('visibility4')
}

return (
  <div className="nft-features">
    <h1 className="blue underline features">Features</h1>
    <div className="icons">
      <div className="icon">
        {/* <img style={{ padding: 25 }} src={icon1} alt="icon1" onClick={toggleVisibility1} /> */}
        <img 
          style={{ padding: 5 }} 
          src={icon1} 
          alt="icon1" 
          onMouseEnter={toggleVisibility1} 
          onMouseLeave={() => setVisibilityBottom(true) & setCurrentVisibility('visibilityBottom')}
        />
        <div className="icon-title">OAuth2 Login</div>
        <div>
      </div>
    </div>
    <div className="icon">
        {/* <img style={{ padding: 25 }} src={icon2} alt="icon2" onClick={toggleVisibility2} /> */}
        <img 
          style={{ padding: 5 }} 
          src={icon2} 
          alt="icon2" 
          onMouseEnter={toggleVisibility2} 
          onMouseLeave={() => setVisibilityBottom(true) & setCurrentVisibility('visibilityBottom')}
        />
        <div className="icon-title">Argon2 encryption</div>
        <div>
      </div>
    </div>
    <div className="icon">
        {/* <img style={{ padding: 25 }} src={icon3} alt="icon3" onClick={toggleVisibility3} /> */}
        <img 
          style={{ padding: 5 }} 
          src={icon3} 
          alt="icon3" 
          onMouseEnter={toggleVisibility3} 
          onMouseLeave={() => setVisibilityBottom(true) & setCurrentVisibility('visibilityBottom')}
        />
        <div className="icon-title">JSON Web Tokens</div>
        <div>
      </div>
    </div>
    <div style={{display:'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 220}} className="icon">
        <img 
          style={{ padding: 5, marginTop: 20 }} 
          src={icon3} 
          alt="icon4" 
          onMouseEnter={toggleVisibility4} 
          onMouseLeave={() => setVisibilityBottom(true) & setCurrentVisibility('visibilityBottom')}
        />
        <div className="icon-title" >Daily/Weekly/Monthly Sales</div>
        <div>
      </div>
    </div>
    </div>
    <div className="replaceFeature">
      {currentVisibility === 'visibility1' ? (
          <>
            <img style={{marginTop:10, marginBottom:30, }} src={icon1} alt="test1" />
            <div style={{fontSize: 21}}>
              OAuth2 Login
            </div>
          </>) : null}
      {/* {currentVisibility === 'visibility2' ? (
          <>
            <img style={{marginTop:10, marginBottom:15}} src={icon2} alt="test2" />
            <div style={{fontSize: 18}}>
              See each country's flag and coat of arms.
            </div>
            <div style={{fontSize: 18}}>
              Also discover its capital, population, language(s), and currency.
            </div>
          </>) : null} */}
      {currentVisibility === 'visibility2' ? (
          <>
            <img style={{marginTop:10, marginBottom:30}} src={icon2} alt="test3" />
            <div style={{fontSize: 21}}>
              argon2 encryption
            </div>
          </>) : null}
      {currentVisibility === 'visibility3' ? (
          <>
            <img style={{marginTop:10, marginBottom:30}} src={icon3} alt="test3" />
            <div style={{fontSize: 21}}>
            Protected routes with JSON Web Tokens
            </div>
          </>) : null}
      {currentVisibility === 'visibility4' ? (
          <>
            <img style={{marginTop:10, marginBottom:30}} src={icon3} alt="test3" />
            <div style={{fontSize: 22}}>
              Daily/Weekly/Monthly Sales
            </div>
          </>) : null}
      {currentVisibility === 'visibilityBottom' ? (
          <>
            <img style={{marginTop:10, marginBottom:30 }} src={icon1} alt="MobileMap" />
            <div style={{fontSize: 21}}>
              Check out each feature to learn more.
            </div>
          </>
        ) : null}
  </div>

  </div>
);

};

export default Icons;
