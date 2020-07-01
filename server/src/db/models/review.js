const { Schema, model, Types } = require('mongoose');

const reviewSchema = new Schema({
  rating: {
    type: Number,
    default: 0
  },
  likes: [{
    type: Types.ObjectId,
    required: true,
    ref: 'User'
  }],
  dislikes: [{
    type: Types.ObjectId,
    required: true,
    ref: 'User'
  }],
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

module.exports = model('Review', reviewSchema);
