import { gql } from './__generated__/gql';

const GET_ALL_CATEGORIES = gql(`
	query getAllCategories {
		categories {
			id
			name
			questions {
				id
				question
				answers
			}
		}
	}
`);

const GET_CORRECT_ANSWER = gql(`
	query getCorrectAnswer($categoryId: Int!, $questionId: Int!) {
		category(id: $categoryId) {
			question(id: $questionId) {
				correctAnswer
			}
		}
	}
`);

export { GET_ALL_CATEGORIES, GET_CORRECT_ANSWER };
