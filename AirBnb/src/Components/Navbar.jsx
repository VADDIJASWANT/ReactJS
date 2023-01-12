import airbnblogo from "../assets/Airbnblogo.png"


export default function Navbar(){
    return(
        <div className="Navbar">
        <img src={airbnblogo} className="Navbar_logo" />
        </div>
    )
}