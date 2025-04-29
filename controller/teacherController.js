const Teacher = require("../model/teacherModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.getTeacher = async (req,res) => {
    try {
        const data = await Teacher.find()
        return res.json({error:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postTeacher = async (req,res) => {
    try {
        const isTeacherExists = await Teacher.findOne({email : req.body.email})
        if(isTeacherExists) return res.status(500).json({errors:true,message:"Teacher already exists"})
        
        req.body.password = await bcrypt.hash(req.body.password,10)
        const data = await Teacher.create(req.body)
        return res.json({errors:false,data:data})

    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}


exports.login = async (req,res) => {
    try {
        const isTeacherExists = await Teacher.findOne({email : req.body.email})
        if(!isTeacherExists) return res.status(500).json({errors:true,message:"the email or password is invalid"})
        const verifyPassword = await bcrypt.compare(req.body.password,isTeacherExists.password)
        if(!verifyPassword) return res.status(500).json({errors:true,message:"the email or password is invalid"})
        
        const token = await jwt.sign({_id:isTeacherExists._id,role:isTeacherExists.role},process.env.SEC)
        return res.json({errors:false,data:{token:token,teacher : isTeacherExists}})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.updateTeacher = async (req,res) => {
    try {
        const data = await Teacher.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteTeacher = async (req,res) => {
    try {
        const data = await Teacher.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}