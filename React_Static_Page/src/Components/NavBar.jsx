import logo from "../assets/react.svg"
function NavBar() {
    return(
        <header>
                <nav className="nav">
                    <div className="nav-logo">
                        <img src={logo} alt="React Logo" style={{width:40}} />ReactFacts
                    </div>
                    <div className="nav-items">
                        React-Course - Project 1
                    </div>
                </nav>
        </header>
    )
}

export default NavBar