const mongoose = require("mongoose")

const classSchema = new mongoose.Schema({
    division:{
        type:String,
        required:true
    },
    standerd:{
        type:Number,
        required:true
    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"teacher"
    },
    studentList :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student"
    }
})

module.exports = mongoose.model("class",classSchema)
