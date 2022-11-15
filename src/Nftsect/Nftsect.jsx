import Nftcard from "../Nftcard/Nftcard";
import { Container2 } from "./NftsectStyle";

const Nftsect = () => {
  return (
    <Container2>
      <h1 className="inspiration"> Inspiration for your next adventure </h1>
      <div className="nftcardds">
      <Nftcard />
      <Nftcard />
      <Nftcard />
      <Nftcard />
      </div>
     
    </Container2>
  );
};

export default Nftsect;
