const express = require ('express')
const router = express.Router()
const User = require('../models/Users')

router.post("/signup", async (req, res) => {
    try {
        await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({success: true});
    }
    catch (error) {
        console.log(error)
        res.json({success: false});
    }
})

module.exports = router;