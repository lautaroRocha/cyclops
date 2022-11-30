import React, {useEffect, useState, useRef} from 'react';
import AdminProductsView from '../../utilities/AdminProductsView/AdminProductsView';
import AdminOrdersView from '../../utilities/AdminOrdersView/AdminOrdersView';
import './adminpanel.css'

const AdminPanel = () => {

    const [view, setView] = useState(null)
    const [products, setProducts] = useState(null)
    const [orders, setOrders] = useState(null)

    const title = useRef()
    const imgLink = useRef()
    const price = useRef()
    const type = useRef()

    useEffect(()=>{
        fetch('http://localhost:5000/admin')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[addNewProduct, removeFromDB])

    useEffect(()=>{
        fetch('http://localhost:5000/admin-orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])


    function addNewProduct(e) {
        e.preventDefault();
        const formData  = new FormData();   
        formData.append("title",title.current.value)
        formData.append("img", imgLink.current.files[0])
        formData.append("price", parseInt(price.current.value));
        formData.append("type", type.current.value)   
        sendtoDB(formData);
        // title.current.value = "";
        // imgLink.current.value = "";
        // price.current.value = "";
        // type.current.value= ""
    }

    function sendtoDB(obj) {
        fetch('http://localhost:5000/admin', { 
            method: 'POST',
            body: obj
          })
          .then( (response) => {
            if (!response.ok){
              const res = response.json()
             .then( (res) => console.log(res.message))
            }else{
              console.log('ok')
            }
          })
    }


    function removeFromDB(_id) {
        fetch(`http://localhost:5000/admin/${_id}`, { 
            method: 'DELETE',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
          })
            .then(res => console.log('Elemento borrado de la base de datos'))
            .catch(err => console.log(err));
    }

    function editValue(e){
        const attribute = e.target.id;
       const value = prompt('Ingrese el nuevo valor')
        const _id = e.target.parentElement.lastChild.textContent;
        fetch(`http://localhost:5000/admin/${_id}/${attribute}/${value}`, { 
            method: 'PATCH',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
          })
          .then( (response) => {
            if (!response.ok){
              const res = response.json()
              .then( (res) => console.log(res.message))
            }else{
              console.log('ok');
            }
          })
    }

    let selectedView;

    switch(view){
      case "...":
        selectedView = <></>
        break;
      case "Productos":
        selectedView = <AdminProductsView addNewProduct={addNewProduct} removeFromDB={removeFromDB} title={title} imgLink={imgLink} price={price} type={type} products={products} editValue={editValue}/>
        break;
      case "Ordenes":
        selectedView = <AdminOrdersView orders={orders}/>
        break;
  }
    

    return (
        <div className='wrapper'>
            <h2>Panel de Administrador</h2>
            <p>seleccioná qué ver y editar</p>
            <select name="" id="" onChange={(e)=>{setView(e.target.value)}}>
                <option value="..." defaultChecked>...</option>
                <option value="Productos">Productos</option>
                <option value="Ordenes">Ordenes</option>
            </select>
            {selectedView}
        </div>
    );
}

export default AdminPanel;
