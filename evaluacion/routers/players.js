const express=require('express');
app=express();
const Player=require('../models/player');

app.post('/',async(req,res,next)=>{
    try{
        const player=new Player({
            name:req.body.name,
            surname: req.body.surname,
            team:req.body.team
        })

        const savedPlayer=await player.save(); // sin call back

        res.status(201).json({
            message:'ok',
            player:savedPlayer
        });

    }catch(err){
        res.status(500).json({
            message:'DataBase error',
            error:err.message
        });
    }
});

module.exports=app;

