const Admin = require('../models/admin');

async function addAdmin(req, res){
    const adminData = {
        email: req.body.email,
        password : req.body.password
        }
    const admin = await new Admin(adminData);
    admin.save();
    res.json({newAdmin : admin});
    }

module.exports = {addAdmin};