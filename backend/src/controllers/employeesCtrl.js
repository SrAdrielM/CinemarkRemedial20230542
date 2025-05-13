const employeeController = {};
import employeeMdl from "../models/employeesMdl.js";

employeeController.getemployee = async (req, res) => {
    const employee = await employeeMdl.find();
    res.json(employee);
  };
  
employeeController.createEmployee = async (req, res) => {
    const { 
        name,
        email,
        password,
        telephone,
        address,
        position,
        hireDate,
        salary,
        active 
    } = req.body;
    const newemployee= new employeeMdl({ 
        name,
        email,
        password,
        telephone,
        address,
        position,
        hireDate,
        salary,
        active 
    });
    await newemployee.save();
    res.json({ message: "employee save" });
};

employeeController.deleteEmployee = async (req, res) => {
    const deletedEmployee = await employeeMdl.findByIdAndDelete(req.params.id);
      if (!deletedEmployee) {
        return res.status(404).json({ message: "employee dont find" });
      }
      res.json({ message: "employee deleted" });
};

employeeController.updateEmployee = async (req, res) => {
    const { 
        name,
        email,
        password,
        telephone,
        address,
        position,
        hireDate,
        salary,
        active  
    } = req.body;
    
    await employeeMdl.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        password,
        telephone,
        address,
        position,
        hireDate,
        salary,
        active
      },
      { new: true }
    );
    res.json({ message: "employee update" });
};

export default employeeController;