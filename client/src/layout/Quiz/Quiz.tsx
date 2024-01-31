import './Quiz.scss';
import Button from './components/Button/Button';
import categoriesStateVar from '@/apollo/state';
import { useHandleCurrentQuestion } from '@/utils/hooks';
import { useState } from 'react';

type QuizProps = {
	id: number;
};

type CurrentAnswer = {
	answer: string;
	status: 'idle' | 'correct' | 'incorrect';
};

export default function Quiz(props: QuizProps) {
	const [currentAnswer, setCurrentAnswer] = useState<CurrentAnswer>({ answer: '', status: 'idle' });
	const { loading, error, currentQuestion, getCorrectAnswer, correctAnswer, categoriesState } = useHandleCurrentQuestion(props.id);

	const handleQuestionAnswered = async () => {
		const res = await getCorrectAnswer();
		if (res) {
			if (res.data?.category.question.correctAnswer === currentAnswer.answer) {
				setCurrentAnswer({ answer: currentAnswer.answer, status: 'correct' });
			} else {
				setCurrentAnswer({ answer: currentAnswer.answer, status: 'incorrect' });
			}
		}
	};

	const handleNextQuestion = () => {
		categoriesStateVar(
			categoriesState.map((category) => {
				if (category.id === props.id) {
					return {
						...category,
						currentQuestion: category.currentQuestion! + 1,
						correctAnswers: (currentAnswer.status === 'correct' ? 1 : 0) + category.correctAnswers!,
					};
				}
				return category;
			})
		);
		setCurrentAnswer({ answer: '', status: 'idle' });
	};

	if (loading) {
		return (
			<div className="quiz-container">
				<p>Loading...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="quiz-container">
				<p>Error: {error.message}</p>
			</div>
		);
	}

	if (!currentQuestion)
		return (
			<div className="quiz-container">
				<p>Quizz is complete!</p>
			</div>
		);

	return (
		<div className="quiz-container">
			<div className="current-question">
				<p className="question">Question: {currentQuestion.question}</p>
				<ul>
					{currentQuestion.answers.map((answer, i) => {
						if (answer)
							return (
								<li
									className={
										answer === currentAnswer.answer
											? currentAnswer.status === 'idle'
												? 'selected'
												: currentAnswer.status
											: currentAnswer.answer === answer && correctAnswer === answer
											? 'correct'
											: ''
									}
									onClick={() => setCurrentAnswer({ answer: answer, status: 'idle' })}
									key={i}>
									{answer}
								</li>
							);
					})}
				</ul>
				<Button
					className="check-answer-button"
					type="button"
					onClick={handleQuestionAnswered}
					disabled={!currentAnswer.answer || currentAnswer.status !== 'idle'}
				/>
				<button
					type="button"
					onClick={handleNextQuestion}>
					Next question
				</button>
			</div>
		</div>
	);
}
