import { Request, Response } from "express"
import { hash } from "bcrypt"
import z from "zod"

class UserController {
  async create(request: Request, response: Response) {
    const bodyschema = z.object({
      name: z.string().trim().min(2, "Name is required"),
      email: z.string().email("Invalid email format"),
      password: z.string().min(6, "Password must be at least 6 characters"),
    })

    const { name, email, password } = bodyschema.parse(request.body)

    const hashedPassword = await hash(password, 8)

    return response.status(201).json({ message: "ok", hashedPassword })
  }
}

export { UserController }
