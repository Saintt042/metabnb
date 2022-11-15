import React from 'react'
import iconstar from '../resources/middlesect/iconstar.svg';
import firstnft from '../resources/middlesect/first.png';
import { Container5 } from './NftcardStyle'; 

const Nftcard = () => {
  return (
    <Container5>
     <div className="manynfts">
          <div className="nfts">
            <img src={firstnft} alt="nft1" id="firstnfts" />
          </div>

          <div className="contents">
            <div className="texts">
              <p className="desertking">Desert king</p>
              <p className="km">2345km away</p>
              <p className="iconstar">
                <img src={iconstar} alt="iconstar" id="iconstars" />
                <img src={iconstar} alt="iconstar" id="iconstars" />
                <img src={iconstar} alt="iconstar" id="iconstars" />
                <img src={iconstar} alt="iconstar" id="iconstars" />
                <img src={iconstar} alt="iconstar" id="iconstars" />
              </p>
            </div>

            <div className="mbt">
              <h3> 1MBT per night </h3>
              <p className="weeks">available for 2weeks stay</p>
            </div>
          </div>
        </div>
    </Container5>
  )
}

export default Nftcard