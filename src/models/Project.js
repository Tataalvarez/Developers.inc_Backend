const mongoose = require('mongoose');
const Objetivos = require('./Objetivos');

const ProjectSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  objetivos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Objetivos",
  },
  presupuesto: {
    type: Number,
    required: true
  },
  lider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lider",
  },
  estado: {
    type: String,
    default: "PENDIENTE"
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