
import colors from "colors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer} from "@apollo/server/standalone"
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";

// env config 
dotenv.config();


// envir vars 
const PORT = process.env.PORT || 9090;


// init server 
const server =new ApolloServer({
  typeDefs,
  resolvers
 });

// listen server 
const serverData = async() => {
  await startStandaloneServer(server, {
    listen : {
      port : PORT
    }
  })
  console.log(`Server is running on port ${PORT}`.bgCyan.black); 
}

serverData(); 









