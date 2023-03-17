import React, { lazy, Suspense, useEffect } from 'react'
import WebFont from 'webfontloader';
import styled, { ThemeProvider } from 'styled-components'
// import Carousel from '../Carousel'
import Button from './Button'
import Loading from './Loading';
import '../App2.css';
import '../App2.css';

import Dizzy from '../assets/portraits/Dizzy_Done_transparent.png'


const Carousel = lazy(() => import("./Carousel2"));

// const Section = styled.section`
// margin-bottom: 5vh;
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
//   height: 100%;

// }
// @media screen and (max-width: 42em) {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;

@media screen and (min-width: 1700px) {
  width: 50vw;
  display: flex;
  height: 100%;
  justify-content: center;
}
@media screen and (max-width: 75em) {

@media screen and (min-width: 1700px) {
  width: 50vw;
  display: flex;
  height: 100%;
  justify-content: center;
}
@media screen and (max-width: 75em) {
  width: 70vw;
  display: flex;
  height: 100%;
  height: 100%;
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
  margin: 0 auto;
  text-align:center;

@media (max-width: 75em){
  font-size: 1.8em;
@media (max-width: 75em){
  font-size: 1.8em;
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
  margin: 1rem auto;
  text-align:center;


  @media (max-width: 75em){
  @media (max-width: 75em){
    width: 100%;
    text-align:center;
    font-size: 1.5em;
    font-size: 1.5em;

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

  @media (max-width: 75em){
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
    <div className='portrait-outside-container font-load'>
      <Container className='portrait-bg'>
        <Box > 
        <Suspense fallback={<Loading />}>
          <Carousel /> </Suspense> </Box>
        <Box> 
        <div className='portrait-desc-container' >
          <Title>
          Portrait Art
          </Title>
          <SubText>
          A collection of portrait art.
          </SubText>
          <SubText>
          Traditional portrait art featuring jazz artists, kaleidoscopic backgrounds, and a glasshead series exploring the relationship between subject and mind.
          </SubText>
        </div>
          <ButtonContainer>
          <Button text="See More" link='/art/portraits' />
          {/* <Button text="See More" link='http://localhost:3000/art/portraits' /> */}
        </ButtonContainer>
         </Box>
      </Container>
    </div>
  )
}

export default About