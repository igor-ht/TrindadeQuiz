import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLInt } from 'graphql';
import { mockData } from '../model/data';

const QuestionType = new GraphQLObjectType({
	name: 'Question',
	fields: {
		id: { type: GraphQLNonNull(GraphQLInt) },
		question: { type: GraphQLNonNull(GraphQLString) },
		answers: { type: GraphQLNonNull(new GraphQLList(GraphQLString)) },
		correctAnswer: { type: GraphQLNonNull(GraphQLString) },
	},
});

const CategoryType = new GraphQLObjectType({
	name: 'Category',
	fields: {
		id: { type: GraphQLNonNull(GraphQLInt) },
		name: { type: GraphQLNonNull(GraphQLString) },
		questions: { type: GraphQLNonNull(new GraphQLList(QuestionType)) },
	},
});

const RootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'Root Query',
	fields: {
		categories: {
			type: new GraphQLList(CategoryType),
			description: 'List of all categories.',
			resolve: () => mockData,
		},
	},
});

const schema = new GraphQLSchema({
	query: RootQueryType,
});

export default schema;
