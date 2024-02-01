import categoriesStateVar from '@/apollo/state';
import { GET_CURRENT_QUESTION, GET_CORRECT_ANSWER } from '@/apollo/queries';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';

export function useHandleCurrentQuestion(id: string) {
	const categoriesState = categoriesStateVar();
	const currentCategory = categoriesState.find((currentCategory) => currentCategory.id === id);
	const currentQuestionId = ((currentCategory?.currentQuestion || 0) + 1).toString() || '1';

	const { data, loading, error } = useQuery(GET_CURRENT_QUESTION, {
		variables: { categoryId: id, questionId: currentQuestionId },
		fetchPolicy: 'cache-and-network',
	});

	const currentQuestion = data?.category.question;

	const [getCorrectAnswer, { data: correctAnswerQuery }] = useLazyQuery(GET_CORRECT_ANSWER, {
		variables: { categoryId: id, questionId: currentQuestionId },
		fetchPolicy: 'network-only',
	});

	const correctAnswer = correctAnswerQuery?.category.question.correctAnswer;

	return { loading, error, currentQuestion, getCorrectAnswer, correctAnswer, categoriesState, currentCategory };
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
