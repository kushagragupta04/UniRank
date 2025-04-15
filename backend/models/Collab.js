const mongoose = require('mongoose');

const collabSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    lookingFor: String,
    skillsRequired: [String],
    availability: String,
    contactEmail: String
  }, { timestamps: true });
  
  module.exports = mongoose.model('Collab', collabSchema);
  