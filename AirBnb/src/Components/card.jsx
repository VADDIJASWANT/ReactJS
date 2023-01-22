import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function CardComponent(props){
    console.log(props)
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = "Sold Out";
    }else if(props.item.location == 'Online'){
        badgeText = "Online"
    }
    return(
        <div className="CardComponent">
            {badgeText && <div className="Card-badge">{badgeText}</div>}
            <img src={`/assets/${props.item.coverImg}`} className="CardComponent_img"></img>
            <section className="CardComponent_Ratings">
                <FontAwesomeIcon icon={faStar} />
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount})</span>
                <span className='gray'>{props.item.location}</span>
            </section>
            <p>{props.item.title}</p>
            <p><span className='CardComponent_BoldText'>From ${props.price}</span> / person</p>
        </div>
    )
}