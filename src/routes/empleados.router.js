const{Router}= require('express');

const router= Router();

const empleadosCtrl= 
    require('../controllers/empleados.controller');

//Consultar todos los empleados
router.get('/empleados',empleadosCtrl.getEmpleados);

//Consultar empleado
router.get('/empleados/:id',empleadosCtrl.getEmpleado);

//Crear empleado
router.post('/empleados',empleadosCtrl.createEmpleado);

//Actualizar empleado
router.put('/empleados/:id',empleadosCtrl.editEmpleado);

//Eliminar empleado
router.delete('/empleados/:id',
         empleadosCtrl.deleteEmpleado);

module.exports= router;