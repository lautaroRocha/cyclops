import React from 'react';

const CartStageThree = () => {
    return (
            <div className="client-end">
                <h1>GRACIAS POR SU COMPRA</h1>
                <Link className="cart-return-btn" to="/" onClick={()=>{setStage(1)}}>
                    VOLVER</Link>
            </div>
    );
}

export default CartStageThree;
