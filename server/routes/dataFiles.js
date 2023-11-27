const express = require('express');
const {excel, powerpoint} = require('../controller/dataFiles');
const { verifyToken } = require('../middelware/token');

const router = express.Router();

router.route('/excel').post(excel);
router.route('/powerpoint').post(powerpoint);

module.exports = router;