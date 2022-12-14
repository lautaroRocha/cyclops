import React from 'react';

const AdminArchivedOrders = (props) => {
    return (
        <div className="rep-prod-cont">
            {props.archivedOrders !== null ? props.archivedOrders.map((ord)=>{
                return(
                <div className="rep-ord" key={ord._id}>
                    <span>{ord.client}</span>
                    <span>${ord.order.slice(-1)[0].total}</span>
                    <span>{ord.date.slice(0, 10)}</span>
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
