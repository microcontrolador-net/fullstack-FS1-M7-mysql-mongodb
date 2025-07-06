const express = require('express');
const router = express.Router();
const Device = require('../models/device');

// GET: obtener todos los dispositivos
router.get('/', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener dispositivos', error: err.message });
  }
});

//POST: crear nuevo dispositivo
router.post('/',async(req,res)=>{
    try {
        const newDevice=new Device(req.body);
        const savedDevice=await newDevice.save();
        res.status(201).json(savedDevice);
    }catch(err){
        res.status(400).json({message:'Error al crear dispositivo',error:err.message});
    }
});

//PUT: actualizar el dispositivo por _id
router.put('/:id',async(req,res)=>{
    try{
        const updated=await Device.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated) return res.status(404).json({message: 'Dispositivo no encontrado'});
        res.json(updated);
    }catch(err){
        res.status(400).json({message:'Error al actualizar',error: err.message});

    }
});

//DELETE: Eliminar por _id
router.delete('/:id',async(req,res)=>{
    try{
        const deleted=await Device.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message:'Dispositivo no encontrado'});
        res.sendStatus(204); // Sin contenido
    }catch(err){
        res.status(400).json({ message: 'Error al eliminar', error: err.message });
    }
});


module.exports = router;