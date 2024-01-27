const Router = require("express");
const router = Router.Router();
const deviceController = require("../controllers/DeviceController");

router.post("/", deviceController.add);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne); // {path}/1

module.exports = router;