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
        default: false
    },
    fecha_ingreso: {
        type: Date,
        default: Date.now()
    },
    fecha_egreso: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Inscription', InscriptionsSchema);