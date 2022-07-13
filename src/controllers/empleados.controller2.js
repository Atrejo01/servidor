// const hello=(req,res)=> res.send('hello');

const empleadosCtrl2={};
//const empleadosCtrl={};

//const Empleado= require('../models/Empleado');

// Consultar todos los empleados
empleadosCtrl2.getEmpleados= (req,res) => {
    req.getConnection((err,conn) => {
       conn.query('SELECT * FROM empleado',(err,rows) => {
        if(err){
            consoe.log(err);
        }
        res.json(rows);
       });
    });
}

// Crear un empleado
empleadosCtrl2.createEmpleado=  (req,res)=>{
    const data= req.body;
    console.log(data);
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO empleado SET ?',
                            [data],(err,empleado) => {
            res.redirect('/empleados');
        });
    });
     
    //res.send({message:'Empleado creado'});
}

//Consultar un empleado
empleadosCtrl2.getEmpleado= (req,res)=>{
    const { id }= req.params;
        req.getConnection((err,conn) => {
            conn.query('SELECT * FROM empleado WHERE _id = ?',
                                         [id],(err,rows) => {
                res.json(rows);
            });
        });
    //res.send(empleado);
}

//Actualizar un empleado
empleadosCtrl2.editEmpleado= (req,res)=>{
    const {id}= req.params;
    const data= req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE empleado SET ? WHERE _id = ?',
                            [data, id],(err,rows) => {
            res.redirect('/empleados');
        });
    });
    //res.json({message:'Empleado actualizado'});
}

//Eliminar empleado
    empleadosCtrl2.deleteEmpleado= (req,res)=>{
        const { id }= req.params;
        req.getConnection((err,conn) => {
            conn.query('DELETE FROM empleado WHERE _id = ?',
                                        [id],(err,rows) => {
                //res.redirect('/empleados');
                res.send(rows);
            });
        });
        
    //res.json({message:'Empleado eliminado'});
 }


module.exports= empleadosCtrl2;
