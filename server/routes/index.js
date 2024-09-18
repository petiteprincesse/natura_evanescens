const Router = require("express");
const router = new Router();
const typeRouter = require("./typeRouter");
const categoryRouter = require('./categoryRouter')
const entityRouter = require("./entityRouter");
const infoRouter = require("./infoRouter");
const statusRouter = require("./statusRouter");
const subCategoryRouter = require("./subCategoryRouter");
const territoryRouter = require("./territoryRouter");
const subTerritoryRouter = require("./subTerritoryRouter");
const userRouter = require("./userRouter");

router.use('/user', userRouter)
router.use("/type", typeRouter);
router.use("/category", categoryRouter);
router.use("/territory", territoryRouter);
router.use("/user", userRouter);
router.use("/entity", entityRouter);
router.use("/info", infoRouter);
router.use("/status", statusRouter);
router.use("/user", userRouter);

module.exports = router;
