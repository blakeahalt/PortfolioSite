import React from 'react'
import ResumePage from "../assets/Resume.pdf"
import ResumeImage from "../assets/Resume.png"
import ResumePDF from "../assets/Resume.pdf"
import '../App.css';


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
        <div className="resume-iframe-length" >
            <iframe src={ResumePage} width="95%" height="100%" object-fit="contain" title="Resume" ></iframe>
        </div>
        <center style={{marginTop: 30, marginBottom: 40}}>
            <button onClick={onButtonClick}>
                Download PDF
            </button>
        </center>
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
        <div className="resume-length">
            <img src={ResumeImage} width="100%" height="auto" object-fit="contain" alt="Resume"/>
        </div>
        <center style={{ marginBottom: '1em'}}>
            <button className="resume-button" onClick={onButtonClick}>
                Download PDF
            </button>
        </center>
        </>
    )
}

const DisplayResume = () => {
    const isMinWidth1325px = window.matchMedia("(min-width: 1325px)").matches;

    return isMinWidth1325px ? <ResumeIframe /> : <Resume />;
}

export default DisplayResume;
