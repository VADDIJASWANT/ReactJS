import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Places(props){
    console.log(props.item)
    let Name = props.item.location.split("").map(x=>x.toUpperCase()).join(" ");
    console.log(Name)
    return(
        <div className='Place'>
            <img src={props.item.imageUrl} className="Place-image" />
            <div className='place-details'>
                <section className='place-location'>
                    <FontAwesomeIcon icon={faLocationDot} className="icon" />
                    {Name}
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </section>
                <section className='place-Name'>{props.item.title}</section>
                <section className='place-travelDate'>
                    {props.item.startDate} - {props.item.endDate}
                </section>
                <section className='place-desc'>
                    {props.item.description}
                </section>
            </div>
        </div>
    )
}