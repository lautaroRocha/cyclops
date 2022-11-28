import React, {useState, useEffect} from "react";
import { Link} from "react-router-dom";
import CartStageOne from "../../utilities/CartStages/cartStageOne";
import CartStageTwo from "../../utilities/CartStages/cartStageTwo";
import './cart.css'

function Cart(props){

    const [totalPrice, setTotalPrice] = useState(0)
 
    const [stage, setStage] = useState(1)

    const url = window.location.href;

    const defaultValues = ["", "mm/aa", ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'] ]

    useEffect(() =>{
        let total = 0
        props.cart.forEach( (ele) => total = total + (parseInt(ele.price) * parseInt(ele.quantity)) );
        setTotalPrice(total)
    }, [props.changes])
    
    function updateUserData(e, sec){
        let data = props.userData;
        data[sec] = e.target.value
        props.setUserData(data)
        props.changes ? props.setChanges(false) : props.setChanges(true)
    }

    function sendOrder(){
        let data = props.userData;
        data.order = props.cart;
        props.setUserData(data)
        console.log(data)
        fetch(url, { 
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        cleanCart();
        setTimeout(setStage(3), 2500)
        props.setUserData({firstName : defaultValues[0], 
            lastName : defaultValues[0], 
            delivery : defaultValues[0],
            cardID : defaultValues[2], 
            cardEXP : defaultValues[1],
           order : {}})
    }

    function cleanCart(){
        localStorage.removeItem('order');
    }

    function checkData(){
        let valuesOfUserData = Object.values(props.userData)
        if(valuesOfUserData.includes(...defaultValues)){
            alert('debes llenar todos los campos');
            return;
        }else{
            sendOrder();
        }
    }

    let renderStage;

    switch(stage){
            case 1:
            renderStage = <CartStageOne cart={props.cart} removeFromCart={props.removeFromCart} multiplyProductInCart={props.multiplyProductInCart} totalPrice={totalPrice} setStage={setStage}/>
            break;
            case 2:
            renderStage = <CartStageTwo setStage={setStage} updateUserData ={updateUserData} userData={props.userData} checkData={checkData}/>
            break;
            case 3:
            renderStage = 
            <div className="client-end">
                    <h1>GRACIAS POR SU COMPRA</h1>
                    <Link className="cart-return-btn" to="/" onClick={()=>{setStage(1)}}>
                        VOLVER</Link>
            </div>
    }
    
    return(
        <div className="wrapper">
            <h2>Carrito</h2>
            {renderStage}
        <div className="back-img-3"></div>
        <div className="back-img-2"></div>
        </div>
    )
}

export default Cart;