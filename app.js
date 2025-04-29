const mongoose = require("mongoose")
const classRoute = require("./routes/classRoute")
const studentRoute = require("./routes/studentRoute")
const teacherRoute = require("./routes/teacherRoute")
const express = require("express")
require("dotenv/config")

const app = express()

// middleware
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/teacher",teacherRoute)
app.use("/api/student",studentRoute)
app.use("/api/class",classRoute)


// connections
app.listen(process.env.PORT || 5000)

// db connection

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

db()