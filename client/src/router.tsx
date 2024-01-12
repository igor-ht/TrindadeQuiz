import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import HtmlQuiz from './pages/HtmlQuiz/HtmlQuiz';
import CssQuiz from './pages/CssQuiz/CssQuiz';
import JavascriptQuiz from './pages/JavascriptQuiz/JavascriptQuiz';

export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/htmlQuiz',
				element: <HtmlQuiz />,
			},
			{
				path: '/cssQuiz',
				element: <CssQuiz />,
			},
			{
				path: '/javascriptQuiz',
				element: <JavascriptQuiz />,
			},
		],
	},
]);
