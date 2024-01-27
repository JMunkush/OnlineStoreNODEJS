const Router = require("express");
const router = Router.Router();
const typeController = require("../controllers/TypeController");

router.post("/", typeController.add);
router.get("/", typeController.getAll);

module.exports = router;