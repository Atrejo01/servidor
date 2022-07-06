const express= require('express');
const morgan= require('morgan');
const app=express();
const cors= require('cors');    //<<<---

app.set('port',3000);//<---

//app.use(cors({origin:"http://localhost:4200/"}));    //<<<---
app.use(cors());    //<<<---
app.use(morgan('dev'));
app.use(express.json());//<---
app.use(express.urlencoded({extended:false}));//<---

app.use(require('./routes/empleados.router'));//<---
module.exports= app;