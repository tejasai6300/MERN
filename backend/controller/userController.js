// let user = [];
// let id=1;
const User = require("../models/user")
exports.createUser=async (req,res)=>{
   try{
    const {name,email}=req.body;
    const exist = await User.findOne({email})
    if(exist)
        return res.status(401).json({message:"user already exists"})
        const user=await User.create({
        name,
        email
    })
    res.status(200).json(user);
}catch(err){
    res.status(500).send(err)
}
    // user.push(newUser);
    // res.status(200).json(newUser);
}

exports.getUser=async(req,res)=>{
    try{
       const users= await User.find();
       res.status(200).json(users)
    }
    catch(err){
        res.status(500).json(err);
    }
};
exports.getUserById=async(req,res)=>{
try{
        const user= await User.findById(req.params.id);
        if(!user)
            return res.status(401).json({message:"user not found"})
        res.status(200).json(user);
}catch(err){
    res.status(500).json(err);
}   
};
exports.editUser=async(req,res)=>{
    try{
        const myuser=await User.findById(req.params.id);
        if(!myuser)
            return res.status(404).json({message:"user not found"});
        myuser.name=req.body.name ===undefined?myuser.name:req.body.name;
        myuser.email=req.body.email||myuser.email;
        await myuser.save();
    }catch(err){
        res.status(500).json(err);
    }
    res.status(200).json(myuser)
};
    exports.deleteUser=async(req,res)=>{
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({message:"user deleted successfully"});
        }catch(err){
            res.status(500).json(err);
        }
    }