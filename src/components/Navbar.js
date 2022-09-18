import Logo from "../assets/images/logo5.png";
import Searchbar from "./Searchbar"
import Globe from "../assets/images/globe.png"
import Hamburger from "../assets/icons/Hamburger.svg"
import Usercirlce from "../assets/icons/User-circle.svg"

function Navbar(){
    return (
        <div className="navbar">
        <div className="navbar-container">
        <img className="logo-img"src={Logo} alt="Logo" />
        <Searchbar />
        <div className="user-info">
        <a> <button className="bah">Become a host</button> </a>
        <button className="btn-globe"><
            img src={Globe} alt="Globe" />
        </button>
            <button className="user-profile">
                <img src ={Hamburger}  alt ="hamburger" style={{margin: "0 2px"}}/>
                <img src ={Usercirlce}  alt ="user-pic"style={{margin: "0 2px"}}/>
            </button>
        </div>
        </div>
        </div>
    );
}

export default Navbar;