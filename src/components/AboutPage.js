import React from "react";

import '../App2.css';
import { Parallax } from "react-parallax";
import Icons from './Skills.js'
import Nav from './NavBar'
import Footer from './Footer'


import StandArt from "../assets/Stand_Art.jpg"
import StandArt2 from "../assets/Stand_Art2.jpg"
import StandArt3 from "../assets/Stand_Art3.jpg"
import StandArt4 from "../assets/Stand_Art4.jpg"
import StandArt5 from "../assets/Stand_Art5.jpg"

function About() {
  let screen;

if (window.innerWidth > 1700) {
  screen = (
<div className='about-page-height'>
  <Nav />
  <div>
    <Parallax 
      bgImage={StandArt} 
      blur={{ min: -10, max: 10 }}
      bgImageClassName="opaque-image"
      strength={300} 
      style={{ height: '47rem', marginBottom: '5rem' }}
    >
      <div></div>
    </Parallax>
    <Parallax >
      <div style={{ position: 'relative', top: '20rem', marginBottom: '-15rem' }}>
        <div className="boxs-title">
          <h2 style={{marginTop: '250px', marginBottom: '45px', marginLeft: '5vw', color: 'rgb(0, 62, 128)', fontSize: '2.5em'}}>About me:</h2>
          <div className="box-con">
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              I developed a deeper interest in the tech industry and started learning Python and Javascript when I returned to the United States in 2017.  I initially got involved by volunteering at various tech conferences held throughout Los Angeles like the International Conference for Machine Learning (ICML), Research Methods and Data Science (RMDS), and DataConLA.
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              Returning to the United States in 2017, I taught Kindergarten at a private school in Pacific Palisades, continuing a teaching career of nearly a decade where I taught English and trained teachers in Thailand and South Korea. In addition to all of the skills I gained from teaching, I also gained leadership and management experience where I was responsible for new teacher training, ongoing teacher development, leading team meetings, and building year long curriculums.

            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              In the past year, I’ve built and deployed four full stack applications by completing Harvard’s CS50: Introduction to Computer Science course through EdX and taking courses like the University of Helsinki’s Full Stack Open, which focuses on building with React, NodeJS and MongoDB. The full stack applications I’ve built include:
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              <ul>
                <li>
                A simple app that implements basic CRUD methods to manage a phonebook contacts list.
                </li>
                <li>
                Another simple app that implements two different APIs to display country facts and a 3-day weather forecast.
                </li>
                <li>
                Harvard CS50’s final project was a stock portfolio manager that was built with Python and flask.
                </li>
                <li>
                And my own personal project that implements several APIs to track the sales of different NFT marketplaces.
                </li>
              </ul>
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              I’ve also built this portfolio site to showcase all of these projects. It has information about what they are, what they were built with, what I learned exactly, demos for each of the applications and access to the GitHub source code. It also shows some of the artwork I like to create and a blog with different Leet Code solutions that I walk through with visual guides that I’ve created.
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              I enjoy the process of learning, the challenges of building and solving problems for both the frontend and backend, and finding positive and impactful ways to contribute to a team. In my free time, I also like to make art and play golf.
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              Be sure to see the full stack applications I've built in the Projects section and check out my artwork and blog posts!
            </div>
          </div>
        </div>
      </div>
    </Parallax>
    <Parallax>
      <Icons />
    </Parallax>
  </div>
  <Footer/>
</div>

  )
}
else if (window.innerWidth > 1200) {
  screen = (
<div className='about-page-height'>
  <Nav />
  <div>
    <Parallax 
      bgImage={StandArt} 
      blur={{ min: -10, max: 10 }}
      bgImageClassName="opaque-image"
      strength={300} 
      style={{ height: '47rem', marginBottom: '5rem' }}
    >
      <div></div>
    </Parallax>
    <Parallax >
      <div style={{ fontSize: '1em', margin: '2vw' }}>
              <h2 style={{ marginBottom: '5vh', marginLeft: '5vw', color: 'rgb(0, 62, 128)', fontSize: '2em' }}>About me:</h2>
              <div className="box-con">
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              I developed a deeper interest in the tech industry and started learning Python and Javascript when I returned to the United States in 2017.  I initially got involved by volunteering at various tech conferences held throughout Los Angeles like the International Conference for Machine Learning (ICML), Research Methods and Data Science (RMDS), and DataConLA.
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              Returning to the United States in 2017, I taught Kindergarten at a private school in Pacific Palisades, continuing a teaching career of nearly a decade where I taught English and trained teachers in Thailand and South Korea. In addition to all of the skills I gained from teaching, I also gained leadership and management experience where I was responsible for new teacher training, ongoing teacher development, leading team meetings, and building year long curriculums.

            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              In the past year, I’ve built and deployed four full stack applications by completing Harvard’s CS50: Introduction to Computer Science course through EdX and taking courses like the University of Helsinki’s Full Stack Open, which focuses on building with React, NodeJS and MongoDB. The full stack applications I’ve built include:
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              <ul>
                <li>
                A simple app that implements basic CRUD methods to manage a phonebook contacts list.
                </li>
                <li>
                Another simple app that implements two different APIs to display country facts and a 3-day weather forecast.
                </li>
                <li>
                Harvard CS50’s final project was a stock portfolio manager that was built with Python and flask.
                </li>
                <li>
                And my own personal project that implements several APIs to track the sales of different NFT marketplaces.
                </li>
              </ul>
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              I’ve also built this portfolio site to showcase all of these projects. It has information about what they are, what they were built with, what I learned exactly, demos for each of the applications and access to the GitHub source code. It also shows some of the artwork I like to create and a blog with different Leet Code solutions that I walk through with visual guides that I’ve created.
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              I enjoy the process of learning, the challenges of building and solving problems for both the frontend and backend, and finding positive and impactful ways to contribute to a team. In my free time, I also like to make art and play golf.
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              Be sure to see the full stack applications I've built in the Projects section and check out my artwork and blog posts!
            </div>
          </div>
        </div>
    </Parallax>
    <Parallax>
      <Icons />
    </Parallax>
  </div>
  <Footer/>
</div>

  )
}

else if (window.innerWidth > 665) {
  screen = (
<div className='about-page-height'>
      <Nav />
        <div  >
        <Parallax 
          bgImage={StandArt} 
          blur={{ min: -10, max: 10 }}
          bgImageClassName="opaque-image"
          strength={300} 
          style={{ height: '45rem' }}
          >
        </Parallax>
        <Parallax >
          <div style={{ fontSize: '1em', margin: '2vw' }}>
              <h2 style={{ marginBottom: '5vh', color: 'rgb(0, 62, 128)', fontSize: '2em' }}>About me:</h2>
          </div>
          <div className="box-con">
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              I developed a deeper interest in the tech industry and started learning Python and Javascript when I returned to the United States in 2017.  I initially got involved by volunteering at various tech conferences held throughout Los Angeles like the International Conference for Machine Learning (ICML), Research Methods and Data Science (RMDS), and DataConLA.
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              Returning to the United States in 2017, I taught Kindergarten at a private school in Pacific Palisades, continuing a teaching career of nearly a decade where I taught English and trained teachers in Thailand and South Korea. In addition to all of the skills I gained from teaching, I also gained leadership and management experience where I was responsible for new teacher training, ongoing teacher development, leading team meetings, and building year long curriculums.

            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              In the past year, I’ve built and deployed four full stack applications by completing Harvard’s CS50: Introduction to Computer Science course through EdX and taking courses like the University of Helsinki’s Full Stack Open, which focuses on building with React, NodeJS and MongoDB. The full stack applications I’ve built include:
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              <ul>
                <li>
                A simple app that implements basic CRUD methods to manage a phonebook contacts list.
                </li>
                <li>
                Another simple app that implements two different APIs to display country facts and a 3-day weather forecast.
                </li>
                <li>
                Harvard CS50’s final project was a stock portfolio manager that was built with Python and flask.
                </li>
                <li>
                And my own personal project that implements several APIs to track the sales of different NFT marketplaces.
                </li>
              </ul>
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              I’ve also built this portfolio site to showcase all of these projects. It has information about what they are, what they were built with, what I learned exactly, demos for each of the applications and access to the GitHub source code. It also shows some of the artwork I like to create and a blog with different Leet Code solutions that I walk through with visual guides that I’ve created.
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              I enjoy the process of learning, the challenges of building and solving problems for both the frontend and backend, and finding positive and impactful ways to contribute to a team. In my free time, I also like to make art and play golf.
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              Be sure to see the full stack applications I've built in the Projects section and check out my artwork and blog posts!
            </div>
          </div>
        </Parallax>


      <Parallax  >
        <Icons />
      </Parallax>

      </div>
      <Footer/>

    </div>
  )
}

else {
  screen = (
  <div className='about-page-height'>
      <Nav />
        <div >
        <Parallax 
          bgImage={StandArt5} 
          blur={{ min: -10, max: 10 }}
          bgImageClassName="opaque-image"
          strength={300}
          style={{ height: '47rem', marginBottom: '7rem' }}
          >
        </Parallax>
        <Parallax  >
        <div style={{ fontSize: '1em', margin: '2vw' }}>
              <h2 style={{ marginBottom: '5vh', color: 'rgb(0, 62, 128)', fontSize: '1.3em' }}>About me:</h2>
              <div className="box-con">
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              I developed a deeper interest in the tech industry and started learning Python and Javascript when I returned to the United States in 2017.  I initially got involved by volunteering at various tech conferences held throughout Los Angeles like the International Conference for Machine Learning (ICML), Research Methods and Data Science (RMDS), and DataConLA.
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              Returning to the United States in 2017, I taught Kindergarten at a private school in Pacific Palisades, continuing a teaching career of nearly a decade where I taught English and trained teachers in Thailand and South Korea. In addition to all of the skills I gained from teaching, I also gained leadership and management experience where I was responsible for new teacher training, ongoing teacher development, leading team meetings, and building year long curriculums.

            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              In the past year, I’ve built and deployed four full stack applications by completing Harvard’s CS50: Introduction to Computer Science course through EdX and taking courses like the University of Helsinki’s Full Stack Open, which focuses on building with React, NodeJS and MongoDB. The full stack applications I’ve built include:
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              <ul>
                <li>
                A simple app that implements basic CRUD methods to manage a phonebook contacts list.
                </li>
                <li>
                Another simple app that implements two different APIs to display country facts and a 3-day weather forecast.
                </li>
                <li>
                Harvard CS50’s final project was a stock portfolio manager that was built with Python and flask.
                </li>
                <li>
                And my own personal project that implements several APIs to track the sales of different NFT marketplaces.
                </li>
              </ul>
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              I’ve also built this portfolio site to showcase all of these projects. It has information about what they are, what they were built with, what I learned exactly, demos for each of the applications and access to the GitHub source code. It also shows some of the artwork I like to create and a blog with different Leet Code solutions that I walk through with visual guides that I’ve created.
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              I enjoy the process of learning, the challenges of building and solving problems for both the frontend and backend, and finding positive and impactful ways to contribute to a team. In my free time, I also like to make art and play golf.
            </div>
            <div style={{textAlign: 'left', maxWidth: '70vw', color: 'black', margin: '2vh' }}>
              Be sure to see the full stack applications I've built in the Projects section and check out my artwork and blog posts!
            </div>
          </div>
          </div>
        </Parallax>


      <Parallax style={{position: 'relative' }} >
        <Icons />
      </Parallax>

      <Footer/> 
  </div>
  </div>
  )
}


  return (
    <div>
      {screen}
    </div>
  );
}

export default About;
