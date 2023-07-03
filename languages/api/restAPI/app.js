const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/restAPI",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connected with MongoDB")
}).catch((err)=>{
    console.log(err)
})


// Creating Product Schema

const productSchema = mongoose.Schema({
    name:String,
    description:String,
    price:Number,
})


// Creating Product Collection

const Product = new mongoose.model("Products", productSchema)


// Create Product

app.post("/api/v1/product/new", async(req,res)=>{
    const product = await Product.create(req.body)
    res.status(200).json({
        success:true,
        product
    })
})


// Read all Products

app.get("/api/v1/products", async (req, res) => {
        const products = await Product.find()
        if(!products){
            return res.status(500).json({
                success:false,
                message:"Product not found"
            })
        }
        
        res.status(201).json({
            success:true,
            products
        })
})


// Update Product

app.put("/api/v1/product/:id", async (req, res) => {
    let product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,useFindAndModify:true,runValidators:true,findOneAndDelete:true})
    res.status(200).json({
        success:true,
        product
    })
})



// Delete Product

app.delete("/api/v1/product/:id", async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    await product.remove()
    res.status(200).json({
        success:true,
        message:"Product is deleted successfully"
    })
})








// Server listening on port number 4500

app.listen(4500, ()=>{
    console.log("Server is running on http://localhost:4500")
})