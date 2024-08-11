import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async(req,res) => {
    try{
        const {fullname, email, phoneNumber, password, role} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:'Something is missing',
                success:false
            });
        };
        const User = await User.findOne({email});
        if(User){
            return res.status(400).json({
                message:'User already exist with this email',
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        
        await User.creat({
            fullname,
            email,
            phoneNumber,
            password : hashedPassword,
            role
        })
    }
    catch{

    }
}