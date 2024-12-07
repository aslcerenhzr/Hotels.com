const mongoose = require("mongoose");

// Define a mongoose schema and model for a hotel room
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number_of_guests: {
    type: Number,
    required: true
  },
  rent_per_day: {
    type: Number,
    required: true
  },
  imageurls: {
    type: [String], 
    required: false 
  },
  current_bookings: {
    type: [String],
    required: false
  },
  description: {
    type: String,
    required: true
  },
  average_rating: {
    type: Number,
    required: false
  },
}, {
  timestamps: true
});

const roomModel = mongoose.model('rooms', roomSchema);

module.exports = roomModel;
