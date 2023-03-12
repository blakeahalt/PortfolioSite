import SpiroArt from './ArtPage-spiro-desc.js'
import PortraitArt from './ArtPage-portrait-desc.js'
import Nav from './NavBar'
import Footer from './Footer'
import '../App2.css'


function ArtPage () {

    return (
        <div className='artpage' style={{backgroundColor: 'rgb(221,208,195)'}}>
            <Nav  />
            <div  >
                <SpiroArt/>
            </div>
            <div>
                <PortraitArt/>
            </div>
            <Footer/>
        </div>
    )

}

export default ArtPage