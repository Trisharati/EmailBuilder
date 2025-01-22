const router = require('express').Router()
const temController = require('./Controller')

router.get('/get-template',temController.GetTemplate)
module.exports = router