const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/model');
const service = require('../services/service')
const bcrypt = require('bcrypt');

router.get('/users', async (_, res) => {
    try {
        const allUsers = await service.findAllUsers();
        res.json(allUsers);
    } catch (e) {
        res.json({ message: e });
    }
})

router.get('/users/:username', async (req, res) => {
    try {
        const user = await service.findByUsername(req.params.username)
        res.json(user);
    } catch (e) {
        res.json({ message: e });
    }
})


router.post('/users', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    try {
        const addedUser = await service.addOneUser(user);
        res.json(addedUser);
    } catch (e) {
        res.json({ message: e });
    }
})


router.delete('/users/:id', async (req, res) => {
    try {
        const removedUser = await service.deleteOneUser(req.params.id)
        res.json(removedUser);
    } catch (e) {
        res.json({ message: e });
    }
})


router.patch('users/:id', async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });
        const updatedUser = await service.updateOneUser(req.params.id, user);
        res.json(updatedUser);
    } catch (e) {
        res.json({ message: e });
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await service.findByUsername(req.body.username);
        if (!user) return res.status(400).json({ message: 'User not found' });
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) return res.status(500).json({ message: err.message });
            if (!result) return res.status(400).json({ message: 'Invalid login data' });
            const token = jwt.sign({ sub: user.id }, `${process.env.JWT_KEY}`);
            res.json({ token });
        });
    } catch (e) {
        res.json({ message: e });
    }
});


router.get('/checkout', authenticateToken, (req, res) => {
    res.json({ message: 'Authorized' });
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    jwt.verify(token, `${process.env.JWT_KEY}`, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = { id: decoded.sub };
        next();
    });
}

module.exports = router;