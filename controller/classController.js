const Class = require("../model/classModel")

exports.getClass = async (req,res) => {
    try {
        const data = await Class.find().populate("teacher","student")
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postClass = async (req,res) => {
    try {
        const isClassExists = await Class.findOne({teacher : req.body.teacher})
        if(isClassExists) return res.status(500).json({errors:true,message:"this class is already exists"})
        const data = await Class.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.updateClass = async (req,res) => {
    try {
        const data = await Class.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteClass = async (req,res) => {
    try {
        const data = await Class.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}