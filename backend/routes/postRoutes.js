const express = require('express');
const router = express.Router();
const { createPost, getAllPosts } = require('../controllers/postController');
const protect = require('../middlewares/auth');

router.post('/', protect, createPost);
router.get('/', protect, getAllPosts);

module.exports = router;