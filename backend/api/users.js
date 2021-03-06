const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.get('/', (req, res) => {
    const{name,email} = req.body;
    const newUser = new User({
        name: name, email: email
    });
    newUser.save().then(()=>
        res.json({
            message:"Created account successfully"
        }))
        .catch(err => res.status(400).json({
            "error":err,
            "message":"Error creating account"
        }))
})

module.exports = router;