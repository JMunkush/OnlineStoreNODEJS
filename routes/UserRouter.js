const Router = require("express");
const router = Router.Router();

router.post( "/registration",);
router.post("/login",);
router.get("/auth", (req, res) => {
    res.json({message:"works"});
});

module.exports = router;