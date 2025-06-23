const express = require('express');
const router = express.Router();
const controller = require('../../controller/urlController');
const { model } = require('mongoose');

router.post('/shorten', controller.shortUrl);
router.get('/list', controller.listUrls);
router.get('/:shortId', controller.redirectUrl);

module.exports = router;
