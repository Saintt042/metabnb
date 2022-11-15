import Location from '../resources/topsect/location.svg';
import { Container4 } from './NavbarrStyle';

const Navbarr = () => {
    return (
        <Container4>
            <div className="navbar">
             
            <div className="links">
                <a href="/"> Restaurant </a>
                <a href="/"> Cottage </a>
                <a href="/"> Castle </a>
                <a href="/"> Fantasy city </a>
                <a href="/"> Beach </a>
                <a href="/"> Cabins </a>
                <a href="/"> Off-grid </a>
                <a href="/"> Farm </a>
            </div>
            <div className="loggo">
             <img src={ Location } alt="location" />
             </div>
        </div>
        </Container4>
    );
}
 
export default Navbarr;