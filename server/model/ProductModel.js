const mongoose = require('mongoose')


const DataSchema = mongoose.Schema({
productName:{type:String},
productCode:{type:String},
img:{type:String},
unitPrice:{type:String},
quantity:{type:Number},
totalPrice:{type:String},
createDate:{type:Date, default:Date.now()}
},
{ versionKey: false }
)

const productModel = mongoose.model("product", DataSchema);

module.exports= productModel;