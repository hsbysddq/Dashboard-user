const { Router } = require("express");
const controller = require("../controllers/controller");

const routers = Router();

routers.get("/register", controller.viewRegister);
routers.get("/login", controller.viewLogin);

routers.post("/create-user", controller.createRegister);
routers.post("/create-login", controller.createLogin);


module.exports = routers;