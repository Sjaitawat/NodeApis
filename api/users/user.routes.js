const router = require("express").Router();
// const { addUser, login } = require("./user.controller");
const { addUser, login }  = require('./user.controller')

router.post("/add-user", addUser);
router.post("/login-user", login);
module.exports = router;