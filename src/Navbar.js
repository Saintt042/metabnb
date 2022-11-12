import Logo1 from './resources/logosect/logo1.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            
            <h1> <img src={Logo1} alt="" /> </h1>
            <div className="links">
                <a href="/"> Home </a>
                <a href="/"> Place to stay </a>
                <a href="/"> NFTs </a>
                <a href="/"> Community </a>
            </div>
            <div className="connectbutton">
                <a href="/"> Connect wallet </a>
                </div>
        </nav>
    );
}
 
export default Navbar;