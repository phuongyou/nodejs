const express = require("express")
const router = express.Router()
const demoController = require('../app/controllers/DemoModule')

router.get('/', demoController.demo)



module.exports = router