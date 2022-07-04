const{Schema,model} =require('mongoose');

const empleadoSchema= new Schema({
    nombre: {type: String, required:true},
    puesto: {type: String, required:true},
    email: {type: String, required:true},
    sueldo: {type: Number, required:true}
},{
    timestamps: true,
    versionKey: false
})
module.exports= model('Empleado',empleadoSchema);
// const empleado= {
//     id: number,
//     nombre: string,
//     puesto: string,
//     email: string,
//     sueldo: number
// }
// module.exports= empleado;