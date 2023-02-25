import React, {useState} from 'react'

import styled from 'styled-components';
import Nav from './NavBar'
import Footer from './Footer'


import icon1 from "../assets/i1.png";
import icon2 from "../assets/i2.png";
import icon3 from "../assets/i3.png";
import Human from "../assets/Art/HumanHemi.jpg"
import Biggins from "../assets/Art/Biggins.png"
import CamaraLantana from "../assets/Art/CamaraLantana.jpg"
import Chrysanthemum from "../assets/Art/Chrysanthemum.jpg"
import Hydrangea from "../assets/Art/Hydrangea.jpg"
import Korea from "../assets/Art/Korea.jpg"
import NorthAmerica from "../assets/Art/NorthAmerica.jpg"
import RoseOfSharon from "../assets/Art/RoseOfSharon.jpg"
import Tulips from "../assets/Art/Tulips.jpg"
import GlobeThistle from "../assets/Art/GlobeThistle.png"
import BlackEyedSusan from "../assets/Art/BlackEyedSusan.png"
import Misc1 from "../assets/Art/Misc1.png"
import Misc2 from "../assets/Art/Misc2.png"
import Neon from "../assets/Art/NeonSpiro.png"

const Section = styled.section`
display: flex;
overflow: visible;
justify-content: center;
box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3)
background-color: rgb(221,208,195);
margin-top: 15px;
z-index: 0;

@media screen and (max-width: 1200px){
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
z-index: 0;

box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3);
background-color: rgb(251,249,236,0.6);
border: 1px solid rgb(0,0,0,0.3);

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
height: 610px;
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
  height: 475px;
  margin: 10px;
}

@media screen and (max-width: 665px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 445px;
  }
`

const ImageContainer = styled.div`
width: 100%;
height: 460px;

box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.3);
background-color: rgb(255,255,255, 0.5);
border: 1px solid rgb(0,0,0,0.3);
margin: 10px;
margin-bottom: -2px;
padding: .5rem;
border-radius: 20px;
cursor: pointer;
align-content: center;

img{
  justify-content: center;
  width: auto;
  height: auto;
  transition: all 0.3s ease;
  display: block;
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
  height: 300px;
  }
`

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
  margin-top:0px;
  margin-bottom:10px;
  font-size: 1.1em;
}
`
const Description2 = styled.p`
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  color: rgb(0, 62, 128);
  margin-top: -15px;
  opacity: 0.7;


@media screen and (max-width: 1200px) {
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin: 5px;
}
@media screen and (max-width: 665px) {
  display: flex;
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
  border: 1px solid rgb(0,0,0,0.3);  border-radius: 10px;
  width: auto;
  margin: 2px;
}
@media screen and (max-width: 481px) {
  
  border: 1px solid rgb(0,0,0,0.3);  border-radius: 10px;
}
`

const MemberComponent = ({img, name='', desc='', desc2='',skills=[]}) => {

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
            <img src={img} alt={name} style={{ maxWidth: '100%', maxHeight: 'auto' }} />
          </a>
        </ImageContainer>
        <div className='spiro-name-desc-container'>
          <Name>{name}</Name>
          <Description>{desc}</Description>
          <Description2>{desc2}</Description2>
        </div>
      </Item>
    )
  }

const ProjectCards = () => {
  return (
    <>
    <Nav />
    <Section>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom:'25px', width: 'auto', height: 'auto' }}>
          <MemberComponent img={Human} name="World Map" desc="Human Hemisphere at night" />
          <MemberComponent img={NorthAmerica} name="North America" desc="North American Hemisphere at night"/>
          <MemberComponent img={Korea} name="Korea" desc="Korean Peninsula at night"/>
          <MemberComponent img={Biggins} name="Biggins" desc="Biggly"/>
          <MemberComponent img={Hydrangea} name="Hydrangea" desc="Hydrangea Spirograph"/>
          <MemberComponent img={Chrysanthemum} name="Chrysanthemum" desc="Chrysanthemum Spirograph"/>
          <MemberComponent img={RoseOfSharon} name="Rose of Sharon" desc="Rose of Sharon Spirograph"/>
          <MemberComponent img={Tulips} name="Tulips" desc="Tulips Spirograph"/>
          <MemberComponent img={CamaraLantana} name="Camara Lantana" desc="Camara Lantana Spirograph"/>
          <MemberComponent img={BlackEyedSusan} name="Black Eyed Susan" desc="Black Eyed Susan Spirograph"/>
          <MemberComponent img={GlobeThistle} name="Globe Thistle" desc="Globe Thistle Spirograph"/>
          <MemberComponent img={Misc1} name="Misc Spirograph" desc="Miscellaneous Spirograph"/>
          <MemberComponent img={Misc2} name="Misc Spirograph" desc="Miscellaneous Spirograph"/>
          <MemberComponent img={Neon} name="Neon Spirograph" desc="Neon Spirograph"/>
        </div>
      </Container>
    </Section>
    <Footer/>
    </>
  );
};

export default ProjectCards;
