const express = require('express');
const router = express.Router();
const todoCtrl = require('../../controllers/api/todo');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/todo/newentry
console.log('TEST');
router.post('/newentry', todoCtrl.newEntry);

// GET /api/todo/getall
router.get('/getall', todoCtrl.getToDoList);

router.post('/edit', todoCtrl.editToDoList);

router.post('/getbyid', todoCtrl.editToDoList);

router.delete('/remove', todoCtrl.remove);

module.exports = router;