import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './router.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/state/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={AppRouter} />
		</Provider>
	</React.StrictMode>
);
