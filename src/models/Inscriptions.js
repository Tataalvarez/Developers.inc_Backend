const mongoose = require('mongoose');

const InscriptionsSchema = mongoose.Schema({
    estudiante: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    estado: {
        type: String,
        enum: ["ACEPTADA", "RECHAZADA"],
        default: "RECHAZADA",
    },
    fechaIngreso: {
        type: Date,
    },
    fechaEgreso: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('Inscription', InscriptionsSchema);
