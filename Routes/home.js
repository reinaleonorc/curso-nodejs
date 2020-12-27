const express = require('express');
const controller = require('../Controllers/home.js');
const router = express.Router();
router.get('/'+ controller.renderHome);
module.exports = router;