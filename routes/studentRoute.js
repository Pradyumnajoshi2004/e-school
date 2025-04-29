const {getStudent,postStudent,updateStudent,deleteStudent} = require("../controller/studentController")
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")
const route = require("express").Router()

route.get("/",getStudent)

route.post("/",[auth,admin],postStudent)

route.put("/:id",[auth,admin],updateStudent)

route.delete("/:id",[auth,admin],deleteStudent)


module.exports = route 