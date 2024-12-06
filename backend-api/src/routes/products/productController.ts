
import { Request,Response } from "express"
import {db} from "../../db/index"
import { productsTable } from "../../db/productSchema"
import { eq } from "drizzle-orm"
import _ from "lodash"
import { createProductSchema } from "../../db/productSchema"
export async function listProduct(req:Request,res:Response){
    try{
        const products=await db.select().from(productsTable)
        res.json(products)
    }catch(e){
        res.status(500).send(e)
    }
}

export async function getProductById(req:Request,res:Response){
    try{
        const {id}=req.params
        const [product] = await db.select().from(productsTable).where(eq(productsTable.id, Number(id)));
        console.log(product)
        if(!product){
            res.status(404).send({message:"Product not found"})
        }else{
            res.json(product)
        }
    }catch(e){
        res.status(500).send(e)
    }
}

export async function createProduct(req:Request,res:Response){
    try{
        console.log(Object.keys(createProductSchema.shape))
        const data=_.pick(req.body,Object.keys(createProductSchema.shape))
        const [product]=await db.insert(productsTable).values(data).returning()
        res.status(201).json(product)
    }catch(e){
        res.status(500).send(e)
    }
}

export async function updateProduct(req:Request,res:Response){
    try{
        const id=Number(req.params.id)
        const updatedFields=req.cleanBody

        const [product]=await db.update(productsTable).set(updatedFields).where(eq(productsTable.id,id)).returning()
        if(product){
            res.json(product)
        }else{
            res.status(404).send({message:"The Product doesnt exist"})
        }
    }catch(e){
        res.status(500).send(e)
    }
}

export async function deleteProduct(req:Request,res:Response){
    try{
        const id=Number(req.params.id)
        const [deletedProduct]=await db.delete(productsTable).where(eq(productsTable.id,id)).returning()
        if(deletedProduct){
            res.status(204).send({message:"The Product has been deleted"})
        }else{
            res.status(404).send({message:"The Product doesnt exist"})
        }
    }catch(e){
        res.status(500).send(e)
    }
}
