import { Router } from "express"
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"
import { DeliveriesController } from "@/controllers/deliveries-controller"

const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController()

deliveriesRoutes.use(ensureAuthenticated)
deliveriesRoutes.post("/", ensureAuthenticated, deliveriesController.create)

export { deliveriesRoutes }
