import { makeVar } from '@apollo/client';

interface CategoryStateInterface {
	id: number;
	name: string;
	currentQuestion: number;
	totalQuestions: number;
	correctAnswers: number;
}

const categoriesStateVar = makeVar<CategoryStateInterface[]>([]);

export default categoriesStateVar;
