import React, {useContext} from 'react';
import { ProductsContext } from '../../App';
import './products-filter.css'
import * as icons from '../../utilities/varIconsFilter'

const ProductsFilter = (props) => {

    let products = useContext(ProductsContext);

    return (
        <>
        <div className="filter">
         <ul >
            <li className='glass' onClick={props.filterProducts} >bicicletas{icons.bikes}</li>
            <li className='glass' onClick={props.filterProducts}>{icons.helmets}cascos</li>
            <li className='glass' onClick={props.filterProducts}>{icons.clothing}indumentaria</li>
            <li className='glass' onClick={() => {props.setSelectedProducts(products)}}>{icons.all}</li>
        </ul>
        </div>
        </>
    );
}

export default ProductsFilter;