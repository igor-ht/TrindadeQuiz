import './Quiz.scss';
import { GET_ALL_QUESTIONS_FROM_CATEGORY, GET_CORRECT_ANSWER } from '@/apollo/queries';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import Button from './components/Button/Button';

type QuizProps = {
	id: number;
};

type CurrentAnswer = {
	answer: string;
	status: 'idle' | 'correct' | 'incorrect';
};

export default function Quiz(props: QuizProps) {
	const { data: allQuestions, loading, error } = useQuery(GET_ALL_QUESTIONS_FROM_CATEGORY, { variables: { id: props.id } });
	const currentQuestion = allQuestions?.category.questions.find((question) => question?.status === 'not answered');
	const [getCorrectAnswer, { data }] = useLazyQuery(GET_CORRECT_ANSWER, {
		variables: { categoryId: props.id, questionId: currentQuestion?.id || 0 },
	});
	const [currentAnswer, setCurrentAnswer] = useState<CurrentAnswer>({ answer: '', status: 'idle' });

	const handleQuestionAnswered = async () => {
		await getCorrectAnswer();
	};

	useEffect(() => {
		if (data) {
			if (data.category.question.correctAnswer === currentAnswer.answer) {
				setCurrentAnswer({ answer: currentAnswer.answer, status: 'correct' });
			} else {
				setCurrentAnswer({ answer: currentAnswer.answer, status: 'incorrect' });
			}
		}
	}, [data]);

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
											: data?.category.question.correctAnswer === answer
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
					disabled={!Boolean(currentAnswer.answer) || currentAnswer.status !== 'idle'}
				/>
			</div>
		</div>
	);
}
