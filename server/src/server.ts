import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';

import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import services from './services';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './modules/**/*.graphql')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './modules/**/*.resolver.ts')));
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const port = process.env.PORT || 4010;

(async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  app.get('/', (_, res) => res.send('server is running'));

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => {
      return {
        req,
        res,
        services,
      };
    },
  });
  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(port, () => {
    console.log(`express server started at port ${port}`);
  });
})();
