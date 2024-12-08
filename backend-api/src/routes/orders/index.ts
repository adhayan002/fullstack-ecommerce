import { Router } from "express"
import { insertOrderWithItemSchema } from "../../db/orderschema.js"
import { verifyToken } from "../../middleware/authMiddleware.js"
import { validateData } from "../../middleware/validationMiddleware.js"
import { createOrder } from "./orderController.js"

const router = Router()

router.post('/', verifyToken, validateData(insertOrderWithItemSchema), createOrder)


export default router