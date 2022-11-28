import React from 'react';

const CartStageTwo = (props) => {
    return (
        <div className="client-data">
            <h3>¡Tu orden está casi lista!</h3>
            <p>Completá los datos de pago y entrega para recibir tu pedido</p>
            <form action="">
                <div>
                    <label htmlFor="name">
                        <input placeholder=" Nombre" type="text" name="name" onChange={(e) => {props.updateUserData(e, 'firstName')}}/>
                    </label>
                    <label htmlFor="last-name">
                        <input placeholder="A pellido" type="text" name="last-name" onChange={(e) => {props.updateUserData(e, 'lastName')}}/>
                    </label>
                </div>
                <label htmlFor="pickup-method">
                    <select name="pickup-method" onChange={(e)=>{props.updateUserData(e, 'delivery')}}>
                        <option >...</option>
                        <option value="home delivery" >Entrega a domicilio</option>
                        <option value="post office" >Retiro en correo</option>
                    </select>
                </label>
                <div className="client-card">
                    <div className="client-card-name">
                        <span>{props.userData.firstName}</span>
                        <span>{props.userData.lastName}</span>
                    </div>
                    <div className="client-card-numbers">
                        <p>{props.userData.cardID}</p>
                        <span>{props.userData.cardEXP}</span>
                    </div>
                </div>
            <div className="client-card-data">
                <label htmlFor="card-num" > 
                    <input  placeholder="Número de tarjeta..." type="text" name="card-num"  maxLength='13'onChange={(e) => {props.updateUserData(e, 'cardID')}}/>
                </label>
                <label htmlFor="card-exp" id="card-exp"> 
                    <input placeholder="Vencimiento... (mm/aa)" type="text" name="card-exp" onChange={(e) => {props.updateUserData(e, 'cardEXP')}}/>
                </label>
            </div>
            </form>
            <button onClick={props.checkData}>Confirmar compra</button>
        </div>
        );
}

export default CartStageTwo;
