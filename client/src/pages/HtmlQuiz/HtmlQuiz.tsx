import Quiz from '@/layout/Quiz/Quiz';

const CATEGORY_ID = 1;

export default function HtmlQuiz() {
	return (
		<div className="quizpage-container">
			<h1>Html Quiz</h1>
			<Quiz id={CATEGORY_ID} />
		</div>
	);
}
