const { Schema, model, Types } = require('mongoose');

const commentSchema = new Schema({
  rating: {
    type: Number,
    default: 0,
    required: true
  },
  beerId: {
    type: Number,
    required: true
  },
  comments: [{
    type: Types.ObjectId,
    required: true,
    ref: 'Comment'
  }]
}, {
  timestamps: true
});

module.exports = model('Review', commentSchema);
