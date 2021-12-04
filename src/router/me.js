const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/store/courses', meController.show);
router.get('/recycle/courses', meController.recycle);


module.exports = router;
