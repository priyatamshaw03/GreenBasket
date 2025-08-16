import express from 'express'
import authUser from '../middlewares/authUser.js';
import { getAllOrders, getUserOrders, placeOrder, updateOrderStatus } from '../controllers/orderController.js';
import authSeller from '../middlewares/authSeller.js';

const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrder)
orderRouter.get('/user', authUser, getUserOrders)
orderRouter.get('/seller', authSeller, getAllOrders)
orderRouter.put('/status/:id', authSeller, updateOrderStatus)
// orderRouter.post('/stripe', authUser, placeOrderStripe)

export default orderRouter;