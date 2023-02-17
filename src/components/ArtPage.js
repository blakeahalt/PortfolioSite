import SpiroArt from './ArtPage-spiro-desc.js'
import PortraitArt from './ArtPage-portrait-desc.js'
import Nav from './NavBar'

function ArtPage () {

    return (
        <div className="art-container">
            <Nav />
            <div style={{marginBottom: '150px'}}>
                <SpiroArt/>
            </div>
            <div style={{marginTop:'-350px'}}>
                <PortraitArt/>
            </div>
        </div>
    )

}

export default ArtPage