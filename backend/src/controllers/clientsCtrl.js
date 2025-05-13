const clientsController = {};
import clientsMdl from "../models/clientsMdl.js";

clientsController.getClients = async (req, res) => {
    const clients = await clientsMdl.find();
    res.json(clients);
};

clientsController.createclients = async (req, res) => {
    const { 
        name,
        email,
        password,
        telephone,
        address,
        active 
    } = req.body;
    const newclients = new clientsMdl(
        { 
        name,
        email,
        password,
        telephone,
        address,
        active
    });
    await newclients.save();
    res.json({ message: "client saved" });
};

clientsController.deleteclients = async (req, res) => {
    const deletedclients = await clientsMdl.findByIdAndDelete(req.params.id);
      if (!deletedclients) {
        return res.status(404).json({ message: "client dont find" });
      }
      res.json({ message: "client deleted" });
};

clientsController.updateclients = async (req, res) => {
    const { 
        name,
        email,
        password,
        telephone,
        address,
        active   
    } = req.body;
    await clientsMdl.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        password,
        telephone,
        address,
        active 
      },
      { new: true }
    );
    res.json({ message: "client update" });
};

export default clientsController;