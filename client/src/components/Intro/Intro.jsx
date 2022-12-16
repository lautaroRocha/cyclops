import React from "react";
import Slider from "../Slider/Slider";
import './intro.css'

function Intro(){

    let imgForCarru = [{link:'./aero.webp', des:'una bici ágil y liviana'}, 
    {link:'./helmet.png', des: 'un casco para la ciudad'} ]

    return(
        <>
        <div className="intro">
            <div className="intro-txt">
                <h1>¡Bienvenidos a <span>Cyclops!</span></h1>
                <p>tu tienda de ciclismo</p>
            </div>
            <Slider pics={imgForCarru}/>
        </div>
        <div className="back-img"></div>
        </>
    )
}

export default Intro;