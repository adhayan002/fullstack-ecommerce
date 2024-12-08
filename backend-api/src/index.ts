import express, { json, urlencoded } from "express";
import serverless from "serverless-http";
import authRoutes from "./routes/auth/index.js";
import orderRoutes from "./routes/orders/index.js";
import productRoutes from "./routes/products/index.js";

const app = express()
const port = 3000

app.use(urlencoded({ extended: false }))
app.use(json())

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.use("/products", productRoutes)
app.use("/auth", authRoutes)
app.use("/orders", orderRoutes)

if (process.env.NODE_ENV === "dev") {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

export const handler = serverless(app);