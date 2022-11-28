import React from "react";
import './cartitem.css'

function CartItem(props){

    return(
        <div className="cart-item">
                <h4>{props.obj.title}</h4>
                <div>
                    <span className="cart-btn add" onClick={props.multiplyProductInCart}>+</span>
                    <span>{props.obj.quantity}</span>
                    <span className="cart-btn take" onClick={props.removeFromCart}>-</span>
                </div>
                <span className="price-tag">{props.obj.price}</span>
        </div>
    )
}

export default CartItem