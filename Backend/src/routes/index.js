const { Router } = require("express");

const itemRoute = require("./itemRoute.js");

const router = Router();

//Rutas
router.use("/items", itemRoute);

module.exports = router;