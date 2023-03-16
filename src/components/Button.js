import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import WebFont from 'webfontloader';



const Btn = styled.button`
display: inline-block;
background-color: rgb(248,243,233);
color: rgb(0, 62, 128);
outline: none;
border: 1px solid rgb(0, 62, 128,0.4);
box-shadow: 5px 7px 15px 2px rgba(0,0,0,0.3);

font-size: ${props => props.fontSize};
padding: 1rem 1.5rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 1px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}



@media (max-width: 75em) {
  font-size: 1.5em
}

@media (max-width: 42em) {
font-size: 1em

}
`

const Button = ({text, link, fontSize}) => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins']
      }
    });
   }, []);

  return (
    
<a href={link} aria-label={text} rel="noreferrer" style={{fontSize: fontSize}}>
<Btn fontSize={fontSize} className='font-load'>
{text}
</Btn>
</a>
  )
}

export default Button