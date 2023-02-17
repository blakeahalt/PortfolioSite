import React, { useState } from 'react';
import '../App.css'
import Slide from 'react-reveal/Slide';

function Nav ({ isWhite }) {
  const [showNav, setShowNav] = useState(false);

  return(
    <nav className={`nav ${isWhite ? 'white-nav' : ''}`}>
        <div className="home" >
            <a className="home-button" href="/" >Home</a>
        </div>
        
        {window.innerWidth < 665 ? (
            <>
                <div className={`nav-titles ${showNav ? 'show' : 'hide'}`}>
                    <Slide right when={showNav}>
                        <div >
                            <a className="navbar-title" href="/about"> 
                                About</a>
                        </div>
                    </Slide>
                    <Slide right delay={40} when={showNav} >
                        <div >
                            <span className="navbar-title" id="projects" onClick={() => { 
                                window.location.replace('http://localhost:3000/#projects-section')
                                window.scrollBy({ behavior: 'smooth' });
                                }}>Projects</span>
                        </div>
                    </Slide>
                    <Slide right delay={80} when={showNav}>
                        <div >
                            <a className="navbar-title" href="/art"> 
                                Art </a>
                        </div>
                    </Slide>
                    <Slide right delay={120} when={showNav}>
                        <div >
                            <a className="navbar-title" href="/blog"> 
                                Blog </a>
                        </div>
                    </Slide>
                    <Slide right delay={160} when={showNav}>
                        <div >
                            <a className="navbar-title" href="/resume"> 
                                Resume </a>
                        </div>
                    </Slide>
                </div>
                <div className="menu-icon" onClick={() => setShowNav(!showNav)}>
                &#9776;
                </div>
            </>
        ) : (
            <>
                <div className={`nav-titles ${showNav ? 'show' : 'hide'}`}>
                    <div >
                        <a className="navbar-title" href="/about"> 
                            About</a>
                    </div>
                    <div >
                        <span className="navbar-title" id="projects" onClick={() => { 
                            window.location.replace('http://localhost:3000/#projects-section')
                            window.scrollBy({ behavior: 'smooth' });
                            }}>Projects</span>
                    </div>
                    <div >
                        <a className="navbar-title" href="/art"> 
                            Art </a>
                    </div>
                    <div >
                        <a className="navbar-title" href="/blog"> 
                            Blog </a>
                    </div>
                    <div >
                        <a className="navbar-title" href="/resume"> 
                            Resume </a>
                    </div>
                </div>
                <div className="menu-icon" onClick={() => setShowNav(!showNav)}>
                &#9776;
                </div>
            </>


        )}
    </nav>
  )
}

export default Nav
