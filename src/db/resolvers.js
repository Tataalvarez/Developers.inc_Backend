const User = require("../models/User");
const Project = require("../models/Project");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

const crearToken = (user, secreta, expiresIn) => {
  // console.log(user);
  const { id, nombre, apellido, email, estado } = user;

  return jwt.sign({ id, nombre, apellido, email, estado }, secreta, { expiresIn });
};

// Resolvers
const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (error) {
        console.log(error)
      }
    },
    getUser: async (_, { token }) => {
      const userId = await jwt.verify(token, process.env.SECRETA);
      return userId;
    },
    getProjects: async () => {
      try {
        const projects = await Project.find({});
        return projects;
      } catch (error) {
        console.log(error);
      }
    },
    getProject: async (_, { id }) => {
      // revisar si el producto existe
      const project = await Project.findById(id);
      if (!project) {
        throw new Error("Project no encontrado");
      }
      return project;
    },
  },
  Mutation: {
    newUser: async (_, { input }) => {
      const { email, password } = input;
      // Revisar si el usaurio ya esta registrado
      const existsUser = await User.findOne({ email });
      if (existsUser) {
        throw new Error("El user ya esta registrado");
      }
      // Hashear su pasword
      const salt = await bcrypt.genSalt(10);
      input.password = await bcrypt.hash(password, salt);
      try {
        // Guardarlo en la base de datos
        const user = new User(input);
        user.save(); // guardarlo en la DB
        return user;
      } catch (error) {
        console.log(error);
      }
    },
    authUser: async (_, { input }) => {
      const { email, password } = input;
      // Si el ususario existe
      const existsUser = await User.findOne({ email });
      if (!existsUser) {
        throw new Error("El usuario no existe");
      }
      // Revisar si el prassword es correcto
      const passwordCorrect = await bcrypt.compare(
        password,
        existsUser.password
      );
      if (!passwordCorrect) {
        throw new Error("La contraseña es incorrecta");
      }
      // Crear el token
      return {
        token: crearToken(existsUser, process.env.SECRETA, "1h"),
      };
    },
    updateUser: async (_, {id, input}) => {
      // Revisar si el user existe
      let user = await User.findById(id);
      if (!user){
        throw new Error("Usuario no encontrado");
      }
      // guardarlo en la base de datos
      user = await User.findOneAndUpdate({_id: id}, input, {new: true,});
      return user;
    },
    deleteUser: async (_, {id}) => {
      // Revisar si el user existe o no
      let user = await User.findById(id);
      if (!user) {
        throw new Error("Usuario no encontrado");
      }
      // Eliminarlo de la DB
      await User.findByIdAndDelete({_id: id});
      return 'Usuario eliminado correctamente';
    },
    newProject: async (_, { input }) => {
      try {
        const project = new Project(input);
        // almacenar en la DB
        const result = await project.save();
        return result;
      } catch (error) {
        console.log(error);
      }
    },
    updateProject: async (_, { id, input }) => {
      // Revisar si el project existe o no
      let project = await Project.findById(id);
      if (!project) {
        throw new Error("Proyecto no encontrado");
      }
      // guardarlo en la base de datos
      project = await Project.findOneAndUpdate({ _id: id }, input, {
        new: true,
      });
      return project;
    },
    deleteProject: async (_, {id}) => {
      // Revisar si el project existe o no
      let project = await Project.findById(id);
      if (!project) {
        throw new Error("Proyecto no encontrado");
      }
      // Eliminarlo de la DB
      await Project.findByIdAndDelete({_id: id});
      return 'Proyecto eliminado correctamente';
    }
  },
};

module.exports = resolvers;