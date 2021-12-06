const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const jwt = require('jsonwebtoken');
const conectarDB = require("./config/db");

// Conectar a la DB
conectarDB();

// Servidor
const server = new ApolloServer({
  cors: {
    origin: "*",
    credentials: true,
  },
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // console.log(req.headers['authorization'])

    // console.log(req.headers);

    const token = req.headers["authorization"] || "";
    if (token) {
      try {
        const usuario = jwt.verify(
          token.replace("Bearer ", ""),
          process.env.SECRETA
        );
        // console.log(usuario);
        return {
          usuario,
        };
      } catch (error) {
        console.log("Hubo un error");
        console.log(error);
      }
    }
  },
});

// Arrancar el servidor
server.listen({ port: process.env.PORT || 4000 }).then( ({url}) => {
  console.log(`Servidor listo en la URL ${url}`)
})
