import { Router } from "express"
import { insertOrderWithItemSchema, updateOrderSchema } from "../../db/orderschema.js"
import { verifyToken } from "../../middleware/authMiddleware.js"
import { validateData } from "../../middleware/validationMiddleware.js"
import { createOrder, getOrderById, listOrders, updateOrder } from "./orderController.js"

const router = Router()

router.post('/', verifyToken, validateData(insertOrderWithItemSchema), createOrder)

router.get("/", verifyToken, listOrders)
router.get("/:id", verifyToken, getOrderById)
router.put("/:id", verifyToken, validateData(updateOrderSchema), updateOrder)

export default router