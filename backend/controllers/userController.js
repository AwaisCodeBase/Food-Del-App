import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";
import { response } from "express";

// login user

const loginUser = async (req, res) => {

}

// register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try{
        // Validate email
        const exist = await userModel.findOne({ email })
        if(exist){
            return res.json({success: false, message: "User already exists!"})
        }
        // Validate email format and strong password
        if(!validator.isEmail(email)) {
            return res.json({success: false, message: "please enter a valid email!"})
        }

        if(password.length < 8){
            return res.json({success: false, message: "please enter a strong password!"})
        }
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    }catch(error){

    }
}

export { loginUser, registerUser };