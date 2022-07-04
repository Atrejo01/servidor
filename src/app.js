const express= require('express');
const morgan= require('morgan');
const app=express();

app.set('port',3000);//<---

app.use(morgan('dev'));
app.use(express.json());//<---
app.use(express.urlencoded({extended:false}));//<---

app.use(require('./routes/empleados.router'));//<---
module.exports= app;