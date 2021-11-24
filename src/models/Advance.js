const mongoose = require("mongoose");

const AdvanceSchema = mongoose.Schema({
  fecha: {
    type: Date,
    default: Date.now(),
  },

  descripcion: {
    type: String,
    required: true,
  },

  observaciones: {
    type: String,
  },

  proyecto: {
    type: String,
    required: true,
  },

  creadoPor: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Advance", AdvanceSchema);
