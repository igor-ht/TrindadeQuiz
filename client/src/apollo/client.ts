import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
	typePolicies: {
		Category: {
			keyFields: ['id'],
			fields: {
				questions: {
					merge(existing = [], incoming) {
						return [...existing, ...incoming];
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	uri: import.meta.env.VITE_GRAPHQL_SCHEMA,
	cache,
});

export default client;
