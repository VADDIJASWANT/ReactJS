import pic from "../assets/killua.jpg"
export default function Info(){
    return (
        <div className="info">
            <img src={pic} className="info-pic" alt="my image" />
            <h1>Killua Zoldick</h1>
            <p>Assassin</p>
            <section className="info-buttons">
                <button className="info-button">
                    <i class="fa-solid fa-envelope"></i>
                    Email
                </button>
                <button className="info-button">
                    <i class="fa-brands fa-linkedin"></i>
                    Linkdin
                </button>
            </section>
        </div>
    )
}