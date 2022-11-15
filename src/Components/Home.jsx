import React from "react";
import Midsearch from "../Midsearch/Midsearch";
import Nftsect from "../Nftsect/Nftsect";
import Opensea from "../Opensea/Opensea";
import Subsect from "../Subsect/Subsect";

const Home = () => {
  return (
    <>
        <Midsearch />
      <Opensea />
      <Nftsect />
      <Subsect />
    </>
  );
};

export default Home;
