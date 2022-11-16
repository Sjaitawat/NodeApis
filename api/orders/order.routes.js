const router = require("express").Router();
const { checkUserToken } = require("../../middleware/tokenValidation");
const { addOrders,getOrdersById } = require("./order.controller");


router.post("/add-order",checkUserToken, addOrders);
router.get("/get-order",checkUserToken, getOrdersById);
module.exports = router;