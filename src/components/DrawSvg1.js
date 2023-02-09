import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import Vector from '../Icons/Vector'; 

const VectorContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    left: 1rem;
    justify-content: flex-start;
  }
`
const Bounce = keyframes`
  from {  transform: translateX(-50%) scale(0.05);   }
  to {  transform: translateX(-50%) scale(1);   }
`

const Ball = styled.div`
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  width: 1.5rem;
  height: .5rem;
  border-radius: 50%;
  background-color: ${props => props.theme.text};
  animation: ${Bounce} 0.5s linear infinite alternate;

  @media (max-width: 48em) {
    left: 1rem;
  }
`
const Segment = ({ index, lengths }) => {
  const ballRefs = useRef([]);

  const svgRef = useRef(null);
  const ballRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let svgs = document.getElementsByClassName("svg-path");
    let t1;

    // loop through each segment and style it individually
    for (let i = 0; i < svgs.length; i++) {
      let svg = svgs[i];
      let length = lengths[i];

      svg.style.strokeDasharray = length;
      svg.style.strokeDashoffset = length;

      let ballRef = ballRefs.current[i];

      t1 = gsap.timeline({
        scrollTrigger:{
          trigger:svg,
          start:"top center",
          end:"bottom bottom",
          onUpdate: (self) => {
            let draw = length * self.progress;
            svg.style.strokeDashoffset = length - draw;
          },
          onToggle: self => {
            if(self.isActive){
              ballRef.style.display = 'none';
            } else {
              ballRef.style.display = 'inline-block';
            }
          }
        }
      });
    }

    return () => {
      if(t1) t1.kill();
    };
  }, [lengths]);

  return (
    <>
      <Ball ref={ballRef} />
      <VectorContainer ref={svgRef}>
        <Vector />
      </VectorContainer>
    </>
  )
}

const DrawSvg = () => {
  const lengths = [1600, 1600]
  return (
    <>
      {lengths.map((_, index) => (
        <Segment key={index} index={index} lengths={lengths} />
      ))}
    </>
  );
};

export default DrawSvg

