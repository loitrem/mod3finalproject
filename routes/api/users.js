const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const chatCtrl = require('../../controllers/api/chat');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/signup', usersCtrl.create);

// POST /api/users/login
router.post('/login', usersCtrl.login);

// GET /api/users/check-token
router.get('/getallusers', usersCtrl.getAllUsers);

router.post('/getone', usersCtrl.getOne);

module.exports = router;