const express = require('express');
const {categorieFilter, locationFilter, filterData, iconFilter, mapMarkersData} = require('../controller/allfilters');
const router = express.Router()

router.route('/categoryfilter').get(categorieFilter).post(locationFilter)
router.route('/mapFilter').post(iconFilter)
router.route('/filterData').post(filterData)
router.route('/markersdata').post(mapMarkersData)


module.exports = router;