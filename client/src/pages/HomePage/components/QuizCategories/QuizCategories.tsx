import './QuizCategories.scss';
import CategoryCard from './CategoryCard/CategoryCard';
import { GET_ALL_CATEGORIES } from '@/apollo/queries';
import { useQuery } from '@apollo/client';

export default function QuizCategories() {
	const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

	if (loading) return <div className="home-page-container">Loading...</div>;
	if (error && !data) return <div className="home-page-container">We got a problem</div>;

	if (data)
		return (
			<div className="quiz-categories">
				{data.categories.map((category: any) => {
					return (
						<CategoryCard
							key={category.name}
							{...{ name: category.name.toUpperCase(), totalQuestions: 10, answered: 0, correct: 0 }}
						/>
					);
				})}
			</div>
		);
}
