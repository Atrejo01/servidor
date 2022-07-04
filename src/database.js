const mongoose= require('mongoose');

mongoose
.connect("mongodb://localhost/crud-empleados",{
useUnifiedTopology:true,
useNewUrlParser: true
})
.then((db)=>console.log('Db is connected'))
.catch((err)=>console.log(err));

