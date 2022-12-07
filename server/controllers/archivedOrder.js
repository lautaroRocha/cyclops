const {archivedOrder} = require('../models/archivedOrder') 

async function archiveOrder(req, res){
    const archived = new archivedOrder({
        client : req.body.client,
        order : req.body.order
    })  
    console.log(req.body)
    try{
        const newArchivedOrder = await archived.save()
        res.status(201).json({archived : newArchivedOrder})
    }catch(err){
        res.json({message : err.message})
    }
}

async function getArchive(req, res){
    try{
        const archivedOrders = await archivedOrder.find()
        res.status(201).json(archivedOrders)
    }catch(err){
        res.json({message : err.message})
    }
}


module.exports = {archiveOrder, getArchive}