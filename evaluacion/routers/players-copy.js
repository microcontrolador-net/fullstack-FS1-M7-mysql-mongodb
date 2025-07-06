const express=require('express');
const app=express();
const Player=require('../models/player');

app.post('/',async(req,res,next)=>{
    //validacion

    const player=new Player({
        name:req.body.name,
        surname:req.body.surname,
        team:req.body.team
    });

    player.save((err,playerSaved)=>{
        if(err){
            res.status(500).json({
                    message:'Database error'
            })
        }
        res.status(200).json({
                message:'ok',
                player:playerSaved
        })
    })
})

module.exports=app;