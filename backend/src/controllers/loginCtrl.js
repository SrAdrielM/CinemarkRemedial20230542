import clientsMdl from "../models/clientsMdl.js";
import employeesMdl from "../models/employeesMdl.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const loginController = {};

loginController.login = async (req, res) => {
  const { email, password } = req.body; 

    try {
        let userFound;
        let userType;

        if (
        email === config.emailAdmin.email &&
        password === config.emailAdmin.password
        ) {
        (userType = "admin"), (userFound = { _id: "admin" });
        } else {
        userFound = await employeesMdl.findOne({ email });
        userType = "employee";

        if (!userFound) {
            userFound = await clientsMdl.findOne({ email });
            userType = "client";
            }
        }

        if (!userFound) {
            console.log("El usuario no existe en la base de datos");
            return res.json({ message: "User not found" });
          }

          if (userType !== "admin") {
            const isMatch = await bcryptjs.compare(password, userFound.password);
            if (!isMatch) {
              console.log("no matchea");
              return res.json({ message: "Contraseña incorrecta" });
            }
          }

          jsonwebtoken.sign(
            { id: userFound._id, userType },
            config.JWT.secret,
            { expiresIn: config.JWT.expiresIn },
            (error, token) => {
              if (error) console.log(error);
      
            res.cookie("authToken", token);
            res.json({ message: "login successful" });
            }
          );
    } catch (error) {
        res.json({message: "error"})
    }
};

export default loginController;