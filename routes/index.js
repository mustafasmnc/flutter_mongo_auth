const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello world')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

//@desc adding new user
//@route POST /adduser
router.post('/adduser', actions.addNew)

//@desc authenticate a user
//@route POST /authenticate
router.post('/authenticate', actions.authenticate)

//@desc get info on a user
//@route GET /getinfo
router.get('/getinfo', actions.getInfo)

module.exports = router