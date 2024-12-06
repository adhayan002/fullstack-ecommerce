import { Router } from 'express';
import { createProduct, deleteProduct, getProductById, listProduct, updateProduct } from './productController';
import { validateData } from '../../middleware/validationMiddleware';
import { createProductSchema,updateProductSchema} from '../../db/productSchema';



//products endpoints
const router=Router()

router.get("/",listProduct)

router.get("/:id",getProductById)

router.post("/",validateData(createProductSchema),createProduct)

router.put("/:id",validateData(updateProductSchema),updateProduct)

router.delete("/:id",deleteProduct)

export default router
