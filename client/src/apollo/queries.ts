import { gql } from './__generated__';

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

const GET_ALL_QUESTIONS_FROM_CATEGORY = gql(`
	query getAllQuestionsFromCategory($categoryId: Int!) {
		category(id: $categoryId) {
			question {
				id
				question
				questionStatus @client
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
