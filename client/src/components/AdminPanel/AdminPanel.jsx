import React, {useEffect, useState, useRef} from 'react';
import AdminProductsView from '../../utilities/AdminProductsView/AdminProductsView';
import AdminOrdersView from '../../utilities/AdminOrdersView/AdminOrdersView';
import AdminLogin from '../../utilities/AdminLogin/AdminLogin';
import './adminpanel.css'

const AdminPanel = () => {

    const [products, setProducts] = useState(null)
    const [view, setView] = useState(null)
    const [orders, setOrders] = useState(null)
    const [archivedOrders, setArchivedOrders] = useState(null)
    const [changes, setChanges] = useState(false)
    const [loggedUser, setLoggedUser] = useState(false)
    const [token, setToken] = useState("")

    const title = useRef()
    const imgLink = useRef()
    const price = useRef()
    const type = useRef()

    let selectedView;

    useEffect(()=>{
      if(!token){
        setProducts(null)
      }else{
        console.log('fetching...')
        fetch('http://localhost:5000/admin')
        .then(res => res.json())
        .then(data => setProducts(data))
      }
    },[token, changes])

    useEffect(()=>{
      if(!token){
        setOrders(null)
      }else{
        fetch('http://localhost:5000/admin-orders')
        .then(res => res.json())
        .then(data => setOrders(data))
      }
    },[token, changes])

    useEffect(()=>{
      if(!token){
        setOrders(null)
      }else{
        fetch('http://localhost:5000/admin-orders')
        .then(res => res.json())
        .then(data => setOrders(data))
      }
    },[token, changes])
    
    function listenToChanges(){
      changes === false ? setChanges(true) : setChanges(false)
    }
    function addNewProduct(e) {
        e.preventDefault();
        const formData  = new FormData();   
        formData.append("title",title.current.value)
        formData.append("img", imgLink.current.files[0])
        formData.append("price", parseInt(price.current.value));
        formData.append("type", type.current.value)   
        sendtoDB(formData);
        title.current.value = "";
        imgLink.current.value = "";
        price.current.value = "";
        type.current.value= ""
        listenToChanges()
    }
    function sendtoDB(obj) {
        fetch('http://localhost:5000/admin', { 
            method: 'POST',
            body: obj,
            headers : {
              'x-access' : token
          },
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
              'Content-Type': 'application/json',
              'x-access' : token
            },
          })
            .then(res => console.log('Elemento borrado de la base de datos'), listenToChanges())
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
              'Content-Type': 'application/json',
              'x-access' : token
            },
          })
          .then( (response) => {
            if (!response.ok){
              const res = response.json()
              .then( (res) => console.log(res.message))
            }else{
              console.log('ok');
              listenToChanges()
            }
          })
    }
    function logIn(e, obj){
      e.preventDefault()
      fetch('http://localhost:5000/admin/login', { 
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: obj
      })
      .then( (response) => {
        if (!response.ok){
          response.json().then( (res) => console.log(res.message))
        }else{
          console.log('podés loguearte')
          response.json().then( (res) => setToken(res.token))
          setLoggedUser(true)
        }
      })
    }
    function updateOrderState(id){
      console.log(id)
      fetch(`http://localhost:5000/admin-orders/${id}`, { 
          method: 'PATCH',
          headers : {
            'x-access' : token
        },
      })
        .then( (response) => {
          if (!response.ok){
            const res = response.json()
           .then( (res) => console.log(res.message))
          }else{
            console.log('ok')
          }
        })
      listenToChanges()
    }
    function archiveOrder(obj){

      const archive = {
        client : obj.firstName + " " + obj.lastName,
        order : obj.order
      }

      console.log(archive)

      fetch(`http://localhost:5000/admin-archive`, { 
          method: 'POST',
          body : JSON.stringify(archive),
          headers : {
            'x-access' : token,
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
      })
        .then( (response) => {
          if (!response.ok){
            const res = response.json()
           .then( (res) => console.log(res.message))
          }else{
            console.log(response)
          }
        })
      listenToChanges()
    }
    function deleteOrder(id){
      console.log(id)
      fetch(`http://localhost:5000/admin-orders/${id}`, { 
          method: 'DELETE',
          headers : {
            'x-access' : token
        },
      })
        .then( (response) => {
          if (!response.ok){
            const res = response.json()
           .then( (res) => console.log(res.message))
          }else{
            console.log('ok')
          }
        })
      listenToChanges()
    }
    function deleteAndArchiveOrder(obj){
      archiveOrder(obj)
      deleteOrder(obj._id)
    }

    switch(view){
      case "...":
        selectedView = <></>
        break;
      case "Productos":
        selectedView = <AdminProductsView addNewProduct={addNewProduct} removeFromDB={removeFromDB} title={title} imgLink={imgLink} price={price} type={type} products={products} editValue={editValue}/>
        break;
      case "Ordenes":
        selectedView = <AdminOrdersView orders={orders} updateOrderState={updateOrderState} deleteAndArchiveOrder={deleteAndArchiveOrder}/>
        break;
    } 

    return (
        <div className='wrapper'>
            <h2>Panel de Administrador</h2>
            {loggedUser ? 
            <>
            <p>seleccioná qué ver y editar</p>
            <select name="" id="" onChange={(e)=>{setView(e.target.value)}}>
                <option value="..." defaultChecked>...</option>
                <option value="Productos">Productos</option>
                <option value="Ordenes">Ordenes</option>
                <option value="Archivo">Archivo</option>
            </select>
            {selectedView} 
            </>:
            <AdminLogin logIn={logIn}/>}
        </div>
    );
}

export default AdminPanel;
