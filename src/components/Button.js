import React from 'react'
import styled from 'styled-components'



const Btn = styled.button`
display: inline-block;
background-color: rgb(248,243,233);
color: rgb(0, 62, 128);
outline: none;
border: 1px solid rgb(0, 62, 128,0.4);
box-shadow: 5px 7px 15px 2px rgba(0,0,0,0.3);

font-size: ${props => props.fontSize};
padding: 0.9rem 2.3rem;
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


@media (max-width: 48em) {
font-size: ${props => props.fontSize};

}
`

const Button = ({text, link, fontSize}) => {
  return (
    
<a href={link} aria-label={text} rel="noreferrer" style={{fontSize: fontSize}}>
<Btn fontSize={fontSize}>
{text}
</Btn>
</a>
  )
}

export default Button