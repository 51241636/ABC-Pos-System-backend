import { NextFunction, Request, Response } from "express";
import user from "../models/user";
import IUser from "../interface/userInterface";
import { UserDTO } from "../DTO/userDTO";
import { saveUserService, updateUserSerivice } from "../service/userService";


// save user 
export const saveUser=async (req:Request,res:Response,next:NextFunction)=>{
        const userDTO:UserDTO=req.body;
        const saved= await saveUserService(userDTO);
        res.status(200).json({
            message:"User saved successfully",
            user:saved
        });

   
}

// update saved user
export const updateUser=async(req:Request,res:Response,next:NextFunction)=>{
    const userDTO:UserDTO=req.body;
    console.log(userDTO.id);
    const updatedUser=await updateUserSerivice(userDTO);
     res.status(200).json({
            message:"User updated successfully",
            user:updatedUser
        });

}
