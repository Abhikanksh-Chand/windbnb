import React, { Component } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
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
import left from "../assets/icons/left.svg"
import right from "../assets/icons/right.svg"



export default class PreviousNextMethods extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 12,
        slidesToScroll: 3
      };
      return (
        <div className="car-bar">

            <button className="filter-left" onClick={this.previous}>
            <img src={left} alt=" "></img>
            </button>

          <Slider ref={c => (this.slider = c)} {...settings} className="car-div">

            <button className="btn filter-icons" key={1}>
            <img src={omg} alt=" "></img>
            <p>Omg</p>
            </button>
            <button className="btn filter-icons" key={1}>
            <img src={omg} alt=" "></img>
            <p>Omg</p>
            </button>
            <button className="btn filter-icons" key={1}>
            <img src={omg} alt=" "></img>
            <p>Omg</p>
            </button>
            <button className="btn filter-icons" key={1}>
            <img src={omg} alt=" "></img>
            <p>Omg</p>
            </button>
            <button className="btn filter-icons" key={1}>
            <img src={omg} alt=" "></img>
            <p>Omg</p>
            </button>


            <button className="filter-icons"  key={2}>
            <img src={arctic} alt=" "></img>
            <p>Arctic</p>
            </button>

            <button className="filter-icons"  key={3}>
            <img src={luxe} alt=" "></img>
            <p>Luxe</p>
            </button>

            <button className="filter-icons"  key={4}>
            <img src={tropical} alt=" "></img>
            <p>Tropical</p>
            </button>

            <button className="filter-icons"  key={5}>
            <img src={island} alt=" "></img>
            <p>Islands</p>
            </button>
            
            
            <button className="filter-icons"  key={6}>
            <img src={boats} alt=" "></img>
            <p>Boats</p>
            </button>
            
            
            <button className="filter-icons"  key={7}>
            <img src={beach} alt=" "></img>
            <p>Beaches</p>
            </button>
            
            
            <button className="filter-icons"  key={8}>
            <img src={surf} alt=" "></img>
            <p>Surfing</p>
            </button>
            
            
            <button className="filter-icons"  key={9}>
            <img src={pool} alt=" "></img>
            <p>Amazing pool</p>
            </button>
            
            
            <button className="filter-icons"  key={10}>
            <img src={iconic} alt=" "></img>
            <p>Iconic cities</p>
            </button>
            
            
            <button className="filter-icons"  key={11}>
            <img src={views} alt=" "></img>
            <p>Amazing views</p>
            </button>
            
            
            <button className="filter-icons"  key={12}>
            <img src={lake} alt=" "></img>
            <p>Lake</p>
            </button>
            
          </Slider>
            <button className="filter-left" onClick={this.next}>
            <img src={right} alt=" "></img>
            </button>
          
            <button className="filter-btn">
                <img src={filter} alt=" "></img>
                <p>Filters</p>
            </button>
        </div>
      );
    }
  }