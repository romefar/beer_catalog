const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const favBeerSchema = new Schema({
  beerId: {
    type: Number,
    required: true,
    unique: true
  },
  addDate: {
    type: Date,
    default: new Date()
  }
});

favBeerSchema.plugin(uniqueValidator);

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  image: {
    type: String
  },
  favourites: [favBeerSchema]
}, {
  timestamps: true
});

userSchema.plugin(uniqueValidator);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  return userObject; // return raw object
};

module.exports = model('User', userSchema);
