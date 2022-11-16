import React, { useContext } from "react";
import Connectwallet from "../Connectwallet/Connectwallet";
import AppContext from "../Context/AppContext";
import Midsearch from "../Midsearch/Midsearch";
import Nftsect from "../Nftsect/Nftsect";
import Opensea from "../Opensea/Opensea";
import Subsect from "../Subsect/Subsect";

const Home = () => {
  const { showModal } = useContext(AppContext);
  return (
    <>
    {showModal && <Connectwallet /> }
    
        <Midsearch />
      <Opensea />
      <Nftsect />
      <Subsect />
    </>
  );
};

export default Home;
