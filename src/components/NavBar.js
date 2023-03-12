import React, { useState, useRef, useEffect } from 'react';
import '../App2.css';

function Nav({ isWhite }) {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowNav(false);
      }
    }
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [navRef]);

  function handleNavTitleClick() {
    setShowNav(false);
  }

  return (

    <nav ref={navRef} className={`nav ${isWhite ? 'white-nav' : ''}`}>
        <div>
            <a className="home-button" href="/">
                Home
            </a>
        </div>
      {window.innerWidth < 665 ? (
        <>
          <div
            className={`nav-titles ${showNav ? 'show' : 'hide'}`}
            style={{
              backgroundColor: 'rgb(0,0,0,0.7)',
              height: '100vh',
              width: '65%',
              borderRadius: '25px 0 0 25px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingTop: '3vh',
              marginTop: '60px',
              top: 0,
              transition: 'right 0.5s ease-in-out',
              zIndex: 1,
              transform: showNav ? 'translateX(80%)' : 'translateX(0)',
            }}
          >
                <div style={{marginBottom: '10px', fontSize: '1.4em'}}>
                  <a
                    className="navbar-title"
                    href="/about"
                    onClick={handleNavTitleClick}
                  >
                    About
                  </a>
                </div>
                <div style={{marginBottom: '10px', fontSize: '1.4em'}}>
                  <a
                    className="navbar-title"
                    href="/projects"
                    onClick={handleNavTitleClick}
                  >
                    Projects
                  </a>
                </div>
                <div style={{marginBottom: '10px', fontSize: '1.4em'}}>
                  <a
                    className="navbar-title"
                    href="/art"
                    onClick={handleNavTitleClick}
                  >
                    Art
                  </a>
                </div>
                <div style={{marginBottom: '10px', fontSize: '1.4em'}}>
                  <a
                    className="navbar-title"
                    href="/blog"
                    onClick={handleNavTitleClick}
                  >
                    Blog
                  </a>
                </div>
                <div style={{marginBottom: '10px', fontSize: '1.4em'}}>
                  <a
                    className="navbar-title"
                    href="/resume"
                    onClick={handleNavTitleClick}
                  >
                    Resume
                  </a>
                </div>
              </div>
          {/* </div> */}
          <div className="menu-icon" onClick={() => setShowNav(!showNav)}>
            &#9776;
          </div>
        </>
      ) : (
        <>
          <div className={`nav-titles ${showNav ? 'show' : 'hide'}`}>
            <div>
              <a
                className="navbar-title"
                href="/about"
                onClick={handleNavTitleClick}
              >
                About
              </a>
            </div>
            <div>
                <a
                className="navbar-title"
                href="/projects"
                onClick={handleNavTitleClick}
                >
                Projects
                </a>
            </div>
            <div>
              <a
                className="navbar-title"
                href="/art"
                onClick={handleNavTitleClick} >
                Art
              </a>
            </div>
            <div>
              <a 
                className="navbar-title"
                href="/blog"
                onClick={handleNavTitleClick}>
                Blog
              </a>
            </div>
            <div>
              <a 
                className="navbar-title"
                href="/resume"
                onClick={handleNavTitleClick}>
                Resume
              </a>
            </div>
          </div>
          <div className="menu-icon" onClick={() => setShowNav(!showNav
)}>
                &#9776;
                </div>
            </>


        )}
    </nav>
  )
}

export default Nav
