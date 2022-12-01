const Admin = require('../models/admin');

async function addAdmin(req, res){
    const adminData = {
        email: req.body.email,
        password : req.body.password
        }
    const admin = new Admin(adminData);
    await admin.save();
    res.json({newAdmin : admin});
    }

async function logInUser(req, res){
    const {email, password} = req.body
    const tryingUser = await Admin.findOne({email : email}).exec()
    if(tryingUser.password !== password){
        res.status(401).json({message : "credenciales inválidas"})
    }else{
        res.json({message: "listo para loguear"})
    }
}   
module.exports = {addAdmin, logInUser};