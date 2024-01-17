export type MockDataType = {
	id: number;
	name: string;
	questions: {
		id: number;
		question: string;
		answers: string[];
		correctAnswer: string;
	}[];
}[];

export const mockData: MockDataType = [
	{
		id: 1,
		name: 'html',
		questions: [
			{
				id: 1,
				question: 'What does HTML stand for?',
				answers: [
					'Hyper Text Markup Language',
					'High-level Text Markup Language',
					'Home Tool Markup Language',
					'Hyperlink and Text Markup Language',
					'Hypertext Transfer Markup Language',
				],
				correctAnswer: 'Hyper Text Markup Language',
			},
			{
				id: 2,
				question: 'Which HTML element is used to define an unordered list?',
				answers: ['ul', 'ol', 'li', 'dl', 'dt'],
				correctAnswer: 'ul',
			},
			{
				id: 3,
				question: 'What is the correct HTML for creating a hyperlink?',
				answers: [
					'<a href="http://www.example.com">Click me</a>',
					'<link src="http://www.example.com">Click me</link>',
					'<hyperlink>Click me</hyperlink>',
					'<a src="http://www.example.com">Click me</a>',
					'<url>Click me</url>',
				],
				correctAnswer: '<a href="http://www.example.com">Click me</a>',
			},
			{
				id: 4,
				question: 'Which attribute is used to provide additional information about an element in HTML?',
				answers: ['info', 'description', 'metadata', 'extra', 'additional'],
				correctAnswer: 'metadata',
			},
			{
				id: 5,
				question: 'In HTML, which tag is used to create a line break?',
				answers: ['<br>', '<lb>', '<break>', '<ln>', '<newline>'],
				correctAnswer: '<br>',
			},
			{
				id: 6,
				question: 'What is the purpose of the HTML "meta" tag?',
				answers: [
					'Define metadata about an HTML document',
					'Create a new HTML element',
					'Link an external stylesheet',
					'Define a paragraph',
					'Insert a media element',
				],
				correctAnswer: 'Define metadata about an HTML document',
			},
			{
				id: 7,
				question: 'Which HTML element is used to define the structure of an HTML document?',
				answers: ['<html>', '<head>', '<body>', '<structure>', '<document>'],
				correctAnswer: '<html>',
			},
			{
				id: 8,
				question: 'What does the "alt" attribute in the HTML "img" tag stand for?',
				answers: ['Alternate', 'Alignment', 'Attribute', 'All Text', 'Alternate Text'],
				correctAnswer: 'Alternate Text',
			},
			{
				id: 9,
				question: 'What is the correct way to comment out multiple lines in HTML?',
				answers: [
					'<!-- This is a comment -->',
					'// This is a comment',
					'/* This is a comment */',
					'# This is a comment',
					'-- This is a comment',
				],
				correctAnswer: '<!-- This is a comment -->',
			},
			{
				id: 10,
				question: 'Which HTML element is used to define the structure of an HTML table?',
				answers: ['<table>', '<tr>', '<td>', '<th>', '<tab>'],
				correctAnswer: '<table>',
			},
		],
	},
	{
		id: 2,
		name: 'css',
		questions: [
			{
				id: 1,
				question: 'Which property is used to change the text color in CSS?',
				answers: ['text-color', 'color', 'font-color', 'text-style', 'text-fill'],
				correctAnswer: 'color',
			},
			{
				id: 2,
				question: 'What does CSS stand for?',
				answers: [
					'Counter Strike: Source',
					'Computer Style Sheets',
					'Creative Style System',
					'Cascading Style Sheets',
					'Colorful Style Sheets',
				],
				correctAnswer: 'Cascading Style Sheets',
			},
			{
				id: 3,
				question: 'Which CSS property is used to set the background color of an element?',
				answers: ['bgcolor', 'background-color', 'color-background', 'element-color', 'background'],
				correctAnswer: 'background-color',
			},
			{
				id: 4,
				question: 'In CSS, which selector targets all elements on the page?',
				answers: ['* selector', '.all selector', '#all selector', '$all selector', '&all selector'],
				correctAnswer: '* selector',
			},
			{
				id: 5,
				question: 'What is the purpose of the CSS "float" property?',
				answers: [
					'Make an element float on the page',
					'Float text to the left or right',
					'Create a floating image',
					'Set the position of an element',
					'Float an entire section',
				],
				correctAnswer: 'Float text to the left or right',
			},
			{
				id: 6,
				question: 'Which CSS property is used to control the spacing between lines of text?',
				answers: ['line-height', 'text-spacing', 'letter-spacing', 'line-spacing', 'text-line'],
				correctAnswer: 'line-height',
			},
			{
				id: 7,
				question: 'What is the CSS box model used for?',
				answers: [
					'Layout and design of elements on a page',
					'Creating 3D effects',
					'Styling form elements',
					'Boxing images',
					'Adding borders to elements',
				],
				correctAnswer: 'Layout and design of elements on a page',
			},
			{
				id: 8,
				question: 'Which CSS property is used to set the width of an element in percentage?',
				answers: ['width', 'size', 'percentage-width', 'element-width', 'width-percentage'],
				correctAnswer: 'width',
			},
			{
				id: 9,
				question: 'What does the CSS property "position: absolute" do?',
				answers: [
					'Positions an element relative to its normal position',
					'Removes an element from the flow of the document',
					'Aligns an element to the right',
					'Makes an element transparent',
					'Adjusts the opacity of an element',
				],
				correctAnswer: 'Positions an element relative to its normal position',
			},
			{
				id: 10,
				question: 'Which CSS pseudo-class is used to select and style the last child of an element?',
				answers: [':last-child', ':nth-child', ':first-child', ':child-last', ':end-child'],
				correctAnswer: ':last-child',
			},
		],
	},
	{
		id: 3,
		name: 'javascript',
		questions: [
			{
				id: 1,
				question: 'What is the purpose of the "typeof" operator in JavaScript?',
				answers: [
					'Determine the type of a variable',
					'Create a new variable',
					'Define a function',
					'Loop through an array',
					'Concatenate strings',
				],
				correctAnswer: 'Determine the type of a variable',
			},
			{
				id: 2,
				question: 'What is a closure in JavaScript?',
				answers: [
					'A way to close the browser window',
					'A block of code that can be executed',
					'A way to protect variables',
					'A combination of a function and the lexical environment within which that function was declared',
					'A way to comment out code',
				],
				correctAnswer: 'A combination of a function and the lexical environment within which that function was declared',
			},
			{
				id: 3,
				question: 'What keyword is used to declare a variable in JavaScript?',
				answers: ['var', 'let', 'const', 'int', 'string'],
				correctAnswer: 'var',
			},
			{
				id: 4,
				question: 'What does the "this" keyword refer to in JavaScript?',
				answers: ['The current function', 'The global object', 'The calling object', 'A specific variable', 'A reserved keyword'],
				correctAnswer: 'The calling object',
			},
			{
				id: 5,
				question: 'Which method is used to add a new element to the end of an array in JavaScript?',
				answers: ['push()', 'pop()', 'shift()', 'unshift()', 'concat()'],
				correctAnswer: 'push()',
			},
			{
				id: 6,
				question: 'What is the purpose of the "addEventListener" method in JavaScript?',
				answers: [
					"Modify an element's style",
					'Attach an event handler function to an element',
					'Create a new HTML element',
					'Remove an event listener',
					'Trigger an event manually',
				],
				correctAnswer: 'Attach an event handler function to an element',
			},
			{
				id: 7,
				question: 'What is the result of the expression 5 + "5" in JavaScript?',
				answers: ['55', '10', 'Error', '25', 'Undefined'],
				correctAnswer: '55',
			},
			{
				id: 8,
				question: 'How do you comment out a single line in JavaScript?',
				answers: [
					'// This is a comment',
					'# This is a comment',
					'-- This is a comment',
					'/* This is a comment */',
					'<!-- This is a comment -->',
				],
				correctAnswer: '// This is a comment',
			},
			{
				id: 9,
				question: 'What is the purpose of the "JSON.parse()" method in JavaScript?',
				answers: [
					'Parse a string as JSON',
					'Stringify a JSON object',
					'Create a new JSON object',
					'Format a JSON string',
					'Encode a JSON object',
				],
				correctAnswer: 'Parse a string as JSON',
			},
			{
				id: 10,
				question: 'Which loop is used for iterating over the properties of an object in JavaScript?',
				answers: ['for...in loop', 'for loop', 'while loop', 'do...while loop', 'forEach loop'],
				correctAnswer: 'for...in loop',
			},
		],
	},
];

// Example usage:
export const htmlQuestions = mockData[0];
export const cssQuestions = mockData[1];
export const javascriptQuestions = mockData[2];
