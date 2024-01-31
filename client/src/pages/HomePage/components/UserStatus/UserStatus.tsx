import './UserStatus.scss';
import categoriesStateVar from '@/apollo/state';
import { useReactiveVar } from '@apollo/client';

export default function UserStatus() {
	const categoriesVar = useReactiveVar(categoriesStateVar);

	const calculateProgress = () => {
		const totalQuestions = categoriesVar.reduce((acc, category) => acc + category.totalQuestions, 0);
		const answeredQuestions = categoriesVar.reduce((acc, category) => acc + category.currentQuestion, 0);
		if (!totalQuestions) return '0%';
		return Math.round((answeredQuestions / totalQuestions) * 100) + '%';
	};

	const calculatePoints = () => {
		const totalPoints = 100;
		const totalQuestions = categoriesVar.reduce((acc, category) => acc + category.totalQuestions, 0);
		if (!totalQuestions) return '0/100';
		const pointsPerQuestion = totalPoints / totalQuestions;
		const answeredQuestions = categoriesVar.reduce((acc, category) => acc + category.currentQuestion, 0);
		const pointsEarned = Math.round(answeredQuestions * pointsPerQuestion);
		return `${pointsEarned}/${totalPoints}`;
	};

	return (
		<div className="user-status">
			<div className="card">
				<section>
					<h1>Current progress: {calculateProgress()}</h1>
				</section>
				<section>
					<h1>Total Points: {calculatePoints()} </h1>
				</section>
			</div>
		</div>
	);
}
