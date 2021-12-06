const mongoose = require('mongoose');

const LiderSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  proyectos: {
    type: Array
  }
});

module.exports = mongoose.model('Lider', LiderSchema);