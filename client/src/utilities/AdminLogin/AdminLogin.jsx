import React from 'react';

const AdminLogin = () => {
    return (
        <form className='glass '>
            <label htmlFor="user"> Usuario : 
                <input type="text" name="user"/>
            </label>
            <label htmlFor="password"> Contraseña : 
                <input type="password" name="password"/>
            </label>
            <button type='submit'>INGRESAR</button>
        </form>
    );
}

export default AdminLogin;
