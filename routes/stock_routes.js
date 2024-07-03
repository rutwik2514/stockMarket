import express from 'express'
import {Sell,Buy, showStocks} from '../controllers/trade_controllers.js'
import { checkAuthorization } from '../middleware/ValidateUser.js';

const router=express.Router();
router.post("/buy",checkAuthorization,Buy);
// aslkdas
router.post("/sell",checkAuthorization,Sell);
router.post("/getstocks",checkAuthorization,showStocks);


export default router;