import Globe from "../assets/icons/Globe.svg"
import Upbox from "../assets/icons/up-box.svg"
function Footer(){
    return(
            <footer className="footer--pin">
            <div className="footer-left">
                <p>© 2022 Windbnb,Inc. · <a href="https://www.airbnb.co.in/help/article/2855/airbnb-privacy">Privacy</a> · <a href="https://www.airbnb.co.in/help/article/2908/terms-of-service">Terms</a> · <a href="https://www.airbnb.co.in/sitemaps/v2">Sitemap</a> · <a href="https://www.airbnb.co.in/about/company-details">Company details</a> · <a>Destinations</a></p>
                </div>
                <div className="footer-right">
                   <a> <img src={Globe}></img></a>
                    <a>English(IN)</a>
                    <a> ₹ INR </a>
                    <a>Support & resources</a>
                    <a><img src={Upbox}></img></a>
                </div>
            </footer>

    );
}

export default Footer;