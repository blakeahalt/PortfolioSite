import React, { lazy, Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
// import Carousel from '../Carousel'
import Button from './Button'
import {dark} from './Themes';
import Loading from './Loading';

import Escher from '../assets/Escher.jpeg'
import Escher2 from '../assets/Escher2.jpg'
import Escher3 from '../assets/Escher3.png'


const Carousel = lazy(() => import("./Carousel"));

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;
`
const Container = styled.div`
width: 90%;
margin: 0 auto;
${'' /* background-color: lightblue;  */}

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em){
  width: 85%;
}
@media (max-width: 64em){
  width: 100%;
  flex-direction: column;

  &>*:last-child{
    width: 80%;
  }
}
@media (max-width: 40em){
  &>*:last-child{
    width: 90%;
  }
}
`
const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
  min-height: 50vh;
}
`
 
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 0 auto;

@media (max-width: 64em){
  width: 100%;
  text-align:center;
}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontxl};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontlg};

}
`
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight:400;
@media (max-width: 64em){
  width: 100%;
  text-align:center;
  font-size: ${(props) => props.theme.fontmd};

}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontmd};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontsm};

}

`
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight:400;

@media (max-width: 64em){
  width: 100%;
  text-align:center;
  font-size: ${(props) => props.theme.fontsm};

}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontsm};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontxs};

}

`
const ButtonContainer = styled.div`
 width: 80%;
 margin: 1rem auto;
 display: flex;
  align-self: flex-start;

  @media (max-width: 64em){
width: 100%;

a{
  margin: 0 auto;
}
}

`

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box style={{marginBottom: '-50px'}}> 
            <Suspense fallback={<Loading />}>
            <Carousel /> </Suspense> 
        </Box>
        <Box  > 
          <img style={{position: 'absolute', opacity: 0.15, maxHeight: '500px' }} src={Escher3}/>
            <Title>
            Spirograph Art
            </Title>
            <SubText>
            A collection of works that incorporate the spirograph design.
            </SubText>
            <SubTextLight>
            I'm drawn to the skeletal structure of spirographs. While taking inspiration from M.C. Escher and his works on mobius strips, I explore the mobius strip quality of spirographs.
            </SubTextLight>
            <SubTextLight>
            In other works, I balance a spirograph's structure and negative space with color and design. Earth at night works are based on satellite imagery taken from space, while floral works highlight the visual beauty of geometry found in nature.
            </SubTextLight>
            <ButtonContainer>
            <ThemeProvider theme={dark}>
            <Button text="See More" link='http://localhost:3000/art/spiro' />
            </ThemeProvider>
            </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About