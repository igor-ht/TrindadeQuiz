import './HomePage.scss';
import UserStatus from './components/UserStatus/UserStatus';
import QuizCategories from './components/QuizCategories/QuizCategories';
import categoriesStateVar from '@/apollo/state';
import { GET_ALL_CATEGORIES } from '@/apollo/queries';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

export default function HomePage() {
	const { data, loading, error } = useQuery(GET_ALL_CATEGORIES);

	useEffect(() => {
		const categories = categoriesStateVar();
		if (data)
			data?.categories.map((category) => {
				if (!categories.find((cat) => cat.id === category?.id)) {
					categories.push({
						id: category!.id,
						name: category!.name,
						currentQuestion: 0,
						totalQuestions: category?.questions.length || 0,
						correctAnswers: 0,
					});
				}
			});
		categoriesStateVar([...categories]);
	}, [data]);

	if (loading) return <div className="home-page-container">Loading...</div>;

	if (error && !data) return <div className="home-page-container">We got a problem. Try again later.</div>;

	if (data)
		return (
			<div className="home-page-container">
				<UserStatus />
				<QuizCategories />
			</div>
		);
}
