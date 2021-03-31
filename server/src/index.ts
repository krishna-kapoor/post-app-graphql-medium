import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { PORT } from "./constants";
import UserResolver from "./resolvers/user.resolver";

const main = async (port: number | string) => {
  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: true,
    }),
  });

  server.applyMiddleware({ app });

  app.use(cors({ origin: "http://localhost:3000" }));

  app.listen(port, () =>
    console.log(`Server listening on http://localhost:${port}${server.graphqlPath}`)
  );
};

main(PORT).catch(console.error);
