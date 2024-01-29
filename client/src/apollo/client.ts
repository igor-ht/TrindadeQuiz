import { ApolloClient, InMemoryCache } from '@apollo/client';
// import categoriesStateVar from './state';

const cache = new InMemoryCache({
	typePolicies: {
		// Query: {
		// 	fields: {
		// 		category: {
		// 			read() {
		// 				return categoriesStateVar();
		// 			},
		// 		},
		// 	},
		// },
		Question: {
			fields: {
				status: {
					read(status = 'not answered') {
						return status;
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
	cache,
});

export default client;
