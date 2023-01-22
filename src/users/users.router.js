const router = require('express').Router()
const userServices = require('./users.http')

router.route('/')
    .get(userServices.getAll)
    .post(userServices.register)

exports.router = router