const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');
const hotelController = require('../controllers/hotelController');

router.get('/cities', cityController.getCities);
router.get('/cities/:id', cityController.getCityById);
router.post('/calculate-total', hotelController.calculateTotal);

module.exports = router;
