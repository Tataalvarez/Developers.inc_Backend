const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  objGeneral: {
    type: String,
    trim: true,
  },
  objEspecifico: {
    type: String,
    trim: true,
  },
  presupuesto: {
    type: Number,
    required: true,
    trim: true,
  },
  nombreLider: {
    type: String,
    required: true,
    trim: true,
  },
  identificacionLider: {
    type: String,
    required: true,
    trim: true,
  },
  estado: {
    type: String,
    enum: ["ACTIVO", "INACTIVO"],
    default: "INACTIVO",
  },
  fase: {
    type: String,
    enum: ["NULL", "INICIADO", "ENDESARROLLO", "TERMINADO"],
    default: "NULL",
    trim: true,
  },
  fechaInicial: {
    type: Date,
    default: Date.now(),
  },
  fechaFinal: {
    type: Date,
  }
});

module.exports = mongoose.model('Project', ProjectSchema);