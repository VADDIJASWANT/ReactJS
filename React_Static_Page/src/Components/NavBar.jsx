import reactLogo from './src/assets/react.svg'

function NavBar() {
    return(
        <header>
                <nav className="nav">
                    <img src={reactLogo} className="nav-image" />
                    <ul className="nav-items">
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                </nav>
        </header>
    )
}

export default NavBar