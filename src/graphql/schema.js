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
    objetivos: Objetivos
    presupuesto: Int
    Lider: User
    estado: EstadoProject
    fase: FaseProject
    fecha: Fechas
  }
  type Objetivos {
    id: ID
    generales: String
    especificos: String
  }
  type Fechas {
    inicial: String
    final: String
  }

  type Inscription {
    id: ID
    identificador_estudiante: String
    identificador_proyecto: String
    estado: String
    fecha_ingreso: String
    fecha_egreso: String
  }

  type Advance {
    id: ID
    fecha: String
    descripcion: String
    observaciones: String
    proyecto: String
    creadoPor: String
  }

  input UserInput {
    nombre: String!
    apellido: String!
    identificacion: String!
    rol: RolUser
    email: String!
    password: String!
  }
  input AuthInput {
    email: String!
    password: String!
  }
  input ProjectInput {
    titulo: String!
    objetivos: ObjetivosInput
    presupuesto: Int
    lider: UserInput
    estado: EstadoProject
    fase: FaseProject
    fecha: FechaInput
  }
  input ObjetivosInput {
    generales: String
    especificos: String
  }
  input FechaInput {
    inicial: String
    final: String
  }

  input InscriptionInput {
    identificador_estudiante: String!
    identificador_proyecto: String!
    estado: String
    fecha_ingreso: String
    fecha_egreso: String
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

  type Query {
    # Users
    getUsers: [User]
    getUser(token: String!): User
    # Projects
    getProjects: [Project]
    getProject(id: ID!): Project
    # Inscriptions
    getInscriptions: [Inscription]
    getInscription(id: ID!): Inscription
    # Advances
    getAdvances: [Advance]
    getAdvance(id: ID!): Advance
  }
  type Mutation {
    # Users
    newUser(input: UserInput): User
    authUser(input: AuthInput): Token
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
