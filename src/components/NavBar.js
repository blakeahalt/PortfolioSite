import '../App.css'

function Nav () {
    return(
    <nav className="nav" id="mainNav">
        <div className="navbar-title">
            <div className="dropdown">
                <a className="dropbtn" href="/profile"> About </a>
            </div>
            <div className="dropdown">
                <a className="dropbtn" aria-current="page" href="/RapidAPICollectionsDay"> Resume </a>
            </div>
            <div className="dropdown">
                <a className="dropbtn" href="/profile"> Projects </a>
            </div>
        </div>
    </nav>
    )
}

export default Nav