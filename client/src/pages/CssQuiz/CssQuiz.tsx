import Quiz from '@/layout/Quiz/Quiz';

export default function CssQuiz() {
	const CATEGORY_ID = 2;
	return (
		<div className="quizpage-container">
			<h1>Css Quiz</h1>
			<Quiz id={CATEGORY_ID} />
		</div>
	);
}
