import React, { useState, useRef } from "react";
import styled from 'styled-components';

import icon1 from "../assets/i1.png";
import icon2 from "../assets/i2.png";
import icon3 from "../assets/i3.png";
import MobileMap from "../assets/MobileMap.jpg";
import test1 from "../assets/icons8-sun.svg"

import "../Icons/Icon.css";


const SkillsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 100%;
padding:5px;

`

const Skills = styled.h2`
font-size: 1.2em;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(230,230,230, 0.5);
color: rgb(0, 62, 128);
font-weight:400;
border: 1px solid rgb(0, 62, 128);
border-radius: 10px;
padding: 8px;
margin: 2px;

@media screen and (max-width: 1000px) {
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  width: auto;
  margin: 2px;
}
@media screen and (max-width: 481px) {
  
  border: 1px solid;
  border-radius: 10px;
}
`


const MemberComponent = ({skills=[]}) => {
  return(
    <div style={{ width: '95%', height: '115px', display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: 'auto', marginBottom: '10px', border: '1px solid black', borderRadius: '15px', boxShadow: '3px 7px 15px 2px rgba(0,0,0,0.3)', backgroundColor:'rgb(255,255,255,0.6)' }}>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skills key={index}>{skill}</Skills>
        ))}
      </SkillsContainer>
      </div>
  )
}


const Icons = () => {

return (
  <div className="skills-features">
    <h1 className="features-title" >Skills</h1>
    <div className="skills-container" >
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div className='skills-item-container' >
          <div className="skills-title">Backend Development</div>
          <MemberComponent skills={["Node.js","Express.js","Python","Flask","Jinja","SQL","MySQL","SQLite","MongoDB"]} />
        </div>
        <div className='skills-item-container' >
          <div className="skills-title">Frontend Development</div>
            <MemberComponent skills={["Javascript","React","HTML5","CSS","Bootstrap.js"]} />
          </div>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div className='skills-item-container' >
          <div className="skills-title">Testing and Deployment</div>
            <MemberComponent style={{height: '50px' }} skills={["Jest","Cypress","webpack"]} />
          </div>
        </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div className='skills-item-container' >
          <div className="skills-title">Other Technologies</div>
            <MemberComponent skills={["Authorization: OAth2, JSON web tokens","Version Control: Git","Design: Procreate"]} />
          </div>
        </div>
    </div>
</div>
);
};

export default Icons;


