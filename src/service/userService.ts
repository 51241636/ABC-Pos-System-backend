
import { UserDTO } from "../DTO/userDTO";
import IUser from "../interface/userInterface";
import user from "../models/user";
const { MongoClient, ObjectId } = require('mongodb');

// saved new User within this function
export const saveUserService=async(userDTO:UserDTO|null)=>{
  if(userDTO === null){
    throw new Error("User details not entered");
  }
  const userData : IUser ={
                name:userDTO.name,email:userDTO.email,address:userDTO.address,contact:userDTO.contact,password:userDTO.password,userRole:userDTO.userRole
        }

        const saveUser=new user(userData);
         const savedUser=await saveUser.save()
         return savedUser;

}

// updated saved user detail service function
export const updateUserSerivice=async(userDTO:UserDTO|null)=>{
     if(userDTO === null){
        throw new Error("User details not entered");
     }
      if (!userDTO.id) {
        throw new Error("User ID is required");
    }

     const findUser=await user.findById(userDTO.id);
     if(!findUser){
         throw new Error("User not found");
     }
          const userData : IUser ={
                name:userDTO.name,email:userDTO.email,address:userDTO.address,contact:userDTO.contact,password:userDTO.password,userRole:userDTO.userRole
        }
    findUser.name=userData.name;
    findUser.email=userData.email;
    findUser.address=userData.address;
    findUser.contact=userData.contact;
    findUser.password=userData.password;
    findUser.userRole=userData.userRole;
    return await findUser.save();

}