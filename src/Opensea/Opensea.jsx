import mbtoken from '../resources/topsect/mbtoken.png';
import opensea22 from '../resources/topsect/opensea22.png';
import metamask11 from '../resources/topsect/metamask11.png';
import { Container1 } from './OpenseaStyle';



const Opensea = () => {
    return (
       <Container1>
         <div className="tokenimg">
            <img src={ mbtoken } alt="mbtoken" />
            <img src={ metamask11 } alt="metamask11" />
            <img src={ opensea22 } alt="opensea22" />
        </div>
       </Container1>
    );
}
 
export default Opensea;