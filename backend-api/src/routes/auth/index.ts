import bcrypt from "bcryptjs"
import { eq } from "drizzle-orm"
import { Request, Response, Router } from "express"
import jwt from "jsonwebtoken"
import { db } from "../../db/index.js"
import { createUserSchema, loginSchema, usersTable } from "../../db/userSchema.js"
import { validateData } from "../../middleware/validationMiddleware.js"

const router = Router()

router.post("/register", validateData(createUserSchema), async (req: Request, res: Response) => {
    try {
        const data = req.cleanBody
        data.password = await bcrypt.hash(data.password, 10)
        const [user] = await db.insert(usersTable).values(data).returning()
        //@ts-ignore
        delete user.password
        res.status(201).json({ user })
    } catch (e) {
        res.status(500).send("Something went wrong")
    }
})

router.post("/login", validateData(loginSchema), async (req: Request, res: Response) => {
    try {
        const { email, password } = req.cleanBody
        const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email))
        if (!user) {
            res.status(401).send("Authentication Failed")
            return
        }
        const match = await bcrypt.compare(password as string, user.password)
        if (!match) {
            res.status(401).send("Authentication Failed")
            return
        }
        //@ts-ignore
        delete user.password

        //JWT Token
        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_Secret as string, { expiresIn: "30d" })
        res.status(200).json({ token, user })

        console.log(email, password)
        res.status(200)
    } catch (e) {
        res.status(500).send("Something went wrong")
    }
})

export default router