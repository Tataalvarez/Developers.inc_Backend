const mongoose = require('mongoose');

const AdvanceSchema = mongoose.Schema({
    fecha: {
        type: Date,
        default: Date.now()
    },
    
    descripcion: {
        type: String,
        required: true,
      },
    
      observaciones: {
        type: String,
    },

    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
      },

      creadoPor: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
      },

});

module.exports = mongoose.model('Advance', AdvanceSchema);