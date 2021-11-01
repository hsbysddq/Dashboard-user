const { Router } = require("express");
const controller = require("../controllers/controller");
// const db = require("db");

const routers = Router();

routers.get("/register", controller.viewRegister);
routers.get("/login", controller.viewLogin);
// routers.get("/book/:id", controller.viewBook);
routers.get("/dashboard", controller.viewDashboard);
routers.get("/dashboard/update", controller.viewUpdate);
routers.get("/dashboard/add-list", controller.viewList);

// router.delete("/dashboard", controller.deleteBook);

routers.post("/create-user", controller.createRegister);
routers.post("/create-login", controller.createLogin);
routers.post("/create-list", controller.createList);
routers.put("/update-book", controller.updateList);
// routers.delete("/delete-book", controller.deleteBook);
// routers.delete("/delete-list", controller.deleteList);






module.exports = routers;