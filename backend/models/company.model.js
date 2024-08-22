import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type:string,
        required:true,
        unique:true
    },
    desription:{
        type:String
    },
    website:{
        type:String
    },
    location:{
        type:String
    },
    logo:{
        type:String //url here
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true});