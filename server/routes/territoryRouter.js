const Router = require("express");
const router = new Router();
const territoryController = require("../controllers/territoryController");
//const checkRole = require("../middleware/checkRoleMiddleware");

//router.post("/", checkRole("ADMIN"), territoryController.create);
router.post("/", territoryController.create);
router.get("/", territoryController.getAll);

module.exports = router;
