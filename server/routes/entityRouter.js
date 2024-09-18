const Router = require("express");
const router = new Router();
const entityController = require("../controllers/entityController");
//const checkRole = require("../middleware/checkRoleMiddleware");

//router.post("/", checkRole("ADMIN"), categoryController.create);
router.post("/", entityController.create);
router.get("/", entityController.getAll);
router.get("/:id", entityController.getOne);

module.exports = router;
