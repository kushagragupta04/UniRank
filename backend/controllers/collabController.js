const Collab = require('../models/Collab');

exports.createCollab = async (req, res) => {
    try {
        const collab = await Collab.create({ ...req.body, userId: req.user.id });
        res.status(201).json(collab);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllCollabs = async (req, res) => {
    try {
        const collabs = await Collab.find().populate('userId');
        res.json(collabs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
