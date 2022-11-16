import Logo1 from "../resources/logosect/logo1.png";
import { Container3 } from "./NavbarStyle";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../Context/AppContext";

const Navbar = () => {
    const { setClick } = useContext(AppContext);
  return (
    <Container3>
      <div className="navbar">
        <div className="loggo">
          <img src={Logo1} alt="" />
        </div>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/placetostay">Place to stay</NavLink>

          <a href="/"> NFTs </a>
          <a href="/"> Community </a>
        </div>
        <div className="connectbutton">
          <button className="btnconnect" onClick={() => setClick()} >
          Connect wallet
          </button>
        </div>
      </div>
    </Container3>
  );
};

export default Navbar;