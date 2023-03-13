const productModel= require("../model/ProductModel")



// create
exports.CreateProduct=(req,res)=>{
 const reqBody= req.body
productModel.create(reqBody, (error, data)=>{
if(error){
    res.status(401).json({massage:'product create piled', error:error})
}else{
    res.status(200).json({massage:"product create Successfully ", status:data})
}

})
}


//read
exports.findProduct=(req,res)=>{
 const quarry={} 
 const projection= 'productName productCode img unitPrice quantity totalPrice'
productModel.find(quarry, projection, (error, data)=>{
    if(error){
        res.status(401).json({massage:'product find to piled', error:error})
    }else{
        res.status(200).json({massage:"product find Successfully ", data:data})
    }

})
}
//update
exports.UpdateProduct=(req,res)=>{
    const id= req.params.id;
    const Query={_id:id}; 
    const reqBody= req.body;
   productModel.updateOne(Query,reqBody,(error, data)=>{
       if(error){
           res.status(401).json({massage:'product do not update', error:error})
       }else{
           res.status(200).json({massage:"product update Successfully ", status:data})
       }
   
   })
   }
   
//delete
   exports.deleteProduct=(req,res)=>{
    const id= req.params.id
    const quarry={ _id:id} 

   productModel.remove(quarry,(error, data)=>{
       if(error){
           res.status(401).json({massage:'product do not delete', error:error})
       }else{
           res.status(200).json({massage:"product delete Successfully ", status:data})
       }
   
   })
   }