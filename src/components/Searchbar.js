import Search from "../assets/icons/search.svg"

function Searchbar(){
    return (
        <div className="searchbar-container">
        <div className="searchbar">
            <button>Anywhere</button>
            <button>Any week</button>
            <button>Add guest</button>
            <button className="btn btn-logo"><img src={Search}></img></button>
        </div>
        </div>
    );
}

export default Searchbar;