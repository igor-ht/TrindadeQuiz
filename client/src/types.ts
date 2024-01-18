export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
};

/** Category type */
export type Category = {
	__typename?: 'Category';
	id: Scalars['Int']['output'];
	name: Scalars['String']['output'];
	question: Question;
	questions: Array<Maybe<Question>>;
};

/** Category type */
export type CategoryQuestionArgs = {
	id?: InputMaybe<Scalars['Int']['input']>;
};

/** Root Query */
export type Query = {
	__typename?: 'Query';
	/** List of all categories */
	categories: Array<Maybe<Category>>;
	/** Category by id */
	category: Category;
};

/** Root Query */
export type QueryCategoryArgs = {
	id?: InputMaybe<Scalars['Int']['input']>;
};

/** Question Type */
export type Question = {
	__typename?: 'Question';
	answers: Array<Maybe<Scalars['String']['output']>>;
	correctAnswer: Scalars['String']['output'];
	id: Scalars['Int']['output'];
	question: Scalars['String']['output'];
};
