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

const GET_CURRENT_QUESTION = gql(`
	query GetCurrentQuestion($categoryId: ID!, $questionId: ID!) {
		category(id: $categoryId) {
			id
			name
			question (id: $questionId) {
				id
				question
				answers
			}
		}
	}
`);

const GET_ALL_QUESTIONS_FROM_CATEGORY = gql(`
	query GetAllQuestionsFromCategory($id: ID!) {
		category(id: $id) {
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
	query GetCorrectAnswer($categoryId: ID!, $questionId: ID!) {
		category(id: $categoryId) {
			id
			question(id: $questionId) {
				id
				correctAnswer
			}
		}
	}
`);

export { GET_ALL_CATEGORIES, GET_CURRENT_QUESTION, GET_ALL_QUESTIONS_FROM_CATEGORY, GET_CORRECT_ANSWER };
