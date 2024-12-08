const express = require("express");
const router = express.Router();

const User = require('../models/user');

router.post("/register", async(req, res) => {
    const newUser = new User(req.body)
    try {
        const user = await newUser.save()
        res.send('User Registered Successfuly');
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

module.exports = router;

router.post("/login", async(req, res) => {
    const {email , password} = req.body

    try {
        const user= await User.findOne({email: email, password:password})
        if (user) {
            req.send(user)
        } else {
            return res.status(400).json({message:'Login Failed'});
        }
    } catch (error) {
        return res.status(400).json({error});
    }
});

module.export=router