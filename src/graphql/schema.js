const { gql } = require("apollo-server");

// Schema
const typeDefs = gql`
  type User {
    id: ID
    nombre: String
    apellido: String
    identificacion: String
    rol: RolUser
    email: String
    estado: EstadoUser
    createdAt: String
  }
  type Token {
    token: String
  }
  type Project {
    id: ID
    titulo: String
    objGeneral: [String]
    objEspecifico: [String]
    presupuesto: Int
    nombreLider: String
    identificacionLider: String
    inscripcion: [Inscription]
    estado: EstadoProject
    fase: FaseProject
    fechaInicial: String
    fechaFinal: String
  }

  type Inscription {
    id: ID
    userId: ID
    projectId: ID
    estado: EstadoInscription
    fechaIngreso: String
    fechaEgreso: String
  }

  type Advance {
    id: ID
    fecha: String
    descripcion: String
    observaciones: [String]
    proyecto: ID
    creadoPor: ID
  }

  input UserInput {
    nombre: String!
    apellido: String!
    identificacion: String!
    rol: RolUser!
    email: String!
    password: String!
  }
  input AuthInput {
    email: String!
    password: String!
  }
  input ProjectInput {
    titulo: String!
    objGeneral: String
    objEspecifico: String
    presupuesto: Int!
    nombreLider: String!
    identificacionLider: String!
    estado: EstadoProject
    fase: FaseProject
    fechaInicial: String
    fechaFinal: String
  }

  input InscriptionInput {
    estudiante: ID!
    proyecto: ID!
    estado: EstadoInscription
    fechaIngreso: String
    fechaEgreso: String
  }

  input AdvanceInput {
    fecha: String
    descripcion: String
    observaciones: String
    proyecto: String!
    creadoPor: String!
  }
  enum EstadoProject {
    ACTIVO
    INACTIVO
  }
  enum FaseProject {
    NULL
    INICIADO
    ENDESARROLLO
    TERMINADO
  }
  enum RolUser {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }
  enum EstadoUser {
    PENDIENTE
    AUTORIZADO
    NOAUTORIZADO
  }
  enum EstadoInscription {
    ACEPTADA
    RECHAZADA
  }

  type Query {
    # Users
    getUsers: [User]
    getUser(email: String): User
    # Projects
    getProjects: [Project]
    getProject(id: ID!): Project
    # Obtener proyectos por lider
    getProjectsLider: [Project]
    # Inscriptions
    getInscriptions: [Inscription]
    getInscription(id: ID!): Inscription
    # Advances
    getAdvances: [Advance]
    getAdvance(id: ID!): Advance
  }
  type Mutation {
    # Users
    authUser(input: AuthInput): Token
    newUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): String
    # Projects
    newProject(input: ProjectInput): Project
    updateProject(id: ID!, input: ProjectInput): Project
    deleteProject(id: ID!): String
    # Inscriptions
    newInscription(input: InscriptionInput): Inscription
    updateInscription(id: ID!, input: InscriptionInput): Inscription
    deleteInscription(id: ID!): String
    # Advances
    newAdvance(input: AdvanceInput): Advance
    updateAdvance(id: ID!, input: AdvanceInput): Advance
    deleteAdvance(id: ID!): String
  }
`;

module.exports = typeDefs;
