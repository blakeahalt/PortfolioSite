import React, { useState, useRef } from "react";
import styled from 'styled-components';

import { Slide } from 'react-awesome-reveal';

import "../Icon.css";


const SkillsFeatures = styled.div`
height: auto;
margin-top: 5vh;
margin-bottom: 5vh;
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
text-align: center;

@media screen and (max-width: 75em){
  height: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
@media screen and (max-width: 42em){
  height: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  overflow: none;
}

`

const SkillsItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
margin-bottom: 5vh;
padding: .5vh;
height: auto;
width: 80%;
border-radius: 25px;
border: 1px solid rgb(0,0,0,0.3);
background-color: rgb(217,194,165);
box-shadow: 0.3vw 0.7vw 1.5vw 0.2vw rgba(0,0,0,0.2);

media screen and (max-width: 75em){
  width: auto;
  height: auto;
}
@media screen and (max-width: 42em){
  width: 90%;
  height: auto;
}
`


const SkillsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: .5vh;
width: auto;
padding: 1vh;
height: auto;
border: 1px solid rgb(0,0,0,0.3);
background-color: rgb(255,255,255,0.4);
border-radius: 25px;
box-shadow: 0.3vw 0.7vw 1.5vw 0.2vw rgba(0,0,0,0.2);



@media screen and (max-width: 75em){
  width: auto;
  margin: .5vh;
}
@media screen and (max-width: 42em){
  width: auto;
}
`

const Skills = styled.h2`
font-size: 1.5em;
display: flex;
justify-content: center;
background-color: rgb(240,240,240, 0.8);
color: rgb(0, 62, 128);
font-weight:400;
border: 1px solid rgb(0, 62, 128);
border-radius: 10px;
padding: .5vh;
margin: .5vh;

@media screen and (max-width: 75em){
  align-items: center;
  border-radius: 10px;
  font-size: 1.4em;
}
@media screen and (max-width: 42em){
  align-items: center;
  border-radius: 10px;
  margin: .2vh;
  font-size: 1em;
}
`


const MemberComponent = ({skills=[]}) => {
  return(
    <div >
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skills key={index}>{skill}</Skills>
        ))}
      </SkillsContainer>
      </div>
  )
}


const Icons = () => {
  let screen;

  if (window.innerWidth > 1200) {
    screen = (
       <SkillsFeatures>
        <h1 style={{ fontSize: '2em', color: 'rgb(0, 62, 128)' }} >Skills</h1>
          <SkillsItem>
            <div className="skills-title">Frontend Development</div>
                <MemberComponent skills={["Javascript","React","HTML5","CSS","Bootstrap","React Router","Styled Components"]} />
          </SkillsItem>
          <SkillsItem >
            <div className="skills-title">Backend Development</div>
            <MemberComponent skills={["Node.js","Express.js","Python","Flask","Jinja","SQL","MySQL","SQLite","MongoDB"]} />
          </SkillsItem>
          <SkillsItem >
            <div className="skills-title" >Testing and Deployment</div>
            <MemberComponent  skills={["Jest","Cypress","Heroku","Styled Components"]} />
          </SkillsItem>
          <SkillsItem >
            <div className="skills-title" >Other Technologies</div>
            <MemberComponent skills={["Authorization: OAth2, JSON web tokens","Version Control: Git","Design: Procreate"]} />
          </SkillsItem>
        </SkillsFeatures>
    )
  } else if (window.innerWidth > 665) {
    screen =(
      <>
       <SkillsFeatures>
        <h1 className="features-title" >Skills</h1>
        <SkillsItem>
            <div className="skills-title">Frontend Development</div>
                <MemberComponent skills={["Javascript","React","HTML5","CSS","Bootstrap","React Router","Styled Components"]} />
          </SkillsItem>
          <SkillsItem >
            <div className="skills-title">Backend Development</div>
            <MemberComponent skills={["Node.js","Express.js","Python","Flask","Jinja","SQL","MySQL","SQLite","MongoDB"]} />
          </SkillsItem>
          <SkillsItem >
            <div className="skills-title" >Testing and Deployment</div>
            <MemberComponent  skills={["Jest","Cypress","Heroku","Styled Components"]} />
          </SkillsItem>
          <SkillsItem >
            <div className="skills-title" >Other Technologies</div>
            <MemberComponent skills={["Authorization: OAth2, JSON web tokens","Version Control: Git","Design: Procreate"]} />
          </SkillsItem>
        </SkillsFeatures>
      </>
    )
  } else {
  screen = (
      <> 
       <SkillsFeatures>
        <h1 className="features-title" >Skills</h1>
          <SkillsItem >
            <div className="skills-title">Frontend Development</div>
              <MemberComponent skills={["Javascript","React","HTML5","CSS","Bootstrap","React Router","Styled Components"]} />
          </SkillsItem>
          <SkillsItem >
            <div className="skills-title">Backend Development</div>
            <MemberComponent skills={["Node.js","Express.js","Python","Flask","Jinja","SQL","MySQL","SQLite","MongoDB"]} />
          </SkillsItem>
          <SkillsItem >
            <div className="skills-title">Testing and Deployment</div>
              <MemberComponent skills={["Jest","Cypress","Heroku","Fly.io"]} />
            </SkillsItem>
          <SkillsItem >
            <div className="skills-title">Other Technologies</div>
              <MemberComponent skills={["Authorization: OAth2, JSON web tokens","Version Control: Git","Design: Procreate"]} />
            </SkillsItem>
        </SkillsFeatures> 
      </>
  )
  }

  return (
    <div>{screen}</div>
    )}

export default Icons;


