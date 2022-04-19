const { Router } = require("express");
const router = Router();
const itemsControllers = require("../controllers/item");

router.get("/getAll", itemsControllers.getAll);

module.exports = router;