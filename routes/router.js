const { Router } = require("express");
const controller = require("../controllers/controller");

const routers = Router();

routers.get("/register", controller.viewRegister);
routers.get("/login", controller.viewLogin);
routers.get("/dashboard", controller.viewDashboard);
routers.get("/dashboard/add-list", controller.viewList);

routers.post("/create-user", controller.createRegister);
routers.post("/create-login", controller.createLogin);
routers.post("/create-list", controller.createList);


module.exports = routers;