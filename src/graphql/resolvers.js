const userCtrl = require('../controllers/user');
const projectCtrl = require('../controllers/project');
const inscriptionCtrl = require('../controllers/inscriptions')
const advanceCtrl = require('../controllers/advance')

// Resolvers
const resolvers = {
  Query: {
    // User
    getUsers: async () => userCtrl.getUsers(),
    getUser: async (_, { email }) => userCtrl.getUser(email),
    // Project
    getProjects: async () => projectCtrl.getProjects(),
    getProject: async (_, { id }) => projectCtrl.getProject(id),
    getProjectsLider: async (_, {}, ctx) => projectCtrl.getProjectsLider(),
    // Project
    getInscriptions: async () => inscriptionCtrl.getInscriptions(),
    getInscription: async (_, { id }) => inscriptionCtrl.getInscription(id),
    // Advance
    getAdvances: async () => advanceCtrl.getAdvances(),
    getAdvance: async (_, { id }) => advanceCtrl.getAdvance(id),
  },
  Mutation: {
    // User
    newUser: async (_, { input }) => userCtrl.newUser(input),
    authUser: async (_, { input }) => userCtrl.authUser(input),
    updateUser: async (_, { input }, ctx) => userCtrl.updateUser(input, ctx),
    deleteUser: async (_, { id }) => userCtrl.deleteUser(id),
    // Project
    newProject: async (_, { input }, ctx) => projectCtrl.newProject(input),
    updateProject: async (_, { id, input }) => projectCtrl.updateProject(id, input),
    deleteProject: async (_, { id }) => projectCtrl.deleteProject(id),

    // Incription
    newInscription: async (_, { input }) => inscriptionCtrl.newInscription(input),
    updateInscription: async (_, { id, input }) => inscriptionCtrl.updateInscription(id, input),
    deleteInscription: async (_, { id }) => inscriptionCtrl.deleteInscription(id),

    // Advance
    newAdvance: async (_, { input }) => advanceCtrl.newAdvance(input),
    updateAdvance: async (_, { id, input }) => advanceCtrl.updateAdvance(id, input),
    deleteAdvance: async (_, { id }) => advanceCtrl.deleteAdvance(id),
  },
};

module.exports = resolvers;
