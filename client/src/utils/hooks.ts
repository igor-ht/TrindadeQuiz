import { GET_CURRENT_QUESTION, GET_CORRECT_ANSWER } from '@/apollo/queries';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';

export function useHandleCurrentQuestion(categoryId: string, questionId: string) {
	const {
		data: currentQuestionQuery,
		loading,
		error,
	} = useQuery(GET_CURRENT_QUESTION, {
		variables: { categoryId: categoryId, questionId: questionId },
		fetchPolicy: 'network-only',
	});

	const currentQuestion = currentQuestionQuery?.category.question;

	const [getCorrectAnswer, { data: correctAnswerQuery }] = useLazyQuery(GET_CORRECT_ANSWER);

	const correctAnswer = correctAnswerQuery?.category.question.correctAnswer;

	return { loading, error, currentQuestion, getCorrectAnswer, correctAnswer };
}

export function useLocalStorage<T>(key: string, initialValue: T) {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	const setValue = (value: T | ((val: T) => T)) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.log(error);
		}
	};

	return [storedValue, setValue] as const;
}
