import { Router } from 'express';
//products endpoints
const router=Router()

router.get("/",(req,res)=>{
    res.send("All the Products")
})

router.get("/:id",(req,res)=>{
    console.log(req.params)
    res.send(`Product ${req.params.id}`)
})

router.post("/",(req,res)=>{
    res.send("New Product Created!")
})

export default router
