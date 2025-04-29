const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    division:{
        type:String,
        required:true
    },
    roll_no:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model("student",StudentSchema)
