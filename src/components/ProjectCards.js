import React from 'react'

import styled from 'styled-components';

import nftImg from '../assets/nft-background.png'
import stockImg from '../assets/stock-background.png'
import countryImg from '../assets/country-background-home.png'
import phoneImg from '../assets/phone-background-home.png'

import { Slide } from 'react-awesome-reveal';
import 'animate.css';
import '../App2.css'

const Container = styled.div`
  display: flex;
  min-height: 20vh;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10vh;
  align-items: center;
  box-shadow: 5px 7px 15px 7px rgba(0, 0, 0, 0.3);
  background-color: rgb(251, 249, 236, 0.6);

  
  @media screen and (max-width: 75em) {
    display: flex;
    min-height: 40vh;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10vh;
    box-shadow: 5px 7px 15px 7px rgba(0, 0, 0, 0.3);
    background-color: rgb(251, 249, 236, 0.6);
  }
  @media screen and (max-width: 43em) {
    display: flex;
    min-height: 40vh;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10vh;
    box-shadow: 5px 7px 15px 7px rgba(0, 0, 0, 0.3);
    background-color: rgb(251, 249, 236, 0.6);
  }

`

const ContainerTitle = styled.div`
  margin: 2vh;
  font-size: 2.5em;
  justify-content: center;
  text-align: center;
  color: rgb(0, 62, 128);
`
const Item = styled.div`
  position: relative;
  padding: 1em;
  color: ${props => props.theme.body};
  justify-content: center;
  min-height: 30vh;
  width: 19vw;
  margin: 1vh;
  margin-top: 1vw;
  margin-bottom: 3vw;

  border: 0.0625rem solid ${props => props.theme.text};
  border-radius: 25px;
  box-shadow: 0.3125vw 0.3125vw 0.75vw 0.3125vw rgba(0,0,0,0.3);
  background-color: rgb(217,194,165);

  @media screen and (max-width: 75rem) {
    padding: 1em;
    min-height: 30vh;
    width: 40vw;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1.5vw;
    margin-bottom: 3vw;
  }
`;


const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto;
  height: 18vh;
  box-shadow: 0.4375vw 0.4375vw 0.9375vw -0.1875vw rgba(0,0,0,0.3);
  background-color: rgba(255,255,255, 0.5);
  border: 0.0625rem solid rgba(0,0,0,0.3);
  margin-bottom: -0.125vw;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  img {
    text-align: center;
    transition: transform 0.3s ease-in-out;
    display: block;
    margin: 0 auto;
    border-radius: 10px;
    width: 100%; 
    min-height: 16vh;
    height: auto;
  }

  &:hover {
    img {
      margin-right:0.1rem;
      border-radius: 25px;
      cursor: pointer;
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 75em) {
    height: 15rem;
    width: auto;
    margin-bottom: 1vh;
    justify-content: center;

    img {
      text-align: center;
      transition: transform 0.3s ease-in-out;
      display: block;
      margin: 0 auto;
      border-radius: 10px;
      width: 100%; 
      height: auto;
    }
  }
`;

const Name = styled.h2`
  font-size: 1.2em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: rgb(0, 62, 128);
  width: 100%;

`;

const Description = styled.p`
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  min-width: 80%;
  height: 100%;
  padding: .5em;
  margin-top: -1em;
  margin-bottom: 1vh;
  color: rgb(0, 62, 128);

  @media screen and (max-width: 75em) {
    font-size: 1em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    height: 2em;
    margin: .5em;
    margin-top: -1.5em;
    margin-bottom: 1vh;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  height: 7.5vw;
  font-size: 2vw;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin-top: 1vh;
  border-radius: 25px;
  background-color: rgb(255, 255, 255, 0.4);
  box-shadow: 0.4375vw 0.4375vw 0.9375vw -0.1875vw rgba(0,0,0,0.3);


  @media screen and (max-width: 75em) {
    width: auto;
    height: 11vw;
    font-size: 1em;
    padding: .5vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    margin-top: 1vh;
    border-radius: 25px;
    background-color: rgb(255, 255, 255, 0.4);
    box-shadow: 0.4375vw 0.4375vw 0.9375vw -0.1875vw rgba(0,0,0,0.3);
  }
`;


const Skills = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 240, 240, 0.8);
  color: rgb(0, 62, 128);
  font-weight: 400;
  border: 1px solid rgb(0, 62, 128);
  border-radius: 10px;
  padding: .7vw;
  margin: .15vw;
  font-size: .9vw;
  line-height: 0.1;
  
  @media screen and (max-width: 75em) {
    padding: 1.4vw;
    margin: .25vw;
    font-size: 1.5vw; /* change to percentage value */
  }
`;


const MemberComponent = ({img, name=" ", desc='',skills=[]}) => {
  return(

    <Item>
      <ImageContainer>
        <img width={500} src={img} alt={name} />
      </ImageContainer>
      <div className='projectcard-name-desc-container'>
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
  let screen;

  if (window.innerWidth > 1200) {
    screen = (
      <>
      <Container>
      <div>
      <ContainerTitle>
          Projects
      </ContainerTitle>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Slide triggerOnce direction='left' delay={350}>
        <a href="/nftpage" >
          <MemberComponent img={nftImg} dir="up" name="NFT Sales Tracker" desc="A personal project that tracks top sales from several NFT marketplaces" skills={["JavaScript","React","Node.js","express.js","JSON Web Token","MySQL","axios","argon2","OAuth2","full stack"]} /></a>
          </Slide>
        <Slide triggerOnce direction='left' delay={150}>
        <a href="/stockpage">
          <MemberComponent img={stockImg} dir="right" name="Stock Trading App" desc="A stock portfolio application that stores user transactions with real-time financial data." skills={["Python","flask","SQL","jinja", "full stack","responsive design"]} /></a>
          </Slide>
        <Slide triggerOnce direction='right' delay={150}>
        <a href="/countrypage">
          <MemberComponent img={countryImg}  name="Country / Weather App" desc="A full stack React app that displays country facts and weather forecasts." skills={["JavaScript","React","Node.js","express.js","axios", "full stack","responsive design"]}  /></a>
        </Slide>
        <Slide triggerOnce direction='right' delay={350}>
        <a href="/phonebookpage">
          <MemberComponent img={phoneImg}  name="Phonebook Feature" desc="A full stack React app that implements CRUD methods to manage a phonebook contacts list." skills={["JavaScript","MongoDB","express.js","React","Node.js","cors","full stack","responsive design"]}  /></a>
        </Slide>
        </div>
      </div>
      </Container>
    </>
    )
  } else if (window.innerWidth > 665) {
screen =(
  <>
      <Container>
      <div>
      <ContainerTitle>
          Projects
      </ContainerTitle>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Slide triggerOnce direction='left' delay={150}>
        <a href="/nftpage" >
          <MemberComponent img={nftImg} dir="up" name="NFT Sales Tracker" desc="A personal project that tracks the top sales of various NFT marketplaces." skills={["JavaScript","React","Node.js","express.js","JSON Web Token","MySQL","axios","argon2","OAuth2","full stack"]} /></a>
          </Slide>
        <Slide triggerOnce direction='right' delay={150}>
        <a href="/stockpage">
          <MemberComponent img={stockImg} dir="right" name="Stock Trading App" desc="A stock portfolio that stores user transactions with real-time stock quotes." skills={["Python","flask","SQL","jinja", "full stack","responsive design"]} /></a>
          </Slide>
        <Slide triggerOnce direction='left' delay={150}>
        <a href="/countrypage">
          <MemberComponent img={countryImg}  name="Country / Weather App" desc="A React application that displays country facts and weather forecasts." skills={["JavaScript","React","Node.js","express.js","axios", "full stack","responsive design"]}  /></a>
        </Slide>
        <Slide triggerOnce direction='right' delay={150}>
        <a href="/phonebookpage">
          <MemberComponent img={phoneImg}  name="Phonebook Feature" desc="A CRUD phonebook feature that manages a contact list." skills={["JavaScript","MongoDB","express.js","React","Node.js","cors","full stack","responsive design"]}  /></a>
        </Slide>
        </div>
      </div>
      </Container>
  </>
)
  } 
  else {
  screen = (
    <>
      <Container>
      <div>
      <ContainerTitle>
          Projects
      </ContainerTitle>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Slide direction='left' delay={350}>
        <a href="/nftpage" >
          <MemberComponent img={nftImg} dir="up" name="NFT Sales Tracker" desc="A personal project that tracks the top sales of various NFT marketplaces." skills={["JavaScript","React","Node.js","express.js","JSON Web Token","MySQL","axios","argon2","OAuth2","full stack"]} /></a>
          </Slide>
        <Slide direction='left' delay={150}>
        <a href="/stockpage">
          <MemberComponent img={stockImg} dir="right" name="Stock Trading App" desc="A stock portfolio that stores user transactions with real-time stock quotes." skills={["Python","flask","SQL","jinja", "full stack","responsive design"]} /></a>
          </Slide>
        <Slide direction='right' delay={150}>
        <a href="/countrypage">
          <MemberComponent img={countryImg}  name="Country / Weather App" desc="A React application that displays country facts and weather forecasts." skills={["JavaScript","React","Node.js","express.js","axios", "full stack","responsive design"]}  /></a>
        </Slide>
        <Slide direction='right' delay={350}>
        <a href="/phonebookpage">
          <MemberComponent img={phoneImg}  name="Phonebook Feature" desc="A CRUD phonebook feature that manages a contact list" skills={["JavaScript","MongoDB","express.js","React","Node.js","cors","full stack","responsive design"]}  /></a>
        </Slide>
        </div>
      </div>
      </Container>
    </>
  )
  }





  return (
    <div>{screen}</div>
  )
}

export default ProjectCards