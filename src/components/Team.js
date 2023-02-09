import React from 'react'

import styled from 'styled-components';

import icon1 from "../assets/i1.png";
import icon2 from "../assets/i2.png";
import icon3 from "../assets/i3.png";

const Section = styled.section`
display: flex;
overflow: hidden;
justify-content: center;

@media screen and (max-width: 1000px){
  justify-content: center;
  flex-wrap: wrap;
}
@media screen and (max-width: 481px){
  justify-content: center;
  height: auto;
}
`

const Container = styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: center;
padding: 20px;
${'' /* border: 2px solid ${props => props.theme.text};
border-radius: 0px; */}
height: auto;


  @media screen and (max-width: 1000px) {
    display: flex;
    padding: 10px;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
  }


@media screen and (max-width: 481px) {
flex-wrap: wrap;
justify-content: center;
width: 95%;
}
`

const Item = styled.div`
position: relative;
background-color: rgb(238, 237, 222);
display: flex;
padding: 1rem .7rem 14rem .7rem;
color: ${props => props.theme.body};
margin: 3rem 1.5rem;
flex-wrap: wrap;
justify-content: center;
height: 265px;
backdrop-filter: blur(4px);
margin: 10px;
justify-content: center;
max-width: 250px;

border: 1px solid ${props => props.theme.text};
border-radius: 20px;

&:hover{
  img{
    transform: translateY(-1rem) scale(1.2);
    position: relative;

  }
}

@media screen and (max-width: 1000px) {
  flex-basis: 50%;
  width: 50%;
  display: block ;
  flex-wrap: wrap;
  justify-content: center;
  width: 275px;
  height: 275px;
  margin: 20px;
}

@media screen and (max-width: 481px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 285px;
  min-width: 275px;

  }
`

const ImageContainer = styled.div`
width: auto;
height: auto;
border: 1px solid ${props => props.theme.text};
padding: 1.4rem;
border-radius: 20px;
cursor: pointer;
z-index:1;

img{
  width: 100%;
  height: auto;
transition: all 0.3s ease;
}



@media screen and (max-width: 1000px) {
  margin: 7px;
  padding: 10px;
  }
@media screen and (max-width: 481px) {
  margin: 7px;
  padding: 10px;
  width: 100%;
  }
`

const Name = styled.h2`
font-size: 1.1em;
padding: 4px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
color: ${props => props.theme.text};
width: 100%;
min-height: 4.5vh;

`
const Description = styled.p`
font-size: .8em;
text-align: center;
align-items: center;
width: 90%;
height: 40px;
margin-top: -20px;
margin-bottom: 10px;

@media screen and (max-width: 1000px) {
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: 2em;
  margin: 17px;
  margin-top: -1.5em;
  margin-bottom: 3em;
}
@media screen and (max-width: 481px) {
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin: 17px;
  height: 2.5em;
  margin-top:-10px;
  margin-bottom:10px;
}
`

const SkillsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
max-width: 250px;
margin-top: 10px;
`

const Skills = styled.h2`
font-size: .8em;
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight:400;
border: 1px solid ${props => props.theme.text};
border-radius: 10px;
padding: 5px;
margin: 2px;

@media screen and (max-width: 1000px) {
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

const MemberComponent = ({img, name=" ", desc='',skills=[]}) => {
  return(
    <Item>
      <ImageContainer>
        <img width={500} src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Description>{desc}</Description>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skills key={index}>{skill}</Skills>
        ))}
      </SkillsContainer>
    </Item>
  )
}


const Team = () => {
  return (
    <Section id="team">
      <Container>
      <a href="/countrypage">
          <MemberComponent img={icon2}  name="NFT Sales Tracker" desc="A personal project that tracks the top trending NFT sales using various API's." skills={["JavaScript","React","Node.js","express.js","JSON Web Token","MySQL","axios","argon2","OAuth2","full stack"]} /></a>
        <a href="/stocktrader">
          <MemberComponent img={icon2}  name="Stock Trading App" desc="A stock portfolio application that stores and updates user transactions with real-time stock quotes." skills={["Python","flask","SQL","jinja", "full stack","responsive design"]} /></a>
        <a href="/countrypage">
          <MemberComponent img={icon2}  name="Country / Weather App" desc="A React application that displays country facts and weather forecasts using two APIs." skills={["JavaScript","React","Node.js","express.js","axios", "full stack","responsive design"]}  /></a>
        <a href="/phonebook">
          <MemberComponent img={icon2}  name="Phonebook Feature" desc="A CRUD phonebook feature that adds contact names and numbers built using a MERN stack." skills={["JavaScript","MongoDB","express.js","React","Node.js","cors","full stack","responsive design"]}  /></a>
      </Container>
    </Section>
  )
}

export default Team