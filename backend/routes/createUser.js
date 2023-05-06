const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = "ST7YBwHnOojI76My3DdyCejO8tiJ35YEfPafTiuN3Z9WnZzdvLnitLKuRfIj5sj"

// Signup User
router.post("/signup", [
    body('email', 'Incorrect Email address').isEmail(),
    body('first_name', 'First Name is too short').isLength({ min: 3 }),
    body('last_name', 'Last Name is too short').isLength({ min: 3 }),
    body('password', 'Password Length is too short(min: 8 characters)').isLength({ min: 8 })],
    async (req, res) => {
        // Signup Validation
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let securePassword = await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: securePassword
            }).then(res.json({ success: true }))
        }
        catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })

// Login User
router.post("/login",
    body('email', 'Incorrect Email address').isEmail(),
    body('password', 'Password Length is too short(min: 8 characters)').isLength({ min: 8 }),
    async (req, res) => {
        // Login Validation
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let email = req.body.email
            let userData = await User.findOne({ email })
            if (!userData) {
                return res.status(400).json({ errors: "Invalid Credentials" });
            }
            const passwordCompare = await bcrypt.compare(req.body.password, userData.password)
            if (!passwordCompare) {
                return res.status(400).json({ errors: "Invalid Credentials" });
            }
            
            const data = {
                user: {
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret)
            return res.json({ success: true, authToken: authToken });
        }
        catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })

module.exports = router;