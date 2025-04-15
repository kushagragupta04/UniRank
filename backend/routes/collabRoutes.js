const express = require('express');
const router = express.Router();
const { createCollab, getAllCollabs } = require('../controllers/collabController');
const protect = require('../middlewares/auth');

router.post('/', protect, createCollab);
router.get('/', protect, getAllCollabs);

module.exports = router;
