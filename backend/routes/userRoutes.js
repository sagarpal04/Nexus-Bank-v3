import express from "express";
import {
  signup,
  login,
  addMoney,
  accountInfo,
  transactionsHistory,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/addmoney", addMoney);
router.post("/accountinfo", accountInfo);
router.post("/transactionshistory", transactionsHistory);

export default router;
