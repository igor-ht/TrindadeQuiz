import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
	typePolicies: {
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
	uri: '',
	cache,
});

export default client;
