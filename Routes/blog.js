const express = require('express');
const controller = require('../Controllers/blog.js');
const router = express.Router();
router.get('/'+ controller.renderBlog);
module.exports = router;