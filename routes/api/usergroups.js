const express = require('express');
const router = express.Router();
const groupsCtrl = require('../../controllers/api/usergroups');


// POST /api/users
router.post('/add', groupsCtrl.add);
router.post('/remove', groupsCtrl.remove);
router.get('/findall', groupsCtrl.findAll);

module.exports = router;