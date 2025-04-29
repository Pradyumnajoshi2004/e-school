const {getClass,postClass,updateClass,deleteClass} = require("../controller/classController")
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")
const route = require("express").Router()

route.get("/",getClass)

route.post("/",[auth,admin],postClass)

route.put("/:id",[auth,admin],updateClass)

route.delete("/:id",[auth,admin],deleteClass)


module.exports = route 

