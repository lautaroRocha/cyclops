import React from 'react';

const AdminArchivedOrders = (props) => {
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
                    <span>{ord._id}</span>
                </div>
            )
        }) : <span>no tienes órdenes archivadas</span>}
        </div>
    );
}

export default AdminArchivedOrders;
