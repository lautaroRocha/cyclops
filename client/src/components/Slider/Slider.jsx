import React, {useState} from "react";
import './slider.css'

function Slider(props){

    const [display, setDisplay] = useState(0)

    const moveItem = (e) => {
        switch(e.target.className){
            case "btn back":
                setDisplay(display - 1);
                loopImages();
                break;
            case "btn nxt":
                setDisplay(display + 1);
                loopImages();
                break;
        }
    }

    function loopImages(){
        if(display === props.pics.length - 1){
            setDisplay(0)
        }else if((display === 0)){
            setDisplay(props.pics.length - 1)
        }
    }

    return(
            <div className="slider">
                <img src={props.pics[display].link} />
                <span>{props.pics[display].des}</span> 
                <div className="btn back" onClick={moveItem}> 🡸 </div>
                <div className="btn nxt" onClick={moveItem}> 🡺 </div>
            </div>
    )
}

export default Slider;