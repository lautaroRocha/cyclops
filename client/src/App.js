import './styles/app.css';
import Head from './components/Head/Head';
import ProductDetail from './components/ProductDetail/ProductDetails';
import Intro from './components/Intro/Intro';
import ProductsGrid from './components/ProductsGrid/ProductsGrid';
import Brand from './components/Brand/Brand';
import Faq from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import React, {useState, createContext, useEffect} from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from './components/AdminPanel/AdminPanel';



export const ProductsContext = createContext();


export function App() {
  
  const [theme, setTheme] = useState('dark');
  const [products, setProducts] = useState()
  const [cart, setCart] = useState()
  const [changes, setChanges] = useState(false)
  const [userData, setUserData] = useState({
    firstName : "", 
    lastName : "", 
    delivery : "" ,
    cardID : ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"], 
    cardEXP : "mm/aa",
    order : {}
  })

  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);


  useEffect(()=>{
    let order = localStorage.getItem('order');
    order ? setCart(JSON.parse(order)) : setCart([])
  }, [userData])

  function addToCart(prdct){
    let currentOrder = cart;
    if(currentOrder.includes(prdct)){
      currentOrder[currentOrder.indexOf(prdct)].quantity ++
    }else{
      currentOrder.push(prdct);
    }
    setCart(currentOrder)
    saveOrderInLocalStorage()
    toast(`Se añadió ${prdct.title} al carrito`)
  }

  function removeFromCart(e){
    let arr = cart;
    let productName = e.target.parentElement.parentElement.firstChild.textContent;
    let selectedObject = arr.find( (ele) => ele.title === productName);
    let selectedIndex = arr.indexOf(selectedObject)
    selectedObject.quantity = selectedObject.quantity - 1;
    if(selectedObject.quantity <= 0){
      arr.splice(selectedIndex, 1)
    }else{
      arr.splice(selectedIndex, 1, selectedObject)
    }
    setCart(arr)
    saveOrderInLocalStorage()
    checkForChanges();
  }

  function multiplyProductInCart(e){
    let arr = cart;
    let productName = e.target.parentElement.parentElement.firstChild.textContent;
    let selectedObject = arr.find( (ele) => ele.title === productName);
    if(arr.includes(selectedObject)){
      let productIndex = arr.indexOf(selectedObject)
      arr[productIndex].quantity ++
    }else{
      arr.push(selectedObject);
    }
    setCart(arr)
    saveOrderInLocalStorage()
    checkForChanges()
  }

  function saveOrderInLocalStorage(){
    localStorage.setItem('order', JSON.stringify(cart));
  }
  
  function switchTheme(){
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  function checkForChanges(){
    changes ? setChanges(false) : setChanges(true)
  }
  
  return (
    <>
    <BrowserRouter>
    <Head switchTheme={switchTheme}/>
    <ProductsContext.Provider value={products}>
      <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="/products" element={<ProductsGrid />}/>
        <Route path="/cart" element={<Cart changes={changes} setChanges={setChanges} cart={cart} setCart={setCart} removeFromCart={removeFromCart} multiplyProductInCart={multiplyProductInCart} userData={userData} setUserData={setUserData}/>}/>
        {/* <Route path="/marca" element={<Brand />}/> */}
        {/* <Route path="/faq" element={<Faq />}/> */}
        <Route path="/admin" element={<AdminPanel />}/>

        <Route path="/products/id/:_id" element={<ProductDetail addToCart={addToCart}/>}/>
      </Routes>
    </ProductsContext.Provider>
    <Footer />
    </BrowserRouter>
    </>
  );
}

