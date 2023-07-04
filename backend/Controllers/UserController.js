const UserSchema = require("../Models/UserModel")

const postUser = async(req,res)=>{
    const {username,email,password,mobileno} = req.body

    try{
        const getemail = await UserSchema.findOne({email:email})
        const getmobileno = await UserSchema.findOne({mobileno:mobileno})


        if(getemail&&getmobileno){
            return res.status(404).json({error: "email&mobileno"})
        }
        if(getemail){
            return res.status(404).json({error: "email"})
        }
        if(getmobileno){
            return res.status(404).json({error: "mobileno"})
        }

        const create = await UserSchema.create({username:username,email:email,password:password,mobileno:mobileno})
         res.status(200).json("Success")
    }catch(error){
        res.status(404).json({error: error.message})
    }
}

module.exports = {postUser}