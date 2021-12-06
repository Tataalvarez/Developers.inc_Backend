const mongoose = require("mongoose");

const AdvanceSchema = mongoose.Schema({
  fecha: {
    type: Date,
    default: Date.now(),
  },

  descripcion: {
    type: String,
    required: true,
    trim: true,
  },

  observaciones: {
    type: String,
    trim: true,
  },

  proyecto: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Project',
  },

  estudiante: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

module.exports = mongoose.model("Advance", AdvanceSchema);
