const {Product} = require('../models/product')

//CREATE
async function addProduct(req, res){
    const product = new Product({
        title: req.body.title,
        img : req.body.img,
        price: req.body.price,
        type: req.body.type,
        quantity: req.body.quantity
    })
    try{
        const newProduct = await product.save()
        res.status(201).json({newProduct : newProduct})
    }catch (err){
        res.status(400).json({message : err.message})
    }
}

//READ
async function getAllProducts(req, res){
    try{
        const allProducts = await Product.find();
        res.json(allProducts)
    }catch(err) {
        res.status(500).json({message : err.message})
    }
}

async function sortProducts (req, res) {
    const sortingMethod = req.params.method;
    const sortingValue = req.params.value;
    try{
        switch(sortingMethod){
            case 'id':
            const foundItem = await Product.findById(sortingValue).exec()
            res.json(foundItem)
                break;
            case 'tag':
            const foundItems = await Product.find({type : sortingValue}).exec()
            res.json(foundItems)
        }
    }
    catch(err){
        res.status(404).json({message : err.message})
    }       
};

//UPDATE
async function updateOneProduct(req, res){
    const id = req.params.id;
    const editAttribute = req.params.attr
    const newValue = req.params.value
    try{
        await Product.updateOne({_id: id}, {[editAttribute] : newValue})
        res.json({ message: 'Producto editado'})
    }catch(err){
        res.json({message : err.message})
    }
  
}

//DELETE
async function deleteOneProduct(req, res) {
    const id = req.params.id;
    try{
        await Product.remove({ _id: id });
        res.json({ 'message': 'Datos Eliminados' });
    }catch(err){
        res.json({message : err.message})
    }
   
}

async function deleteMultipleProducts(req, res){
    const value = req.params.value;
    const attribute = req.params.attr;
    try{
        await Product.deleteMany({[attribute] : value})
        res.json({ message: 'Productos eliminados'})
    }catch(err){
        res.json({message : err.message})
    }
}

module.exports = {
    addProduct, 
    getAllProducts, 
    sortProducts, 
    deleteOneProduct, 
    updateOneProduct, 
    deleteMultipleProducts
};


// {
//     "firstName": "Testing",
//     "lastName": "Order",
//     "delivery" : "home delivery",
//     "cardEXP": "04/26",
//     "cardID" : "5465121657984",    
//     "order": [
//          {
//         "_id" : 215649876551,
//         "price" : 10000000,
//         "quantity": 2,
//         "title": "ASdas",
//         "type": "indumentaria"    
//          },{
//         "_id" : 215649876551,
//         "price" : 10000000,
//         "quantity": 2,
//         "title": "ASdas",
//         "type": "indumentaria" 
//         }]
//     }