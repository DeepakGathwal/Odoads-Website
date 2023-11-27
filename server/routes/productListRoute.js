const express = require("express")
const router = express.Router();
const {product, Nearproduct, NearproductByLocation} = require('../controller/product')

router.route("/product").post(product);
router.route("/nearproduct").post(Nearproduct);
router.route("/NearproductByLocation").post(NearproductByLocation);

module.exports = router