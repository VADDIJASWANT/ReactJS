import grouppic from "../../public/assets/multiple_pics_group.png"

export default function Hero(){
    return(
        <div className="HeroSection">
            <img src={grouppic} alt="group pic" className="HeroSection_pic"></img>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}