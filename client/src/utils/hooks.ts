import { GET_ALL_QUESTIONS_FROM_CATEGORY, GET_CORRECT_ANSWER } from '@/apollo/queries';
import categoriesStateVar from '@/apollo/state';
import { useQuery, useReactiveVar, useLazyQuery } from '@apollo/client';

export function useHandleCurrentQuestion(id: number) {
	const { data: allQuestions, loading, error } = useQuery(GET_ALL_QUESTIONS_FROM_CATEGORY, { variables: { id: id } });

	const categoriesState = useReactiveVar(categoriesStateVar);
	const category = categoriesState.find((category) => category.id === id);
	const currentQuestionIndex = category?.currentQuestion;
	const currentQuestion = allQuestions?.category.questions[currentQuestionIndex || 0];

	const [getCorrectAnswer, { data: correctAnswerQuery }] = useLazyQuery(GET_CORRECT_ANSWER, {
		variables: { categoryId: id, questionId: currentQuestion?.id || 0 },
	});

	const correctAnswer = correctAnswerQuery?.category.question.correctAnswer;

	return { loading, error, currentQuestion, getCorrectAnswer, correctAnswer, categoriesState };
}
