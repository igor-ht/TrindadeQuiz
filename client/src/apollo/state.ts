import { makeVar } from '@apollo/client';

interface CategoryStateInterface {
	id: number;
	name: string;
	totalQuestions: number;
}

const categoriesStateVar = makeVar<CategoryStateInterface[]>([]);

export default categoriesStateVar;
