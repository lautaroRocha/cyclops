import React from 'react';

const AdminProductsView = (props) => {
    
    return (
        <>
            <form encType='multipart/form-data' >
                <h3>Nuevo Producto</h3>
                <label htmlFor="title">
                    <input type="text" name='title' ref={props.title} placeholder="Nombre.."/>
                </label>
                <label htmlFor="img-link">
                    <input type="file" name="img-link" id="img" ref={props.imgLink} placeholder="Imagen del product"/>
                </label>
                <label htmlFor="price">
                    <input type="number" name="price"ref={props.price} placeholder="Precio..."/>
                </label>
                <label htmlFor="type">
                    <select type="text" name="type" ref={props.type} placeholder="Categoría..." defaultValue="...">
                        {/* esto viene del endpoint */}
                        <option value="...">...</option>
                        <option value="bicicletas">Bicicletas</option>
                        <option value="indumentaria">Indumentaria</option>
                        <option value="cascos">Cascos</option>
                    </select>
                </label>

                <button onClick={(e) => {props.addNewProduct(e)}}>AÑADIR</button>
            </form>
            <div className="rep-prod-cont">
            {props.products !== null ? props.products.map((prod)=>{
                return(
                <div className="rep-prod" key={prod._id}>
                    <span id="title" onClick={(e)=>{props.editValue(e)}}>{prod.title}</span>
                    <span id="price" onClick={(e)=>{props.editValue(e)}}>{prod.price}</span>
                    <span>{prod.type}</span>
                    <span id="id" onClick={(e)=>{props.removeFromDB(e.target.textContent)}}>{prod._id}</span>
                </div>)
            }) : <span>Añade productos a tu tienda</span>}
            </div>
            </>
    );
}

export default AdminProductsView;
