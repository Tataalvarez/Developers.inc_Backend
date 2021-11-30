const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
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
  identificacion: {
    type: String,
    required: true,
    trim: true,
  },
  estado: {
    type: String,
    enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"],
    default: "PENDIENTE"
  },
  rol: {
    type: String,
    required: false,
    enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"],
    default: "PENDIENTE"
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model('User', UserSchema);