import express from "express";
import multer from "multer";
import moviesController from "../controllers/moviesCtrl.js";

const router = express.Router();

const upload = multer({dest: "public/"})

router
  .route("/")
  .get(moviesController.getmovies)
  .post(upload.single("image"), moviesController.createmovies);

router
  .route("/:id")
  .put(moviesController.updatemovies)
  .delete(moviesController.deletemovies);

export default router;