const mongoose = require('mongoose');

const InscriptionsSchema = mongoose.Schema({
    identificador_estudiante: {
        type: String,
        required: true,
    },
    identificador_proyecto: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        enum: ["ACEPTADA", "RECHAZADA"],
        default: "RECHAZADA"
    },
    fecha_ingreso: {
        type: Date,
        default: Date
    },
    fecha_egreso: {
        type: Date,
        default: Date
    }
});

module.exports = mongoose.model('Inscription', InscriptionsSchema);

