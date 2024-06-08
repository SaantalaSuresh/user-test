const express = require("express");

const route = express.Router();

const USER  = require("../module/module");

//post users

route.post("/users/", async(req,res)=>{
    try{
        const {username,gender} = req.body;
        if(!username || !gender){
            return res.status(500).json({message:"required username, gender"});
        }
        const newUser = {
            username,gender
        }
        const user = await USER.create(newUser);
        return res.status(201).json({user})
    }catch(e){
            return res.status(400).json({message:e.message});
    }
})
// get users


route.get("/users/",async(req,res)=>{
    const users =  await USER.find()
    res.status(200).json(users)
})





// delete user

route.delete("/users/:id",async(req,res)=>{
    const {id} = req.params;
    await USER.findByIdAndDelete(id);
    res.status(200).json({message:"User Deleted Successfully"});
})


// update user

route.put("/users/:id",async(req,res)=>{
    const {id} = req.params;
    await USER.findByIdAndUpdate(id,req.body)

    res.status(200).json({message:"User Details Updated Successfully"});
})



module.exports = route;