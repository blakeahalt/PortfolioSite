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
  const [currentVisibility, setCurrentVisibility] = useState('visibility4');


const toggleVisibility1 = () => {
  setVisibility1(!visibility1)
  setVisibility4(false)
  setCurrentVisibility('visibility1')
}
const toggleVisibility2 = () => {
  setVisibility2(!visibility2)
  setVisibility4(false)
  setCurrentVisibility('visibility2')
}
const toggleVisibility3 = () => {
  setVisibility3(!visibility3)
  setVisibility4(false)
  setCurrentVisibility('visibility3')
}

return (
  <div className="parallax-features">
    <h1 className="blue underline features">Skills</h1>
    <div className="icons">
      <div className="icon">
        {/* <img style={{ padding: 25 }} src={icon1} alt="icon1" onClick={toggleVisibility1} /> */}
        <img 
          style={{ padding: 25 }} 
          src={icon1} 
          alt="icon1" 
          onMouseEnter={toggleVisibility1} 
          onMouseLeave={() => setVisibility4(true) & setCurrentVisibility('visibility4')}
        />
        <div className="icon-title">Backend</div>
        <div>
      </div>
    </div>
    <div className="icon">
        {/* <img style={{ padding: 25 }} src={icon2} alt="icon2" onClick={toggleVisibility2} /> */}
        <img 
          style={{ padding: 25 }} 
          src={icon2} 
          alt="icon2" 
          onMouseEnter={toggleVisibility2} 
          onMouseLeave={() => setVisibility4(true) & setCurrentVisibility('visibility4')}
        />
        <div className="icon-title">Frontend</div>
        <div>
      </div>
    </div>
    <div className="icon">
        {/* <img style={{ padding: 25 }} src={icon3} alt="icon3" onClick={toggleVisibility3} /> */}
        <img 
          style={{ padding: 25 }} 
          src={icon3} 
          alt="icon3" 
          onMouseEnter={toggleVisibility3} 
          onMouseLeave={() => setVisibility4(true) & setCurrentVisibility('visibility4')}
        />
        <div className="icon-title">Other?</div>
        <div>
      </div>
    </div>
    </div>
    <div className="replaceFeature">
    {currentVisibility === 'visibility1' ? (
        <>
          <img style={{marginTop:10, marginBottom:30, }} src={icon1} alt="test1" />
          <div style={{fontSize: 21}}>
            Responsive Design delivers better UX/UI experiences on all devices.
          </div>
        </>) : null}
    {currentVisibility === 'visibility2' ? (
        <>
          <img style={{marginTop:10, marginBottom:15}} src={icon2} alt="test2" />
          <div style={{fontSize: 18}}>
            See each country's flag and coat of arms.
          </div>
          <div style={{fontSize: 18}}>
            Also discover its capital, population, language(s), and currency.
          </div>
        </>) : null}
    {currentVisibility === 'visibility3' ? (
        <>
          <img style={{marginTop:10, marginBottom:30}} src={icon3} alt="test3" />
          <div style={{fontSize: 21}}>
            Get the capital city's 3-day weather forecast and temperatures.
          </div>
        </>) : null}
    {currentVisibility === 'visibility4' ? (
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
