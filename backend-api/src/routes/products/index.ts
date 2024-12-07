import { Router } from 'express';
import { createProductSchema, updateProductSchema } from '../../db/productSchema.js';
import { verifySeller, verifyToken } from '../../middleware/authMiddleware.js';
import { validateData } from '../../middleware/validationMiddleware.js';
import { createProduct, deleteProduct, getProductById, listProduct, updateProduct } from './productController.js';


//products endpoints
const router = Router()

router.get("/", listProduct)

router.get("/:id", getProductById)

router.post("/", verifyToken, verifySeller, validateData(createProductSchema), createProduct)

router.put("/:id", verifyToken, verifySeller, validateData(updateProductSchema), updateProduct)

router.delete("/:id", verifyToken, verifySeller, deleteProduct)

export default router
