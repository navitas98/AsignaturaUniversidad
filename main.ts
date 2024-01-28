import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/Query.ts";
import { Mutation } from "./resolvers/Mutation.ts";
import { typeDefs } from "./gql/schema.ts";
import montoose from "mongoose";
import { Examen } from "./resolvers/Examen.ts";
import { Practica } from "./resolvers/Practica.ts";
import { Tema } from "./resolvers/Tema.ts";
import { Asignatura } from "./resolvers/Asignatura.ts";
const MONGO_URL = Deno.env.get("MONGO_URL");
if (!MONGO_URL) {
  throw new Error("Please provide a MongoDB connection string");
}

// Connect to MongoDB
await montoose.connect(MONGO_URL);

console.info("🚀 Connected to MongoDB");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Practica,
    Examen,
    Tema,
    Asignatura
  },
});

const { url } = await startStandaloneServer(server);
console.info(`🚀 Server ready at ${url}`);