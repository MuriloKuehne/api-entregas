import { Request, Response } from "express"
import { Session } from "inspector"

class SessionsController {
  async create(request: Request, response: Response) {
    return response.status(201).json({ message: "Ok" })
  }
}

export { SessionsController }
