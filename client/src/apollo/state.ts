import { makeVar } from '@apollo/client';

interface CategoryStateInterface {
	id: number;
	name: string;
	totalQuestions: number;
	currentQuestion: number;
	correctAnswers: number;
}

interface StateInterface {
	points: number;
	progress: number;
	categories: CategoryStateInterface[];
}

const gameStateVar = makeVar<StateInterface>({
	points: 0,
	progress: 0,
	categories: [],
});

export default gameStateVar;
