import Quiz from '@/layout/Quiz/Quiz';

const CATEGORY_ID = 2;

export default function CssQuiz() {
	return (
		<div className="quizpage-container">
			<h1>Css Quiz</h1>
			<Quiz id={CATEGORY_ID} />
		</div>
	);
}
