import React from 'react';

const AdminOrdersView = (props) => {
    return (
        <div>
            {props.orders !== null ? props.orders.map((ord)=>{
                return(
                <div className="rep-ord" key={ord._id}>
                    <span>{ord.firstName + ord.lastName}</span>
                    <span>{ord.order.lenght}</span>
                    <span>{ord.status}</span>
                    <span>{ord._id}</span>
                </div>)
            }) : <span>no tienes órdenes pendientes</span>}
        </div>
    );
}

export default AdminOrdersView;
