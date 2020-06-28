const { Schema, model, Types } = require('mongoose');

const commentSchema = new Schema({
  description: {
    type: String,
    required: true,
    maxlength: 900
  },
  creatorId: {
    type: Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = model('Comment', commentSchema);
