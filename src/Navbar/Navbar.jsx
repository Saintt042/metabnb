import Logo1 from '../resources/logosect/logo1.png';
import { Container3 } from './NavbarStyle';

const Navbar = () => {
    return (
        <Container3>
            <div className="navbar">
             <div className="loggo">
             <img src={Logo1} alt="" />
             </div>
            <div className="links">
                <a href="/"> Home </a>
                <a href="/"> Place to stay </a>
                <a href="/"> NFTs </a>
                <a href="/"> Community </a>
            </div>
            <div className="connectbutton">
                <a className='btnconnect' href="/"> Connect wallet </a>
                </div>
        </div>
        </Container3>
    );
}
 
export default Navbar;