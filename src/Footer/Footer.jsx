import { Container } from './FooterStyle';
import copyright from '../resources/logosect/copyright.png'
import metawhite from '../resources/logosect/metawhite.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container>
            <div className="avails">
                <figure className="logo">
                    <img src={metawhite} alt="IconWhite" />
                </figure>
                <div className="socials">
                    <FaFacebook style={{ color: 'white' }} size={ '22px' } />
                    <FaInstagram style={{ color: 'white' }} size={ '22px' } />
                    <FaTwitter style={{ color: 'white' }} size={ '22px' } />
                </div>
                <p className="copyright">
                    <img src={copyright} alt="copyright" />
                </p>
            </div>
            <div className="community">
                <h2> Community </h2>
                <ul>
                    <ul> NFT </ul>
                    <ul> Tokens </ul>
                    <ul> Landlords </ul>
                    <ul> Discord </ul>
                </ul>
            </div>
            <div className="places">
                <h2> Places </h2>
                <ul>
                    <ul> Castle </ul>
                    <ul> Farms </ul>
                    <ul> Beach </ul>
                    <ul> Learn more </ul>
                </ul>
            </div>
            <div className="about">
                <h2> About us </h2>
                <ul>
                    <ul> Road map </ul>
                    <ul> Creators </ul>
                    <ul> Career </ul>
                    <ul> Contact us </ul>
                </ul>
            </div>
        </Container>
    );
}
 
export default Footer;