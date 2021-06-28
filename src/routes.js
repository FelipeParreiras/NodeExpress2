const { Router } = require("express");
const MouseController = require('./perifericosController');

const router = Router()
    .get("/mouse", MouseController.getAllMouse) // get
    .get("/mouse/:id", MouseController.getMouseById) // get by id
    .post("/mouse", MouseController.createMouse) // create
    .put("/mouse/:id", MouseController.updateMouse) // update all fields
    .patch("/mouse/:id", MouseController.updateMouse) // update by field
    .delete("/mouse/:id", MouseController.deleteMouse) // delete by id 

module.exports = router;