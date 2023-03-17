import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





function Footer () {
    let screen;
 if (window.innerWidth > 665) {
        screen = (
          <>
          <div style={{display: 'flex', justifyContent: 'flex-end', fontSize: '1em', color: 'rgb(0, 62, 128, 0.6)' }}>
               <div style={{marginTop: '-2.5vh'}}>
                   <a href="#" style={{ fontSize: '1.2em' }}>
                       <div style={{ position: 'relative', marginRight: '1vh', marginBottom: '1vh', fontSize: '0.7em', zIndex: 3 }}>Back to top  <FontAwesomeIcon icon={faArrowAltCircleUp} /></div>
                   </a>
               </div>
           </div>
           <div className='footer-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
           <div style={{textAlign: 'left', margin: '2vh', fontSize: '0.7em', lineHeight: '1.5', color: 'rgb(0, 62, 128, 0.9)' }}>
             <div><strong>CONTACT:</strong></div>
             <div>+1 508-299-9373</div>
             <div>blakeahalt@gmail.com</div>
             <div>
               
             </div>
           </div>
           <div className="sitemap" style={{display: 'flex', textAlign: 'left', marginRight: '15px', fontSize: '0.7em', lineHeight: '1.6', color: 'rgb(0, 62, 128, 0.9)', alignContent: 'center', alignItems: 'center' }}>
               <a style={{ fontSize: '2.5em' }} href="mailto:blakeahalt@gmail.com?subject=Regarding%20Projects&body=Dear%20Blake%2C%0A%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20am%20interested%20in%20learning%20more%20about%20the%20projects%20you%20mentioned%20and%20would%20like%20to%20discuss%20it%20further.%0A%0AThank%20you%20and%20have%20a%20great%20day!"><FontAwesomeIcon icon={faEnvelope} />
               </a>
               <a style={{ fontSize: '2.5em', marginLeft: '2.7vh' }} href='https://www.linkedin.com/in/blakeahalt/' target='_blank' rel='noopener noreferrer'>
                 <FontAwesomeIcon icon={faLinkedin} />
               </a>
               <a style={{ fontSize: '2.5em', marginLeft: '2.5vh' }} href='https://github.com/blakeahalt' target='_blank' rel='noopener noreferrer'>
                 <FontAwesomeIcon icon={faGithub} />
               </a>
               <a style={{ fontSize: '2.5em', marginLeft: '2.5vh' }} href='https://dev.to/blakeahalt' target='_blank' rel='noopener noreferrer'>
                 <FontAwesomeIcon icon={faDev} />
               </a>
               <a style={{ fontSize: '2.5em', marginLeft: '2.5vh', marginRight: '1vh' }} href='https://fineartamerica.com/profiles/blake-ahalt' target='_blank' rel='noopener noreferrer'>
                 <FontAwesomeIcon icon={faPalette} />
               </a>
           </div>
         </div>
         </>
        )
      } else {
        screen = (
          <>
           <div style={{display: 'flex', justifyContent: 'flex-end', fontSize: '1em', color: 'rgb(0, 62, 128, 0.6)' }}>
                <div style={{marginTop: '-2.5vh'}}>
                    <a href="#" style={{ fontSize: '1.2em' }}>
                        <div style={{ position: 'relative', marginRight: '1vh', marginBottom: '1vh', fontSize: '0.7em', zIndex: 3 }}>Back to top  <FontAwesomeIcon icon={faArrowAltCircleUp} /></div>
                    </a>
                </div>
            </div>
            <div className='footer-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{textAlign: 'left', margin: '2vh', fontSize: '0.7em', lineHeight: '1.5', color: 'rgb(0, 62, 128, 0.9)' }}>
              <div><strong>CONTACT:</strong></div>
              <div>+1 508-299-9373</div>
              <div>blakeahalt@gmail.com</div>
              <div>
                
              </div>
            </div>
            <div className="sitemap" style={{display: 'flex', textAlign: 'left', marginRight: '15px', fontSize: '0.7em', lineHeight: '1.6', color: 'rgb(0, 62, 128, 0.9)', alignContent: 'center', alignItems: 'center' }}>
                <a style={{ fontSize: '2em' }} href="mailto:blakeahalt@gmail.com?subject=Regarding%20Projects&body=Dear%20Blake%2C%0A%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20am%20interested%20in%20learning%20more%20about%20the%20projects%20you%20mentioned%20and%20would%20like%20to%20discuss%20it%20further.%0A%0AThank%20you%20and%20have%20a%20great%20day!"><FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a style={{ fontSize: '2em', marginLeft: '2.7vh' }} href='https://www.linkedin.com/in/blakeahalt/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a style={{ fontSize: '2em', marginLeft: '2.5vh' }} href='https://github.com/blakeahalt' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a style={{ fontSize: '2em', marginLeft: '2.5vh' }} href='https://dev.to/blakeahalt' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faDev} />
                </a>
                <a style={{ fontSize: '2em', marginLeft: '2.5vh' }} href='https://fineartamerica.com/profiles/blake-ahalt' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faPalette} />
                </a>
                


            </div>
            {/* <div className="sitemap" style={{textAlign: 'left', marginRight: '15px', paddingTop: '10px', fontSize: '0.7em', lineHeight: '1.6', color: 'rgb(0, 62, 128, 0.9)' }}>
              <div>
                <div><strong>Site Map</strong></div>  
                <div style={{ marginLeft: '5px', display: 'flex', flexDirection: 'column'}} >
                  <a href='/'>Home</a>
                  <a href='/about'>About</a>
                  <a href='/projects'>Projects</a>
                  <a href='/art'>Art</a>
                  <a href='/blog'>Blog</a>
                  <a href='/resume'>Resume</a>
                </div>              
              </div>
            </div> */}
          </div>
          
          </>
        )
      }
    return (
        <div>
        {screen}
        </div>
    );
  }
  
  export default Footer
  