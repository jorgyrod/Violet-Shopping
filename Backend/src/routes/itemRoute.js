const { Router } = require("express");
const router = Router();
const itemsControllers = require("../controllers/item");

//GET
router.get("/getAll", itemsControllers.getAll);
router.get("/getById/:id", itemsControllers.getById);
//POST
router.post("/addItem", itemsControllers.add);
//PUT
router.put("/updateItem", itemsControllers.update);

module.exports = router;