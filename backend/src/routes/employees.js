import express from "express";
import employeeController from "../controllers/employeesCtrl.js";

const router = express.Router();

router
  .route("/")
  .get(employeeController.getemployee)
  .post(employeeController.createEmployee);

router
  .route("/:id")
  .put(employeeController.updateEmployee)
  .delete(employeeController.deleteEmployee);

export default router;