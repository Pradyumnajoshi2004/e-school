const Student = require("../model/studentModel")

exports.getStudent = async (req,res) => {
    try {
        const data  =  await Student.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postStudent = async (req,res) => {
    try {
        const isStudentExists = await Student.findOne({roll_no : req.body.roll_no})
        if(isStudentExists) return res.status(500).json({errors:true,message:"the student already exists"})

        const data = await Student.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.updateStudent = async (req,res) => {
    try {
        const data = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.json({errors:true,message:error.message})
    }
}

exports.deleteStudent = async (req,res) => {
    try {
        const data = await Student.findOneAndDelete(req.params.id)
        return res.json({errors:false,data:DOMMatrixReadOnly})
    } catch (error) {
        return res.json({errors:true,message:error.message})
    }
}