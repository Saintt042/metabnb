import { Outlet } from "react-router-dom";
import Subsect from "./Subsect/Subsect";
import Opensea from "./Opensea/Opensea";
import Footer from "./Footer/Footer";
import Nftsect from "./Nftsect/Nftsect";



function App() {
  return (
    <>
      <Outlet />
      <Opensea />
      <Nftsect />
      <Subsect />
      <Footer />
    </>
  );
}

export default App;