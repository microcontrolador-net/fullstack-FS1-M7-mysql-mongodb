const express=require('express');
const app=express();
const mongoose=require('mongoose');
const deviceRouters=require('./routers/devices');

const port=3000;

const mongoURI='mongodb://localhost:27017/stock02';

//const mongoURI = 'mongodb://localhost:27017/Laliga'; // ejemplo de la guia
const options={
    useNewUrlParser:true
}

// Instancia que conecta la base de datos mongodb respuesta del examen 07
mongoose.connect(mongoURI,options)
        .then(()=>console.log('Conectado a la base de datos'))
        .catch(err=>console.log(err))

//Ejemplo de la guía        
const playersRouter=require('./routers/players');

app.use(express.json()); //  activa el middleware que analiza el cuerpo (body) de las peticiones JSON.

// Ejemplo de guia
app.use('/players',playersRouter);

// respuesta del examen 07
app.use('/devices',deviceRouters);

app.listen(port,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});