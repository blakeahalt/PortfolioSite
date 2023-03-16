import React, { lazy, Suspense, useEffect } from 'react'
import WebFont from 'webfontloader';
import styled, { ThemeProvider } from 'styled-components'
// import Carousel from '../Carousel'
import Button from './Button'
import Loading from './Loading';
import '../App2.css';

import Escher3 from '../assets/Escher3.png'

const Carousel = lazy(() => import("./Carousel"));

// const Section = styled.section`
// width: 100%;
// background-color: ${props => props.theme.text};
// display: flex;
// justify-content: center;
// align-items: center;
// position: relative;
// overflow: hidden;

// @media screen and (max-width: 75em) {
//   width: 100%;
//   background-color: ${props => props.theme.text};
//   display: flex;
//   justify-content: center;
//   min-height: 85rem;
  
// }
// @media screen and (max-width: 42em) {
//   height: 25rem;
//   border: 4px solid black;
// }
// `

const Container = styled.div`
width: 90%;
margin: 0 auto;
${'' /* background-color: lightblue;  */}

display: flex;
align-items: center;

@media screen and (max-width: 75em) {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media screen and (max-width: 42em) {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid pink;
}
`

const Box = styled.div`
width: 50%;
height: auto;
display: flex;
flex-direction: column;


@media screen and (min-width: 1700px) {
  width: 50vw;
  display: flex;
  height: auto;
  justify-content: center;
}
  @media screen and (max-width: 75em) {
  width: 70vw;
  display: flex;
  height: auto;
  justify-content: center;
  
}
@media screen and (max-width: 42em) {
  width: 90vw;
  height: auto;
  font-size: 1em
}
`
 
 
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.body};
  width: 80%;
  align-self: flex-start;
  text-align:center;
  margin: 0 auto;

@media screen and (max-width: 75em) {
  font-size: 1.7em;
  width: 100%;
  text-align:center;
}
@media screen and (max-width: 42em) {
  font-size: 1.5em;
  width: 100%;
  text-align:center;
  margin-top: 0px;
}
`
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  font-weight:400;
  width: 80%;
  align-self: flex-start;
  text-align:center;
  margin: 1rem auto;


  @media screen and (max-width: 75em) {
    width: 100%;
    text-align:center;
    font-size: 1em;

}
  @media screen and (max-width: 42em) { 
    font-size: 1em;
    width: 95%;
    text-align: center;
    justify-content: center;

}

`

const ButtonContainer = styled.div`
 width: 80%;
 margin: 1rem auto;
 display: flex;
 align-self: flex-start;
 justify-content: center;

 @media screen and (max-width: 75em) {
    margin-bottom: 5vh;

  a{
    margin: 0 auto;
    }
  }

  @media screen and (max-width: 42em) {
    
  }
`

const About = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins']
      }
    });
   }, []);

  return (
    <div className='spiro-outside-container font-load'>
      <Container className='spiro-bg' >
        <Box> 
            <Suspense fallback={<Loading />}>
            <Carousel /> </Suspense> 
        </Box>
        <Box > 
          <div className='spiro-desc-container' >
              <Title>
              Spirograph Art
              </Title>
              <SubText>
              A collection of works that incorporate the spirograph design.
              </SubText>
              <SubText>
              Inspired by M.C. Escher's works on mobius strips, I try to incorporate mobius strip designs to the skeletal structure of spirographs.
              </SubText>
              <SubText>
              In other spirograph works, I balance both structure and negative space with color and design. Earth at night works are based on satellite imagery taken from space, while floral works highlight the visual beauty of geometry found in nature.
              </SubText>
          </div>
              <ButtonContainer>
              <Button text="See More" link='/art/spiro' />
              {/* <Button text="See More" link='http://localhost:3000/art/spiro' /> */}
              </ButtonContainer>
        </Box>
      </Container>
    </div>
  )
}

export default About