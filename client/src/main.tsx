import React from 'react';
import ReactDOM from 'react-dom/client';
import client from './apollo/client.ts';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './router.tsx';
import { ApolloProvider } from '@apollo/client';
import AppContext from './api/AppContext.ts';
import AppApi from './api/AppApi.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<AppContext.Provider value={AppApi}>
				<RouterProvider router={AppRouter} />
			</AppContext.Provider>
		</ApolloProvider>
	</React.StrictMode>
);
