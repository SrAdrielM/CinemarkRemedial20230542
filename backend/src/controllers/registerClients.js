import bcryptjs from "bcryptjs";

import clientsMdl from "../models/clientsMdl.js";

const registerClientsController = {};

registerClientsController.register = async (req, res) => {
    const{
        name,
        email,
        password,
        telephone,
        address,
        active
    } = req.body;

    try {
        
        const existingClient = await clientsMdl.findOne({email});
        if (existingClient){
            return res.json({message: "Client already exist"})
        }

        const passwordHash = await bcryptjs.hash(password, 10);

        const newClient = new clientsMdl({
            name,
            email,
            password: passwordHash,
            telephone,
            address,
            active
        });

        await newClient.save();
    } catch (error) {
        console.log("error " + error)
    }
};

export default registerClientsController;