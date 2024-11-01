import express from "express";
import {
  signup,
  login,
  addMoney,
  transactionsHistory,
  accountDetails,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/addmoney", addMoney);
router.get("/transactionshistory", transactionsHistory);
router.get("/accountdetails", accountDetails);

export default router;
