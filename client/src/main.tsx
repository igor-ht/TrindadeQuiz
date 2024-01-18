import React from 'react';
import ReactDOM from 'react-dom/client';
import client from './apollo/client.ts';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './router.tsx';
import { ApolloProvider } from '@apollo/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<RouterProvider router={AppRouter} />
		</ApolloProvider>
	</React.StrictMode>
);
