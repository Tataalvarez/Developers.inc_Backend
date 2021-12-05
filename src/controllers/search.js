const User = require("../models/User");
const Project = require("../models/Project");


async function getSearch(name){
    // revisar si el producto existe
    const usuario = await User.findById(name);
    const project = await Project.findById(name);
    if (!usuario) {
      throw new Error("El usuario no existe!");
    }
    else if(!project)
    return project;
  }


//   const project = await Project.findById(id);
//   if (!project) {
//     throw new Error("Project no encontrado");
//   }
//   return project;

//   try
//   {
//     const projects = await Project.find({});
//     return projects;
//   }
// catch (error)
//   {
//     console.log(error);
//   }