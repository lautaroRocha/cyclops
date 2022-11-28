import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../../App";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './productdetail.css'

function ProductDetail(props){
   
    const [product, setProduct] = useState(null)
    const url = window.location.href;

    useEffect(()=>{
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
 

    return(
        <div className="wrapper">
            {product &&
            <div className="detail">
                <div className="detail-col">
                    <div className="detail-blob glass">
                        <h2>{product.title}</h2>
                        <img src={product.img} alt="" />
                    </div>
                </div>
                <div className="detail-col">
                    <span>{product.price}</span>
                    <div className="detail-actions">
                        <button className="glass" onClick={() => {props.addToCart(product)}}>AÑADIR A COMPRA</button>
                        <Link className="glass" to="/products">
                            VOLVER
                        </Link>
                        <ToastContainer position="top-right"
                            autoClose={1000}
                            hideProgressBar={true}
                            newestOnTop={true}
                            closeOnClick
                            rtl={true}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"/>
                    </div>
                </div>
            </div>}
        <div className="back-img"></div>
        </div>
    )

}

export default ProductDetail