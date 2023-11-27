const express = require('express');
const { city, SearchData, company, dataForFilter} = require('../controller/mediaController');


const router = express.Router();


router.route('/searchMedia').post(SearchData)
router.route('/filters').post(dataForFilter)
router.route("/citys").post(city)


module.exports = router;