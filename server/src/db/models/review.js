const { Schema, model, Types } = require('mongoose');

const reviewSchema = new Schema({
  rating: {
    type: Number,
    default: 0
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

module.exports = model('Review', reviewSchema);
