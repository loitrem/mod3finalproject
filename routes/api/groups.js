const express = require('express');
const router = express.Router();
const groupsCtrl = require('../../controllers/api/groups');


// POST /api/users
router.post('/add', groupsCtrl.add);
router.post('/remove', groupsCtrl.remove);