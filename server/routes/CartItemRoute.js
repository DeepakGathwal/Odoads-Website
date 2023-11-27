const express = require("express");
const router = express.Router();
const {
    addOnCart,
    processdCart,
    deleteFromCart,
    cartiemfromdb,
    useritems,
    campaineId,
    getUserCartItem
} = require('../controller/cartItems');
const {verifyToken} = require("../middelware/token");


router.route("/addonCart").post(addOnCart)           
router.route("/deleteFromCart").post(verifyToken, deleteFromCart)
router.route("/processdCart").post(verifyToken, campaineId,processdCart);

router.route("/cartitems").get(verifyToken, getUserCartItem, cartiemfromdb);
router.route("/useritems").get(verifyToken, useritems);


module.exports = router;