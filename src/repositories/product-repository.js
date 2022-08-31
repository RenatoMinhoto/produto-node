const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.getProduct = async () => {
    const result = await Product.find({}, 'title categoria price description _id active');

    return result;
}

exports.create = async (data) => {
    let produto = Product(data);
    await produto.save();
}

exports.put = async (id, data) => {
    await Product.findByIdAndUpdate(id, {
       $set:{
        title: data.title,
        categoria: data.categoria,
        description: data.description,
        price: data.price,
        active: data.active
       } 
    });
}

exports.getById = async (id) => {
    const result = await Product.findOne({_id : id,}, "_id title categoria description price active")
    return result;
}

exports.delete = async (id) => {
    await Product.findByIdAndUpdate(id,{
        $set:{
            active : false
        }
    });
}
