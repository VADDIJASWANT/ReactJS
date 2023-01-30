import trollFace from '../assets/Troll_Face.png' 
export default function Header(){
    return(
        <div className="Header">
            <section className='Header-logo'>
                <img src={trollFace} className="Header-img"/>
                <span className='Header-title'>MemeGenerator</span>
            </section>
            <section className='Header-desc'>React Course - Project 3</section>
        </div>
    )
}