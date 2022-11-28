import React from "react";
import Slider from "../Slider/Slider";
import './intro.css'

function Intro(){

    let imgForCarru = [{link:'https://d2d22nphq0yz8t.cloudfront.net/4190f681-07cb-43aa-92d2-6096b01e7b62/https://www.ribblecycles.co.uk/img/705/705/resize/catalog/product/u/l/ultra_sl_pro_ultegra_di2_side_on_1.png/mxw_640,f_auto', des:'una bici ágil y liviana'}, 
    {link:'https://cdn.shopify.com/s/files/1/0027/9379/9739/products/Macon-2.0-MIPS-Matte-Black-1_75f6f0ab-d69d-4eb3-962c-305253768e7f_300x300.png?v=1664512772', des: 'un casco para la ciudad'} ]

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