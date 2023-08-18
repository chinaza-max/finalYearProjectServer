const mongoose = require('mongoose');

const co2Schema = new mongoose.Schema({
  Concentration  : Number,
}, {
    timestamps: true, // Add timestamps automatically
  });

const Co2 = mongoose.model('co2', co2Schema);

module.exports = Co2;