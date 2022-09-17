import left from "../assets/icons/left.svg"
import right from "../assets/icons/right.svg"
import filter from "../assets/icons/filter.svg"
import lake from "../assets/images/lake.png"
import omg from "../assets/images/omg.png"
import beach from "../assets/images/beaches.png"
import pool from "../assets/images/pools.png"
import iconic from "../assets/images/iconic.png"
import surf from "../assets/images/surf.png"
import arctic from "../assets/images/arctic.png"
import island from "../assets/images/islands.png"
import luxe from "../assets/images/luxe.png"
import boats from "../assets/images/boats.png"
import tropical from "../assets/images/tropical.png"
import views from "../assets/images/views.png"

function Filters (){
    return(
        <div className="filter-container">
        <div className="filter-bar">
            <button className="filter-left">
            <img src={left} alt=" "></img>
            </button>
            <button className="btn filter-icons">
            <img src={omg} alt=" "></img>
            <p>Omg</p>
            </button>
            <button className="filter-icons">
            <img src={arctic} alt=" "></img>
            <p>Arctic</p>
            </button>
            <button className="filter-icons">
            <img src={luxe} alt=" "></img>
            <p>Luxe</p>
            </button>
            <button className="filter-icons">
            <img src={tropical} alt=" "></img>
            <p>Tropical</p>
            </button>
            <button className="filter-icons">
            <img src={island} alt=" "></img>
            <p>Islands</p>
            </button>
            <button className="filter-icons">
            <img src={boats} alt=" "></img>
            <p>Boats</p>
            </button>
            <button className="filter-icons">
            <img src={beach} alt=" "></img>
            <p>Beaches</p>
            </button>
            <button className="filter-icons">
            <img src={surf} alt=" "></img>
            <p>Surfing</p>
            </button>
            <button className="filter-icons">
            <img src={pool} alt=" "></img>
            <p>Amazing pool</p>
            </button>
            <button className="filter-icons">
            <img src={iconic} alt=" "></img>
            <p>Iconic cities</p>
            </button>
            <button className="filter-icons">
            <img src={views} alt=" "></img>
            <p>Amazing views</p>
            </button>
            <button className="filter-icons">
            <img src={lake} alt=" "></img>
            <p>Lake</p>
            </button>
            <button className="filter-left">
            <img src={right} alt=" "></img>
            </button>

            <button className="filter-btn">
                <img src={filter} alt=" "></img>
                <p>Filters</p>
            </button>
            
        </div>
        </div>
    );
}

export default Filters;