import express from "express";
import ClientsController from "../controllers/clientsCtrl.js";

const router = express.Router();

router
  .route("/")
  .get(ClientsController.getClients)
  .post(ClientsController.createclients);

router
  .route("/:id")
  .put(ClientsController.updateclients)
  .delete(ClientsController.deleteclients);

export default router;