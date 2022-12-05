const {Order} = require('../models/order');

const orderStates = ["Pending", "Preparing", "Mailed", "Done"]

async function getOrders(req, res){
    try{
        const allOrders = await Order.find();
        res.json(allOrders)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

async function sendOrder(req, res){
    const order = new Order({
        firstName : req.body.firstName,
        lastName: req.body.lastName,
        delivery : req.body.delivery,
        cardID : req.body.cardID,
        cardEXP : req.body.cardEXP,
        order : req.body.order,
    })  
    try{
        const newOrder = await order.save()
        res.status(201).json({newOrder : newOrder})
    }catch(err){

    }
}

async function setOrderState(req, res){
    const orderId = req.params.id;
    const targetedOrder = await Order.findOne({_id: orderId});
    switch(targetedOrder.status){
        case "Pending":
            try{
                await Order.findByIdAndUpdate({_id: orderId}, { status : orderStates[1]})
                res.json({ message: 'Orden actualizada'});
                }
            catch(err){
                res.json({message : err.message})
            }
            break;
        case "Preparing":
            try{
                await Order.findByIdAndUpdate({_id: orderId}, { status : orderStates[2]})
                res.json({ message: 'Orden actualizada'});
                }
            catch(err){
                res.json({message : err.message})
            }
            break;
        case "Mailed":
            try{
                await Order.findByIdAndUpdate({_id: orderId}, { status : orderStates[3]})
                res.json({ message: 'Orden actualizada'});
                }
            catch(err){
                res.json({message : err.message})
            }
            break;
    }
    
}

async function deleteOrder(req, res){
    const id = req.params.id;
    try{
        await Order.remove({ _id: id });
        res.json({ 'message': 'Orden eliminada' });
    }catch(err){
        res.json({message : err.message})
    }
}

module.exports = {
    getOrders,
    sendOrder,
    setOrderState,
    deleteOrder
}
