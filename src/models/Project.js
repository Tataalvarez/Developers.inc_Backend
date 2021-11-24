const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  objetivos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Objetivos",
    trim: true,
  },
  presupuesto: {
    type: Number,
    required: true
  },
  lider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  estado: {
    type: String,
    default: "InActivo"
  },
  fase: {
    type: String,
    default: null,
    trim: true
  },
  fecha: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fecha",
  }
});

module.exports = mongoose.model('Project', ProjectSchema);