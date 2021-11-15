const Advance = require("../models/Advance");

async function getAdvances(){
  try {
    const advances = await Advance.find({});
    return advances;
  } catch (error) {
    console.log(error);
  }
}

async function getAdvance(id){
    // revisar si el avance existe
    const advance = await Advance.findById(id);
    if (!advance) {
      throw new Error("Avance no encontrado");
    }
    return advance;
  }
  
  async function newAdvance(input) {
    try {
      const advance = new Advance(input);
      // almacenar en la DB
      const result = await advance.save();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function updateAdvance(id, input) {
    // Revisar si el avance existe o no
    let advance = await Advance.findById(id);
    if (!advance) {
      throw new Error("Avance no encontrado");
    }
    // guardarlo en la base de datos
    advance = await Advance.findOneAndUpdate({ _id: id }, input, {
      new: true,
    });
    return advance;
  }
  
  async function deleteAdvance(id) {
    // Revisar si el avance existe o no
    let advance = await Advance.findById(id);
    if (!advance) {
      throw new Error("Avance no encontrado");
    }
    // Eliminarlo de la DB
    await Advance.findByIdAndDelete({_id: id});
    return 'Avance eliminado correctamente';
  }
  
  module.exports = {
    // Query
    getAdvances,
    getAdvance,
    // Resolvers
    newAdvance,
    updateAdvance,
    deleteAdvance,
  }