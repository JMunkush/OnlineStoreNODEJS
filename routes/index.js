const Router = require("express");
const router = Router.Router();

const deviceRouter = require("./DeviceRouter");
const userRouter = require("./UserRouter");
const typeRouter = require("./TypeRouter");

router.use("/users", userRouter);
router.use("/types", typeRouter);
router.use("/devices", deviceRouter);

module.exports = router;