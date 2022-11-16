import Nftcard from "../Nftcard/Nftcard";
import first from '../resources/middlesect/first.png';
import second from '../resources/middlesect/second.png';
import third from '../resources/middlesect/third.png';
import four from '../resources/middlesect/fourth.png';
import six from '../resources/middlesect/sixth.png';
import seven from '../resources/middlesect/seven.png';
import five from '../resources/middlesect/fifth.png';
import eight from '../resources/middlesect/eight.png';
import { Container2 } from "./NftsectStyle";

const Nftsect = () => {
  return (
    <Container2>
     <div className="allcontent">
     <h1 className="inspiration"> Inspiration for your next adventure </h1>
      <div className="firstrow">
      <Nftcard icon={five} />
      <Nftcard icon={six} />
      <Nftcard icon={seven} />
      <Nftcard icon={eight} />
      </div>

      <div className="secondrow">
      <Nftcard icon={first} />
      <Nftcard icon={second} />
      <Nftcard icon={third} />
      <Nftcard icon={four} />
      </div>
     </div>
     
    </Container2>
  );
};

export default Nftsect;
