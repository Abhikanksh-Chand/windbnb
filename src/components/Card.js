

function Card(props){
    return(
        <div className="card-container">
        <div className="card-img">
        <img src={props.img} ></img>
        </div>
        <div className="card-content">
        <p className="card-bold">{props.loc}</p>
        <p className="card-gray">{props.dist} kilometers</p>
        <p className="card-gray">{props.date}</p>
        <p className="card-bold">₹{props.price} <span>night</span></p>
        </div>
        </div>
    );
}

export default Card;