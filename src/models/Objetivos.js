const mongoose = require('mongoose');

const ObjetivosSchema = mongoose.Schema({
  generales: {
    type: String,
    trim: true
  },
  especificos: {
    type: String,
    trim: true,
  }
});

module.exports = mongoose.model('Objetivos', ObjetivosSchema);