import {faEarthAsia} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navbar(){
    return(
        <div className="Navbar">
            <FontAwesomeIcon icon={faEarthAsia} className="fonticon" />
            My Travel Journey
        </div>
    )
}