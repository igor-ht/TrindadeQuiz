import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: ['http://localhost:3000/graphql', './src/apollo/schema.graphql'],
	documents: ['src/**/*.{ts,tsx}'],
	generates: {
		'src/apollo/__generated__/': {
			preset: 'client',
			presetConfig: {
				gqlTagName: 'gql',
			},
		},
	},
};

export default config;
