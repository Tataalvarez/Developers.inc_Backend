const Inscription = require("../models/Inscriptions");

async function getInscriptions(){
  try {
    const inscriptions = await Inscription.find({});
    return inscriptions;
  } catch (error) {
    console.log(error);
  }
}

async function getInscription(id){
  // revisar si la inscripcion existe
  const inscription = await Inscription.findById(id);
  if (!inscription) {
    throw new Error("Inscripción no encontrado");
  }
  return inscription;
}

async function newInscription(input) {
  try {
    const inscription = new Inscription(input);
    // almacenar en la DB
    const result = await inscription.save();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function updateInscription(id, input) {
  // Revisar si el inscripcion existe o no
  let inscription = await Inscription.findById(id);
  if (!inscription) {
    throw new Error("Inscripción no encontrada");
  }
  // guardarlo en la base de datos
  inscription = await Inscription.findOneAndUpdate({ _id: id }, input, {
    new: true,
  });
  return inscription;
}

async function deleteInscription(id) {
  // Revisar si el inscription existe o no
  let inscription = await Inscription.findById(id);
  if (!inscription) {
    throw new Error("Inscripción no encontrado");
  }
  // Eliminarlo de la DB
  await Inscription.findByIdAndDelete({_id: id});
  return 'Incripción eliminada correctamente';
}

module.exports = {
  // Query
  getInscriptions,
  getInscription,
  // Resolvers
  newInscription,
  updateInscription,
  deleteInscription,
}