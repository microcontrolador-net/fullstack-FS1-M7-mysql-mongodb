const express=require('express');
const app=express();
const mongoose=require('mongoose');

const port=3000;

const mongoURI='mongodb://localhost:27017/';
const playersRouter=require('./routers/players');

app.use(express.json()); //  activa el middleware que analiza el cuerpo (body) de las peticiones JSON.
app.use('/players',playersRouter);

//const mongoURI = 'mongodb://localhost:27017/Laliga';
const options={
    useNewUrlParser:true
}

mongoose.connect(mongoURI,options)
        .then(()=>console.log('Conectado a la base de datos'))
        .catch(err=>console.log(err))

app.listen(port,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});