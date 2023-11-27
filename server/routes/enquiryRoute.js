const express = require("express")
const router = express.Router();
const {message, review, getReview} = require('../controller/enquiry')

router.route("/message").post(message);
router.route("/review").post(review).get(getReview)

module.exports = router