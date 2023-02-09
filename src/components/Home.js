import '../App.css';
import { Parallax } from "react-parallax";
import styled from 'styled-components';
import Team from './Team.js'
import Resume from './Resume.js'
import icon1 from "../assets/i1.png";

function Home() {

  return (
    <div >
        <div className="container">
        <Parallax style={{backgroundColor: 'rgb(26, 26, 26)' }} 
          blur={{ min: -5, max: 5 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{ height: 725 }}>
            <div className="boxs header">
              <h1 className="title">Hi, I'm Blake,</h1>
              <h4 className="introduction">
                a full stack developer and artist.
              </h4>

            </div>
          </div>
        </Parallax>

        <Parallax  >
          <div style={{ height: 750 }}>
              <h1 >About Me</h1>
          </div>
        </Parallax>

        <Parallax className="parallax-projects" style={{height: 700 }}>
          <h1 style={{ marginBottom: 15, color: 'white' }}>Projects</h1>
          <Team/>
        </Parallax>
        
        <Parallax  >
          <div style={{ height: 1700, marginBottom: -150 }}>
              <h1 >Resume</h1>
              <Resume />
          </div>
        </Parallax>
    </div>
    <div className="footer">Footer. This code is open source.</div>

        </div>
  );
}

export default Home;
