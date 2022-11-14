import Subsect1 from '../resources/lastsect/subsect.png';
import { Container } from './SubsectStyle';





const Subsect = () => {
    return (
        <Container>
            <div className="contents">
                <h1 className="metabnb_nfts"> Metabnb NFTs </h1>
                <p className="discover"> Discover our NFT gift cards collection. 
                Loyal customers gets amazing gift cards which are traded 
                as NFTs. These NFTs gives our customers access to loads of 
                our exclusive services. </p>
                <button className='learn_more'> Learn more </button>
            </div>

            <div className="photos">
                <img src={Subsect1} alt="cool-img" />
            </div>
        </Container>
    );
}
 
export default Subsect;