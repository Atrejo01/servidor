// const hello=(req,res)=> res.send('hello');

const empleadosCtrl={};

const Empleado= require('../models/Empleado');

empleadosCtrl.getEmpleados= async (req,res)=>{
    const empleados= await Empleado.find();
    res.json(empleados);
}

empleadosCtrl.createEmpleado= async (req,res)=>{
    const empleado= new Empleado(req.body);
    console.log(empleado);
    await empleado.save();
    res.send({message:'Empleado creado'});
}

empleadosCtrl.getEmpleado= async(req,res)=>{
    const empleado= await Empleado.findById(req.params.id);
    res.send(empleado);
}

empleadosCtrl.editEmpleado= async(req,res)=>{
    const empleado= await Empleado.findByIdAndUpdate(
                                req.params.id,req.body);
    res.json({message:'Empleado actualizado'});
}

//Eliminar empleado
    empleadosCtrl.deleteEmpleado= async(req,res)=>{
        const empleado= await Empleado.findByIdAndDelete(
            req.params.id)
    res.json({message:'Empleado eliminado'});
 }

// empleadosCtrl.hello=(req,res)=>{
//     res.send('hello');
// };
// empleadosCtrl.getEmpleados= async (req,res)=>{
//     // res.send('get empleados');
//    const empleados= await Empleado.find();
//    res.json(empleados);
// };
// empleadosCtrl.createEmpleado= async(req,res)=>{
//     // console.log(req.body);
//     const empleado= new Empleado(req.body);
//     console.log(empleado);
//     await empleado.save();
//     res.send({message:'Empleado creado'});
// };
// empleadosCtrl.getEmpleado= async (req,res)=>{
//     // res.send('OBTENIENDO UN EMPLEADO');
//     console.log(req.params);
//     //const empleado= await Empleado.findOne({_id: req.params.id});
//     const empleado= await Empleado.findById(req.params.id);
//     res.send(empleado);
// };

// empleadosCtrl.editEmpleado= async (req,res)=>{
//     const empleado= await Empleado.findByIdAndUpdate(req.params.id,req.body);
//     res.json({status:'Empleado actualizado'});
// };

// empleadosCtrl.deleteEmpleado= async (req,res)=>{
//     const empleado= await Empleado.findByIdAndDelete(req.params.id);
//     res.json({status:'Empleado eliminado'});
// };

module.exports= empleadosCtrl;
