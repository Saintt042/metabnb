import React from "react";
import { Container8 } from "./ConnectwalletStyle";
import metahead from "../resources/topsect/metahead.svg";
import walletconnect from "../resources/topsect/walletconnect.svg";
import arrowhead from "../resources/topsect/arrowhead.svg";
// import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import xxx from '../resources/topsect/x.svg';

const Connectwallet = () => {
  const { setClick } = useContext(AppContext);
  return (
    <Container8>
      <div className="modalCard">
        <div className="modalHeader">
          <h1>Connect Wallet</h1>
          <img src={xxx} className="icon" alt="xxx" onClick={() => setClick()} />
        </div>
        <div className="wallets">
          <p>Choose your preferred wallet:</p>
          <div className="top">
           <div className="metamask">
           <img src={metahead} alt="wallet" />
            <h4> Metamask </h4>
           </div>
            <img src={arrowhead} alt="angle" />
          </div>
          <div>
           <div className="waletconect">
           <img src={walletconnect} alt="wallet" />
            <h4> WalletConnect </h4>
           </div>
            <img src={arrowhead} alt="angle" />
          </div>
        </div>
      </div>
    </Container8>
  );
};

export default Connectwallet;
