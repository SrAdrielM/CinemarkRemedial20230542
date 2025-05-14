import express from "express";
const router = express.Router();
import logoutController from "../controllers/logoutCtrl.js";

router.route("/").post(logoutController.logout);

export default router;
