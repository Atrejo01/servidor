const{Router}= require('express');

const router= Router();

// const empleadosCtrl= 
//     require('../controllers/empleados.controller');
const empleadosCtrl2= 
    require('../controllers/empleados.controller2');


//Consultar todos los empleados
router.get('/empleados',empleadosCtrl2.getEmpleados);

//Consultar empleado
router.get('/empleados/:id',empleadosCtrl2.getEmpleado);

//Crear empleado
router.post('/empleados',empleadosCtrl2.createEmpleado);

//Actualizar empleado
router.put('/empleados/:id',empleadosCtrl2.editEmpleado);

//Eliminar empleado
router.delete('/empleados/:id',
         empleadosCtrl2.deleteEmpleado);

module.exports= router;