const userCtrl = require('../controllers/user');
const projectCtrl = require('../controllers/project');
const inscriptionCtrl = require('../controllers/inscriptions')


// Resolvers
const resolvers = {
  Query: {
    // User
    getUsers: async () => userCtrl.getUsers(),
    getUser: async (_, { token }) => userCtrl.getUser(token),
    // Project
    getProjects: async () => projectCtrl.getProjects(),
    getProject: async (_, { id }) => projectCtrl.getProject(id),
    // Project
    getInscriptions: async () => inscriptionCtrl.getInscriptions(),
    getInscription: async (_, { id }) => inscriptionCtrl.getInscription(id),

  },
  Mutation: {
    // User
    newUser: async (_, { input }) => userCtrl.newUser(input),
    authUser: async (_, { input }) => userCtrl.authUser(input),
    updateUser: async (_, { id, input }) => userCtrl.updateUser(id, input),
    deleteUser: async (_, { id }) => userCtrl.deleteUser(id),
    // Project
    newProject: async (_, { input }) => projectCtrl.getProject(input),
    updateProject: async (_, { id, input }) => projectCtrl.updateProject(id, input),
    deleteProject: async (_, { id }) => projectCtrl.deleteProject(id),

    // Incription
    newInscription: async (_, { input }) => inscriptionCtrl.getInscription(input),
    updateInscription: async (_, { id, input }) => inscriptionCtrl.updateInscription(id, input),
    deleteInscription: async (_, { id }) => inscriptionCtrl.deleteInscription(id),
  },
};

module.exports = resolvers;
