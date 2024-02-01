import Quiz from '@/layout/Quiz/Quiz';

export default function HtmlQuiz() {
	const CATEGORY_ID = '1';

	return (
		<div className="quizpage-container">
			<h1>Html Quiz</h1>
			<Quiz
				key={CATEGORY_ID}
				id={CATEGORY_ID}
			/>
		</div>
	);
}
