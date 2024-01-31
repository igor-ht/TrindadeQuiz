import { gql } from './__generated__';

const GET_ALL_CATEGORIES = gql(`
	query GetAllCategories {
		categories {
			id
			name
			questions {
				id
			}
		}
	}
`);

const GET_ALL_QUESTIONS_FROM_CATEGORY = gql(`
	query GetAllQuestionsFromCategory($id: Int!) {
		category(id: $id) {
			name
			questions {
				id
				question
				answers
				status @client
			}
		}
	}
`);

const GET_CORRECT_ANSWER = gql(`
	query GetCorrectAnswer($categoryId: Int!, $questionId: Int!) {
		category(id: $categoryId) {
			question(id: $questionId) {
				correctAnswer
			}
		}
	}
`);

export { GET_ALL_CATEGORIES, GET_ALL_QUESTIONS_FROM_CATEGORY, GET_CORRECT_ANSWER };
