import mongoose from 'mongoose'
import express from 'express'
import { name } from '../constant.js'

const Db = async ()=>{
     try{
        const res = await mongoose.connect(`${process.env.MONGODB_URI}/${name}`)
         console.log("Mongo db connected");
     }
     catch(error){
        console.log("Error is that .....");
        
        console.log(error.message);
        throw error
        
     }
}

export  default Db;