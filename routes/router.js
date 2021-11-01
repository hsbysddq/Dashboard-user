const { Router } = require("express");
const controller = require("../controllers/controller");

const routers = Router();

routers.get("/register", controller.viewRegister);
routers.get("/login", controller.viewLogin);
routers.get("/dashboard", controller.viewDashboard);
routers.get("/dashboard/update", controller.viewUpdate);
routers.get("/dashboard/add-list", controller.viewList);
routers.get("/dashboard/update", controller.viewUpdate);
routers.get("/dashboard/:name", controller.viewBook);



routers.post("/create-user", controller.createRegister);
routers.post("/create-login", controller.createLogin);
routers.post("/create-list", controller.createList);
routers.put("/dashboard/update-book", controller.updateBook);

routers.post("/dashboard", controller.deleteBook);








module.exports = routers;