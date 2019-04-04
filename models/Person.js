const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PersonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  city: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  }
});

module.exports = Person = mongoose.model('personSchema', PersonSchema);