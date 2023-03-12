import React from 'react'
import Nav from './NavBar'
import Footer from './Footer'

import ResumePage from "../assets/Resume.pdf"
import ResumeImage from "../assets/Resume.png"
import ResumePDF from "../assets/Resume.pdf"
import '../App2.css';


const ResumeIframe = () => {
    const onButtonClick = () => {
        fetch(ResumePDF).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "Resume.pdf";
                alink.click();
            })
        })
    }
    return (
        <>
        <Nav />
        <div className="resume-iframe-length" >
            <iframe src={ResumePage} width="95%" height="auto" title="Resume" ></iframe>
        </div>
        <center >
            <button style={{ marginTop: '3vh', marginBottom: '3vh', height: '3em', borderRadius: '25px', padding: '1vh' }} onClick={onButtonClick}>
                Download PDF
            </button>
        </center>
        <Footer/>
        </>
    )
}

const Resume = () => {
    const onButtonClick = () => {
        fetch(ResumePDF).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "Resume.pdf";
                alink.click();
            })
        })
    }

    return (
        <>
        <Nav />
        <div className="resume-length">
            <img src={ResumeImage} width="95%"  alt="Resume"/>
        </div>
        <center>
            <button className='resume-button' onClick={onButtonClick}>
                Download PDF
            </button>
        </center>
        <Footer/>
        </>
    )
}

const DisplayResume = () => {
    const isMinWidth880px = window.matchMedia("(min-width: 880px)").matches;

    return isMinWidth880px ? <ResumeIframe /> : <Resume />;
}

export default DisplayResume;
