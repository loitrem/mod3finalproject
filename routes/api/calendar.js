const express = require('express');
const router = express.Router();
const calendarCtrl = require('../../controllers/api/calendar');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/todo/newentry
console.log('HERE');
router.post('/newentry', calendarCtrl.newEntry);