import React from 'react';

const AdminOrdersView = (props) => {

    return (
        <div className="rep-prod-cont">
            {props.orders !== null ? props.orders.map((ord)=>{
                return(
                <div className="rep-ord" key={ord._id}>
                    <span>{ord.firstName +" "+ ord.lastName}</span>
                    <span>${ord.order.slice(-1)[0].total}</span>
                    <span>{ord.status}</span>
                    <span>
                        {ord.order.map((ele, idx)=>{ 
                            return(
                            <p key={idx}>{ele.title} {ele.quantity}</p>
                        )})}
                    </span>
                    {ord.status !== "Done" ?
                    <button onClick={()=>{props.updateOrderState(ord._id)}}>ACTUALIZAR ESTADO</button> : 
                    <button onClick={()=>{props.archiveOrder(ord)}}>ARCHIVAR ORDEN</button>
                    }
                    <span>{ord._id}</span>
                </div>
            )
        }) : <span>no tienes órdenes pendientes</span>}
        </div>
    );
}

export default AdminOrdersView;
