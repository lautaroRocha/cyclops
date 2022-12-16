import React, {useState} from 'react';

const AdminLogin = (props) => {

    const [userCredentials, setUserCredentials] = useState({
        email : "",
        password : ""
    });

    return (
        <form className='glass '>
            <label htmlFor="user"> Usuario : 
                <input type="text" name="user" onChange={(e)=>{setUserCredentials({
                    email : e.target.value,
                    password : userCredentials.password 
                })}}/>
            </label>
            <label htmlFor="password"> Contraseña : 
                <input type="password" name="password" onChange={(e)=>{setUserCredentials({
                    email : userCredentials.email,
                    password : e.target.value  
                })}}/>
            </label>
            <button type='submit' onClick={(e) => {props.logIn(e, JSON.stringify(userCredentials))}}>INGRESAR</button>
        </form>
    );
}

export default AdminLogin;
