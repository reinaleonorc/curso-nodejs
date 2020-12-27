const express = require('express');
const controller = require('../Controllers/contact.js');
const router = express.Router();
router.get('/'+ controller.renderContact);
module.exports = router;