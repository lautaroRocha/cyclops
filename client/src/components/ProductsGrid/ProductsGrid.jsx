import React, {useContext, useState} from "react";
import Card from "../../utilities/Card/Card";
import ProductsFilter from "../ProductsFilter/ProductsFilter";
import './products.css'
import { ProductsContext } from "../../App";


function ProductsGrid(){

    let products = useContext(ProductsContext);

    const [selectedProducts, setSelectedProducts] = useState(products);

    function filterProducts(e){
        let cat = e.target.textContent;
        fetch(`http://localhost:5000/products/tag/${cat}`)
            .then(res => res.json())
            .then(data => setSelectedProducts(data))
    }

    function filterProductsByText(e){
        let cat = e.target.value;
        let arrayFiltradoPorNombre = products.filter( (obj) => {return( obj.title.includes(cat.toLowerCase()))});
        setSelectedProducts(arrayFiltradoPorNombre)
    }

    return(
        <>
        <div className="wrapper">
            <div className="products">
                <ProductsFilter className="products-filter" filterProducts={filterProducts} filterProductsByText={filterProductsByText} setSelectedProducts={setSelectedProducts}/>
                <input type="text" onChange={filterProductsByText} placeholder="🔎 Buscá por nombre..."/>
                <div className="products-container">
                {selectedProducts.map( (obj, idx) => {
                    return(
                        <Card obj={obj} key={idx} />
                    )} 
                )}
                </div>
            </div>
            <div className="back-img-5"></div>
        </div>
        
        </>
        )
}


export default ProductsGrid