const express = require('express');
const router = express.Router();
const calendarCtrl = require('../../controllers/api/calendar');

// POST /api/calendar/newentry

router.post('/newentry', calendarCtrl.newEntry);
router.post('/update', calendarCtrl.update);
router.post('/findbydate', calendarCtrl.findByDate);
router.post('/findbyid', calendarCtrl.findById);

module.exports = router;