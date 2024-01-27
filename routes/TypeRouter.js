const Router = require("express");
const router = Router.Router();
const typeController = require("../controllers/TypeController");
const checkRole = require("../middleware/CheckRoleMiddleWare");

router.post("/",checkRole("ADMIN"), typeController.add);
router.get("/", typeController.getAll);

module.exports = router;