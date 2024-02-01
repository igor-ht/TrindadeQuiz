import './QuizCategories.scss';
import CategoryCard from './CategoryCard/CategoryCard';
import categoriesStateVar from '@/apollo/state';
import { useReactiveVar } from '@apollo/client';

export default function QuizCategories() {
	const categoriesVar = useReactiveVar(categoriesStateVar);

	return (
		<div className="quiz-categories">
			{categoriesVar
				?.sort((a, b) => +a.id - +b.id)
				?.map((category) => {
					if (category)
						return (
							<CategoryCard
								key={category.name}
								{...{
									name: category.name?.toUpperCase(),
									totalQuestions: category.totalQuestions,
									answered: category.currentQuestion,
									correct: category.correctAnswers,
								}}
							/>
						);
				})}
		</div>
	);
}
