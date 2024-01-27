const Router = require("express");
const router = Router.Router();
const userController = require("../controllers/UserController");
const authMiddleWare = require("../middleware/AuthMiddleWare");

router.post( "/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth",authMiddleWare, userController.auth);

module.exports = router;