import Quiz from '@/layout/Quiz/Quiz';

const CATEGORY_ID = 3;

export default function JavascriptQuiz() {
	return (
		<div className="quizpage-container">
			<h1>JavaScript Quiz</h1>
			<Quiz id={CATEGORY_ID} />
		</div>
	);
}
