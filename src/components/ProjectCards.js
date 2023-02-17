import React from 'react'

import styled from 'styled-components';

import icon1 from "../assets/i1.png";
import icon2 from "../assets/i2.png";
import icon3 from "../assets/i3.png";
import nftImg from '../assets/nft-background.png'
import stockImg from '../assets/stock-background.png'
import countryImg from '../assets/country-background-home.png'
import phoneImg from '../assets/phone-background-home.png'

import Slide from 'react-reveal/Slide';


const Section = styled.section`
display: flex;
overflow: visible;
justify-content: center;
box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3)
background-color: rgb(221,208,195);


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
width: 2500px;
height: 675px;
margin-top:50px;

box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3);
background-color: rgb(251,249,236,0.6);
${'' /* border: 2px solid black;
border-radius: 0px; */}

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

const ContainerTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 3em;
  align-content: center;
  color: rgb(0, 62, 128);
`

const Item = styled.div`
position: relative;
display: flex;
padding: 1rem .7rem 15rem .7rem;
color: ${props => props.theme.body};
margin: 3rem 1.5rem;
flex-wrap: wrap;
justify-content: center;
height: 265px;
backdrop-filter: blur(4px);
margin: 10px;
justify-content: center;
max-width: 275px;
max-height: auto;

border: 1px solid ${props => props.theme.text};
border-radius: 20px;
box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.3);
background-color: rgb(204,145,29,0.1);

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
  min-width: 275px;
  min-height: 300px;
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
box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.3);
background-color: rgb(255,255,255, 0.5);
border: 1px solid ${props => props.theme.text};
padding: .2rem;
margin:5px;
border-radius: 20px;
cursor: pointer;
z-index:1;

img{
  margin-bottom: -5px;
  max-width: 250px;
  height: 250px;
  border-radius: 20px;
  ${'' /* border: 1px solid ${props => props.theme.text}; */}

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
margin-top: 0px;
color: rgb(0, 62, 128);
width: 100%;
min-height: 4.5vh;

`
const Description = styled.p`
font-size: .8em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 40px;
  padding: 10px;
  margin: 10px;
  margin-top: -25px;
  margin-bottom: 10px;
  color: rgb(0, 62, 128);


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
max-width: auto;
margin-top: 10px;

`

const Skills = styled.h2`
font-size: .8em;
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
background-color: rgb(230,230,230, 0.5);
color: rgb(0, 62, 128);
font-weight:400;
border: 1px solid rgb(0, 62, 128);
border-radius: 10px;
padding: 6px;
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

const MemberComponent = ({img, name=" ", desc='',skills=[]}) => {
  return(
    <Item>
      <ImageContainer>
        <img width={500} src={img} alt={name} />
      </ImageContainer>
      <div style={{ width: '95%', marginTop: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', textAlign: 'center', border: '1px solid black', borderRadius: '15px', boxShadow: '3px 7px 15px 2px rgba(0,0,0,0.3)', backgroundColor:'rgb(255,255,255,0.6)' }}>
        <Name>{name}</Name>
        <Description>{desc}</Description>
      </div>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skills key={index}>{skill}</Skills>
        ))}
      </SkillsContainer>
    </Item>
  )
}


const ProjectCards = () => {
  return (
    <Section id="ProjectCards">
      <Container>
      <div>
      <ContainerTitle>
          Projects
      </ContainerTitle>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Slide left delay={350} >
        <a href="/nftpage">
          <MemberComponent img={nftImg}  name="NFT Sales Tracker" desc="A personal project that tracks the top trending NFT sales using various API's." skills={["JavaScript","React","Node.js","express.js","JSON Web Token","MySQL","axios","argon2","OAuth2","full stack"]} /></a>
      </Slide>
      <Slide left delay={150} >
        <a href="/stockpage">
          <MemberComponent img={stockImg}  name="Stock Trading App" desc="A stock portfolio application that stores and updates user transactions with real-time stock quotes." skills={["Python","flask","SQL","jinja", "full stack","responsive design"]} /></a>
      </Slide>
      <Slide right delay={150} >
        <a href="/countrypage">
          <MemberComponent img={countryImg}  name="Country / Weather App" desc="A React application that displays country facts and weather forecasts using two APIs." skills={["JavaScript","React","Node.js","express.js","axios", "full stack","responsive design"]}  /></a>
      </Slide>
      <Slide right delay={350} >
        <a href="/phonebookpage">
          <MemberComponent img={phoneImg}  name="Phonebook Feature" desc="A CRUD phonebook feature that adds contact names and numbers built using a MERN stack." skills={["JavaScript","MongoDB","express.js","React","Node.js","cors","full stack","responsive design"]}  /></a>
      </Slide>
        </div>
        </div>
      </Container>
    </Section>
  )
}

export default ProjectCards