import express from "express";
import { signup, login, addMoney } from "../controllers/userController.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/addmoney", addMoney);

export default router;
