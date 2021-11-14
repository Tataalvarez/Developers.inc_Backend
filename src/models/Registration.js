const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    
    proyecto: {
        type: String,
        state: Boolean,
        required: true
    },
    estudiante: {
        type: Boolean,
        required: true

    },
    estado: {
        type: String,
        required: true,
        default: "Rechazada"
    },
    fechaingreso: {
        type: Date,
        default: Date.now()

    },
    fechaegreso: {
        type: Date,
    },
})

module.exports = mongoose.model('Registration', ProjectSchema);




