import Logo from "../assets/images/Airbnb-Logo.wine.png";
import Searchbar from "./Searchbar"
import Globe from "../assets/icons/Globe.svg"
import Hamburger from "../assets/icons/Hamburger.svg"
import Usercirlce from "../assets/icons/User-circle.svg"

function Navbar(){
    return (
        <div className="navbar">
        <div className="navbar-container">
        <img className="logo-img"src={Logo} alt="Logo" />
        <Searchbar />
        <div className="user-info">
        <button>Become a host</button>
        <button className="btn-globe"><img src={Globe} alt="Globe" /></button>
            <button className="user-profile">
                <img src ={Hamburger}  alt ="hamburger"/>
                <img src ={Usercirlce}  alt ="user-pic"/>
            </button>
        </div>
        </div>
        </div>
    );
}

export default Navbar;