const {getTeacher,postTeacher,login,updateTeacher,deleteTeacher} = require("../controller/teacherController")
const route = require("express").Router()
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

route.get("/",getTeacher)

route.post("/",postTeacher)

route.post("/login",login)

route.put("/:id",[auth,admin],updateTeacher)

route.delete("/:id",[auth,admin],deleteTeacher)

module.exports = route 