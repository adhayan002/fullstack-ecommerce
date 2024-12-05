import express,{json,urlencoded} from "express"
import productRoutes from "./routes/products/index"

const app=express()
const port=3000

app.use(urlencoded({extended:false}))
app.use(json())

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.use("/products",productRoutes)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
