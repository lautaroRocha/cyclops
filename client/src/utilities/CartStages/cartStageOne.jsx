
import React from 'react';
import CartItem from '.././CartItem/CartItem';

const CartStageOne = (props) => {
    return (
        <div className="cart">
            <div className="cart-head">
                <h3>Articulo</h3>
                <h3>Cantidad</h3>
                <h3>Precio</h3>
            </div>
            <div className="cart-body">
            {props.cart !== [] &&
            props.cart.map((obj, idx)=>{
                return(<CartItem obj={obj} key={idx} removeFromCart={props.removeFromCart} multiplyProductInCart={props.multiplyProductInCart}/>)})}
            </div>
            <div className="cart-foot">
                <h5>total</h5>
                <span>{props.totalPrice}</span>
            </div>
        {props.totalPrice !== 0 && 
            <button className="btn-one" onClick={()=>{props.setStage(2)}}>
                COMPRAR
            </button>}
        </div>

    );
}

export default CartStageOne;
