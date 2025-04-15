const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('createdBy').sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};