
import { Request,Response } from "express"
export function listProduct(req:Request,res:Response){
    res.send("All the Products")
}

export function getProductById(req:Request,res:Response){
    console.log(req.params)
    res.send(`Product ${req.params.id}`)
}

export function createProduct(req:Request,res:Response){
    res.send("New Product Created!")
}

export function updateProduct(req:Request,res:Response){
    res.send("Product Updated!")
}

export function deleteProduct(req:Request,res:Response){
    res.send("Product deleted")
}
