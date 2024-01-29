import './HomePage.scss';
import UserStatus from './components/UserStatus/UserStatus';
import QuizCategories from './components/QuizCategories/QuizCategories';

export default function HomePage() {
	
	return (
		<div className="home-page-container">
			<UserStatus />
			<QuizCategories />
		</div>
	);
}
