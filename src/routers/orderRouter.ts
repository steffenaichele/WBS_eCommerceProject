import { Router } from "express";
import { validateBody } from "#middleware";
import { orderInputSchema, orderParamsSchema } from "#schemas";
import {
	getAllOrders,
	createOrder,
	getOrderById,
	updateOrder,
	deleteOrder,
} from "#controllers";

const orderRouter = Router();

orderRouter
	.route("/")
	.get(getAllOrders)
	.post(validateBody(orderInputSchema), createOrder);

orderRouter
	.route("/:id")
	.get(validateBody(orderParamsSchema), getOrderById)
	.put(
		validateBody(orderParamsSchema),
		validateBody(orderInputSchema),
		updateOrder
	)
	.delete(validateBody(orderParamsSchema), deleteOrder);

export default orderRouter;
