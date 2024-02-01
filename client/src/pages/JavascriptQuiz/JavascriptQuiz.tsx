import Quiz from '@/layout/Quiz/Quiz';

export default function JavascriptQuiz() {
	const CATEGORY_ID = '3';
	return (
		<div className="quizpage-container">
			<h1>JavaScript Quiz</h1>
			<Quiz
				key={CATEGORY_ID}
				id={CATEGORY_ID}
			/>
		</div>
	);
}
