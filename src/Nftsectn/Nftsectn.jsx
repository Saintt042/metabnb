import React from "react";
import first from '../resources/middlesect/first.png';
import two from '../resources/middlesect/second.png';
import three from '../resources/middlesect/third.png';
import four from '../resources/middlesect/fourth.png';
import five from '../resources/middlesect/fifth.png';
import six from '../resources/middlesect/sixth.png';
import seven from '../resources/middlesect/seven.png';
import eight from '../resources/middlesect/eight.png';
import nine from '../resources/middlesect/nine.png';
import ten from '../resources/middlesect/tenth.png';
import eleven from '../resources/middlesect/eleven.png';
import twelve from '../resources/middlesect/twelve.png';
import thirteen from '../resources/middlesect/thirteen.png';
import fourteen from '../resources/middlesect/fourteen.png';
import fifteen from '../resources/middlesect/fifteen.png';
import sixteen from '../resources/middlesect/last.png';
import Nftcard from "../Nftcard/Nftcard";
import { Container6 } from "./NftsectnStyle";

const Nftsectn = () => {
  return (
    <Container6>

       <div className="firstrow">
       <Nftcard icon={ first } />
        <Nftcard icon={ two } />
        <Nftcard icon={ three } />
        <Nftcard icon={ four } />
       </div>

       <div className="secondrow">
       <Nftcard icon={ five } />
        <Nftcard icon={ six } />
        <Nftcard icon={ seven } />
        <Nftcard icon={ eight } />
       </div>

       <div className="thirdrow">
       <Nftcard icon={ nine } />
        <Nftcard icon={ ten } />
        <Nftcard icon={ eleven } />
        <Nftcard icon={ twelve } />
       </div>

       <div className="fourthrow">
       <Nftcard icon={ thirteen } />
        <Nftcard icon={ fourteen } />
        <Nftcard icon={ fifteen } />
        <Nftcard icon={ sixteen } />
       </div>
        
    
    </Container6>
  );
};

export default Nftsectn;
