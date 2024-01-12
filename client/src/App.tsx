import './App.scss';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import MainContainer from './layout/MainContainer/MainContainer';

function App() {
	return (
		<div className="app-container">
			<Header />
			<MainContainer />
			<Footer />
		</div>
	);
}

export default App;
