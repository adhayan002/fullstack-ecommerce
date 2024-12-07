import { Router } from 'express';
import { createProductSchema, updateProductSchema } from '../../db/productSchema';
import { verifySeller, verifyToken } from '../../middleware/authMiddleware';
import { validateData } from '../../middleware/validationMiddleware';
import { createProduct, deleteProduct, getProductById, listProduct, updateProduct } from './productController';


//products endpoints
const router = Router()

router.get("/", listProduct)

router.get("/:id", getProductById)

router.post("/", verifyToken, verifySeller, validateData(createProductSchema), createProduct)

router.put("/:id", verifyToken, verifySeller, validateData(updateProductSchema), updateProduct)

router.delete("/:id", verifyToken, verifySeller, deleteProduct)

export default router
