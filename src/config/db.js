const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB conectada');
  } catch (error) {
    console.log('Hubo un error');
    console.log(error);
    process.exit(1) // detener la aplicacion
  }


}

module.exports = conectarDB;