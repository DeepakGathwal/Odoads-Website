const express = require('express');
const {sendOTP, checkOTP, changePassword, loginwithOTP} = require('../controller/otp');
const router = express.Router()

router.route('/mobileOtp').post(sendOTP).put(loginwithOTP)
router.route('/check').put(checkOTP).post(changePassword)





// OTP REGISTERATION





module.exports = router;