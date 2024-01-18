import { ApolloClient, InMemoryCache } from '@apollo/client';
import categoriesStateVar from './state';

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				question: {
					read() {
						return categoriesStateVar();
					},
				},
			},
		},
		Questions: {
			fields: {
				questionStatus: {
					read(state = 'not answered') {
						return state;
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql/',
	cache,
});

export default client;
