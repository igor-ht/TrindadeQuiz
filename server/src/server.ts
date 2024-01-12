import express from 'express';
import cors from 'cors';
import schema from './schema/schema';
import { graphqlHTTP } from 'express-graphql';
import { nodeEnv } from './config';

const server = express();

// server.use(cors);

server.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: nodeEnv,
	})
);

export default server;
