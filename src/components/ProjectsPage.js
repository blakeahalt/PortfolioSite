import React, {useState} from 'react'

import styled from 'styled-components';
import Nav from './NavBar'
import Footer from './Footer'
import nftImg from '../assets/nft-background.png'
import stockImg from '../assets/stock-background.png'
import countryImg from '../assets/country-background-home.png'
import phoneImg from '../assets/phone-background-home.png'


const Section = styled.section`
display: flex;
overflow: visible;
justify-content: center;
box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3)
background-color: rgb(221,208,195);
margin-top: 15px;

@media screen and (max-width: 75em){
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
padding-top: 75px;
margin-bottom: 50px;
width: 2500px;
height: auto;

box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3);
background-color: rgb(251,249,236,0.6);
border: 1px solid rgb(0,0,0,0.3);

  @media screen and (max-width: 75em) {
    display: flex;
    padding: 10px;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
  }


    @media screen and (max-width: 42em) {
    display: flex;
    padding: 10px;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
    }
`

const ContainerTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 3em;
  text-align: center;
  align-content: center;
  color: rgb(0, 62, 128);
`

const Item = styled.div`
position: relative;
display: flex;
flex-basis: 50%
padding: 1rem .7rem 15rem .7rem;
color: ${props => props.theme.body};
margin: 3rem 1.5rem;
flex-wrap: wrap;
justify-content: center;
width: 33rem;
height: 800px;
backdrop-filter: blur(4px);
margin: 10px;
padding-bottom: 10px;
padding: 10px;
max-height: auto;

border: 1px solid rgb(0,0,0,0.3);
border-radius: 20px;
box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.3);
background-color: rgb(217,194,165);



@media screen and (max-width: 75em) {
    max-width: 27rem;
    display: flex ;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    height: 690px;
    margin: 10px;
}

@media screen and (max-width: 42em) {
    width: 325px;
    display: flex ;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin: 10px;
    height: 585px;
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 460px;
  box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.3);
  background-color: rgb(255,255,255);
  border: 1px solid rgb(0,0,0,0.3);
  margin: 2vh;
  margin-bottom: -2px;
  padding: .5rem;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  img{
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    display: block;
    margin: 0 auto;
    border-radius: 25px;
  }
  
  &:hover{
    img{
      border-radius: 25px;
      cursor: pointer;
      transform: scale(1.05);
    }
  }
  

  @media screen and (max-width: 75em) {
    margin: 1vh;
    padding: 10px;
    height: 300px;
    
  }

  @media screen and (max-width: 42em) {
    margin: 7px;
    width: 300px;
    height: 300px;
  }
`




const Name = styled.h2`
font-size: 1.5em;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
text-align: center;
margin-top: 5px;
margin-bottom: 25px;
color: rgb(0, 62, 128);

@media screen and (max-width: 75em) {
  margin: 7px;
  text-align: center;
  justify-content: center;
  margin-top: 1.5vh;
}
@media screen and (max-width: 42em) {
  margin: 7px;
  width: 300px;
}

`
const Description = styled.p`
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  color: rgb(0, 62, 128);
  margin-top: -20px;


@media screen and (max-width: 75em) {
    display: flex ;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    margin: 5px;
    padding: 5px;
    height: 70px;
    font-size: 1.2em;
}
@media screen and (max-width: 42em) {
    display: flex ;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    margin: 17px;
    height: 2.5em;
    margin-top:-10px;
    margin-bottom:20px;
    font-size: 0.9em;
}
`

const SkillsContainer = styled.div`
  width: 95%;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 145px;
  padding: 7px;
  padding-top: 10px;
  margin: 2px;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  box-shadow: 3px 7px 15px 2px rgba(0,0,0,0.3); 
  background-color: rgb(255,255,255,0.4); 


@media screen and (max-width: 75em) {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 6em;
    align-items: center;
    padding-bottom: 1.5vh;
  }
@media screen and (max-width: 42em) {
    display: flex;
    justify-content: center;
    height: 105px;
    align-items: center;
    padding-bottom: 10px;
  }
`

const Skills = styled.h2`
    display: flex;
    justify-content: center;
    height: 25px;
    text-align: center;
    align-items: center;
    background-color: rgb(240, 240, 240, 0.8);
    color: rgb(0, 62, 128);
    font-weight: 400;
    border: 1px solid rgb(0, 62, 128);
    border-radius: 10px;
    padding: 8px;
    margin: 2px;
    font-size: 1.1em;

@media screen and (max-width: 75em) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(0, 62, 128, 0.7);
    border-radius: 10px;
    margin: 2px;
    height:20px;
    font-size: 0.8em;
  }
@media screen and (max-width: 42em) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(0, 62, 128,0.7);
    border-radius: 10px;
    font-size: 0.8em;
    margin: 1px;
    padding: 6px
  }
`

const MemberComponent = ({img, name='', desc='',skills=[]}) => {
    return(

        <Item>
          <ImageContainer>
            <img width={300} src={img} alt={name} />
          </ImageContainer>
          <div style={{ width: '95%', marginTop: '.5vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '.5vh', textAlign: 'center', border: '1px solid rgb(0,0,0,0.2)', borderRadius: '15px', boxShadow: '3px 7px 15px 2px rgba(0,0,0,0.3)', backgroundColor:'rgb(255,255,255,0.6)' }}>
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
    };

const ProjectsPage = () => {
  return (
    <>
    <Nav />
    <Section className="projectpage-cards">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom:'25px' }}>
        <a href="/nftpage" >
          <MemberComponent img={nftImg} dir="up" name="NFT Sales Tracker" desc="A personal project that implements various APIs to track top sales from NFT marketplaces." skills={["JavaScript","React","Node.js","Express.js","JSON Web Token","MySQL","Axios","Argon2","OAuth2","Full Stack"]} /></a>
          <a href="/stockpage">
          <MemberComponent img={stockImg} dir="right" name="Stock Trading App" desc="A stock portfolio application that stores user transactions with real-time financial data." skills={["Python","Flask","SQL","Jinja", "Full Stack","Responsive Design"]} /></a>
          <a href="/countrypage">
          <MemberComponent img={countryImg}  name="Country / Weather App" desc="A full stack React app that displays country facts and weather forecasts." skills={["JavaScript","React","Node.js","Express.js","Axios", "Full Stack","Responsive Design"]}  /></a>
          <a href="/phonebookpage">
          <MemberComponent img={phoneImg}  name="Phonebook Feature" desc="A full stack React app that implements CRUD methods to manage a phonebook contacts list." skills={["JavaScript","MongoDB","Express.js","React","Node.js","Cors","Full Stack","Responsive Design"]}  /></a>
        </div>
      </Container>
    </Section>
    <Footer/>
    </>
  );
};

export default ProjectsPage;
