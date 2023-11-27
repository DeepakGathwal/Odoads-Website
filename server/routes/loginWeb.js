const express = require('express');
const {sendPasswordEmail} = require('../controller/otp');
const {
    register,
    login,
    getuser,
    googleLogin,
    logout,
    refreshToken,
    resetPasswordEmail,
    changepasswoed,
    updateProfile,
    linkdinLogin,
    registerLogin,
    companyDetails,
    updateImage,
} = require('../controller/REGISTERlOGIN');
const { Profile, getItemid, allcompanyData } = require('../controller/userdata');
const upload = require('../middelware/ImageUpload');
const {verifyToken} = require('../middelware/token');
const router = express.Router()
router.route('/register').post(register)
router.route('/registerOtp').post(registerLogin);
router.route('/login').post(login).get(verifyToken, Profile, getItemid);
router.route('/user').get(verifyToken, getuser).post(linkdinLogin)
router.route('/googleSingUp').post(googleLogin);
router.route('/logout').post(verifyToken, logout).get(verifyToken, refreshToken, getuser);
router.route('/forgetpassword').put(verifyToken, changepasswoed).post(sendPasswordEmail);
router.route('/resetPassword').patch(resetPasswordEmail);
router.route('/updateProfile').post(verifyToken, upload.single("photo"), updateProfile);
router.route('/companydata').post(verifyToken, companyDetails);
router.route('/allcompany').get(verifyToken, allcompanyData);
router.route('/profilePic').patch(verifyToken, updateImage);
module.exports = router;
