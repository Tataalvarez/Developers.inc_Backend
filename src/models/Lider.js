const mongoose = require('mongoose');

const LiderSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  identificacion: {
    type: String,
    trim: true,
  }
});

module.exports = mongoose.model('Lider', LiderSchema);