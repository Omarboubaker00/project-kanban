const router = require("express").Router();
const { getAll } = require("./controller");
router.route("/").get(getAll);

module.exports = router;
