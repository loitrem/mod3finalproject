const express = require('express');
const router = express.Router();
const todoCtrl = require('../../controllers/api/todo');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/newentry', todoCtrl.newEntry);

// // POST /api/users/login
// router.post('/login', usersCtrl.login);

// // GET /api/users/check-token
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;