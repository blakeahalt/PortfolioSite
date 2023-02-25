import React, {useState} from 'react'

import styled from 'styled-components';
import Nav from './NavBar'
import Footer from './Footer'


import Human from "../assets/Art/HumanHemi.jpg"
import Dizzy from '../assets/portraits/Dizzy_Done.png'
import SaganTyson from '../assets/portraits/Sagan_tyson.png'

const Section = styled.section`
display: flex;
overflow: visible;
justify-content: center;
box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3)
background-color: rgb(221,208,195);
margin-top: 15px;

@media screen and (max-width: 1200px){
  justify-content: center;
  flex-wrap: wrap;
  min-height: 1200px;
}
@media screen and (max-width: 481px){
  justify-content: center;
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
border-radius: 0px;

  @media screen and (max-width: 1200px) {
    display: flex;
    padding: 10px;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
  }


@media screen and (max-width: 665px) {
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height auto;
  text-align: center;
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
flex-basis: 50%
padding: 1rem .7rem 15rem .7rem;
color: ${props => props.theme.body};
margin: 3rem 1.5rem;
flex-wrap: wrap;
justify-content: center;
width: 500px;
height: 650px;
backdrop-filter: blur(4px);
margin: 10px;
max-height: auto;

border: 1px solid rgb(0,0,0,0.3);
border-radius: 20px;
box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.3);
background-color: rgb(204,145,29,0.1);



@media screen and (max-width: 1200px) {
  width: 350px;
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: 455px;
  margin: 10px;
}
}

@media screen and (max-width: 665px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 440px;
  }
`

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;

  box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.3);
  background-color: rgb(255,255,255, 0.5);
  border: 1px solid rgb(0,0,0,0.3);
  margin: 10px;
  margin-bottom: -2px;
  padding: .5rem;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center; 
  overflow: hidden;

  img {
    justify-content: center;
    width: auto;
    height: 100%;
    transition: all 0.3s ease;
    display: flex;
    margin: 0 auto;
    border-radius: 25px;
  }

  &:hover{
    img{
      transform: scale(1.25);
      position: relative;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1200px) {
    margin: 7px;
    padding: 10px;
    height: 315px;
    }
  @media screen and (max-width: 665px) {
    margin: 7px;
    width: 300px;
    height: 325px;
    }
`;


const Name = styled.h2`
font-size: 1.5em;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
color: rgb(0, 62, 128);

@media screen and (max-width: 1200px) {
  margin: 7px;
  width: 300px;
}
@media screen and (max-width: 665px) {
  margin: 7px;
  width: 300px;
}
`

const Description = styled.p`
  font-size: 1.2em;
  text-align: center;
  display: flex;
  justify-content: center;
  color: rgb(0, 62, 128);
  margin-top: -20px;


  @media screen and (max-width: 1200px) {
    display: flex ;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    margin: 5px;
  }
@media screen and (max-width: 665px) {
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin: 17px;
  height: 1em;
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

@media screen and (max-width: 1200px) {
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(0,0,0,0.3); 
  border-radius: 10px;
  width: auto;
  margin: 2px;
}
@media screen and (max-width: 481px) {
  
  border: 1px solid rgb(0,0,0,0.3); 
  border-radius: 10px;
}
`

const MemberComponent = ({img, name='', desc='',skills=[]}) => {

    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleFullScreen = (e) => {
      const imageElement = e.target;
      if (imageElement.requestFullscreen) {
        imageElement.requestFullscreen();
        setIsFullScreen(true);
        document.addEventListener("fullscreenchange", handleFullScreenChange);
      }
    };

    const handleFullScreenChange = () => {
      if (document.fullscreenElement === null) {
        setIsFullScreen(false);
        document.removeEventListener("fullscreenchange", handleFullScreenChange);
      }
    };
    
    const handleExitFullScreen = () => {
      if (isFullScreen) {
        document.exitFullscreen();
      }
    };
    
    return(
      <Item>
        <ImageContainer style={{ maxWidth: 'auto' }}>
          <a onClick={isFullScreen ? handleExitFullScreen : handleFullScreen} >
            <img src={img} alt={name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </a>
        </ImageContainer>
        <div className='spiro-name-desc-container'>
          <Name>{name}</Name>
          <Description>{desc}</Description>
        </div>
      </Item>
    )
  }

const ProjectCards = () => {
  return (
    <>
    <Nav />
    <Section className="spiro-cards">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom:'25px' }}>
          <MemberComponent img={Dizzy} name="Dizzy Gillespie" desc="pencil on paper"/>
          <MemberComponent img={SaganTyson} name="Sagan Tyson" desc="Colored pencil on paper"/>
        </div>
      </Container>
    </Section>
    <Footer/>
    </>
  );
};

export default ProjectCards;
