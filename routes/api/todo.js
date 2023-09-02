const express = require('express');
const router = express.Router();
const todoCtrl = require('../../controllers/api/todo');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/todo/newentry
console.log('TEST');
router.post('/newentry', todoCtrl.newEntry);

// GET /api/todo/getall
router.get('/getall', todoCtrl.getToDoList);

// // GET /api/users/check-token
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;