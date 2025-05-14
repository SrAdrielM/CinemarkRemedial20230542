import moviesMdl from "../models/moviesMdl.js";
import { v2 as cloudinary } from "cloudinary";

import { config } from "../config.js";

cloudinary.config({
  cloud_name: config.cloudinary.cloudinary_name,
  api_key: config.cloudinary.cloudinary_api_key,
  api_secret: config.cloudinary.cloudinary_api_secret,
});

const moviesController = {};

moviesController.getmovies = async (req, res) => {
    const movies = await moviesMdl.find();
    res.json(movies);
};

moviesController.createmovies = async (req, res) => {
    try {
        const { 
            title,
            description,
            director,
            genre,
            year,
            duration
         } = req.body;
         let imageUrl = "";

         if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "public",
                allowed_formats: ["jpg", "png", "jpeg"],
              });
              imageUrl = result.secure_url;
         }

         const newmovies = new moviesMdl({ 
            title,
            description,
            director,
            genre,
            year,
            duration,
            image: imageUrl
        });
        await newmovies.save();
        res.json({ message: "movies save" });
    } catch (error) {
        console.log("error en createmovies "+ error)
    }
};

moviesController.deletemovies = async (req, res) => {
    const deletedmovies = await moviesMdl.findByIdAndDelete(req.params.id);
      if (!deletedmovies) {
        return res.status(404).json({ message: "movies dont find" });
      }
      res.json({ message: "movies deleted" });
};

moviesController.updatemovies = async (req, res) => {
    const { 
        title,
        description,
        director,
        genre,
        year,
        duration,
        image  
    } = req.body;
    await moviesMdl.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        director,
        genre,
        year,
        duration,
        image
      },
      { new: true }
    );
    res.json({ message: "movies update" });
};

export default moviesController;