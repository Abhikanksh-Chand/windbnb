import Globe from "../assets/icons/Globe.svg"
import Upbox from "../assets/icons/up-box.svg"
function Footer(){
    return(
            <footer className="footer--pin">
            <div className="footer-left">
                <p>© 2022 Windbnb,Inc. · <a >Privacy</a> · <a>Terms</a> · <a>Sitemap</a> · <a>Company details</a> · <a>Destinations</a></p>
                </div>
                <div className="footer-right">
                    <img src={Globe}></img>
                    <p>English(IN)</p>
                    <p> ₹ INR </p>
                    <p>Support & resources</p>
                    <img src={Upbox}></img>
                </div>
            </footer>

    );
}

export default Footer;