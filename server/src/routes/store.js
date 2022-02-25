'use strict'

const express = require('express');
const storeController = require('../controllers/store');
const router = express.Router();

router.get('/stores', storeController.list);

router.post('/stores', storeController.save);


module.exports = router;