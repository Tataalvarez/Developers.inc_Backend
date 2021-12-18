const mongoose = require("mongoose");

const AdvanceSchema = mongoose.Schema({
  fecha: {
    type: Date,
    //default: Date.now(),
  },

  descripcion: {
    type: String,
    //required: false,
  },

  observaciones: {
    type: String,
  },

  proyecto: {
    type: String,
    //required: false,
  },

  creadoPor: {
    type: String,
  },
});

module.exports = mongoose.model("Advance", AdvanceSchema);
