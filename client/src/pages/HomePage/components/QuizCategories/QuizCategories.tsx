import './QuizCategories.scss';
import { useAppSelector } from '@/redux/hooks';
import { userStatusState } from '@/redux/features/userStatusSlice';
import CategoryCard from './CategoryCard/CategoryCard';

export default function QuizCategories() {
	const userStatus = useAppSelector(userStatusState);

	return (
		<div className="quiz-categories">
			{userStatus.categories.map((category) => {
				return (
					<CategoryCard
						key={category}
						{...{ name: category, totalQuestions: 10, answered: 0, correct: 0 }}
					/>
				);
			})}
		</div>
	);
}
