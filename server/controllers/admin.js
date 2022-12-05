require('dotenv').config()
const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


async function addAdmin(req, res){
    const adminData = {
        email: req.body.email,
        password : bcrypt.hashSync(req.body.password, 10)
        }
    const admin = new Admin(adminData);
    await admin.save();
    res.json({newAdmin : admin});
    }

async function logInUser(req, res){
    const {email, password} = req.body
    const tryingUser = await Admin.findOne({email : email})
    if(!tryingUser){
        res.status(401).json({message : "No hay ningun usuario con ese email"})
    }else{
        const validPass = bcrypt.compareSync(password, tryingUser.password)
        if(!validPass){
            res.status(401).json({message : "credenciales inválidas"})
        }else{
            const jsonToken = jwt.sign({tryingUser}, process.env.ACCESS_TOKEN_SECRET);
            res.json({token: jsonToken})
        }
    }
}   

module.exports = {addAdmin, logInUser};