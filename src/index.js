const inquirer = require('inquirer');
const fs = require('fs');
const { generateReadme } = require('./utils/generator');
const questions = [
	{
		type: 'input',
		message: 'Enter Project Title:',
		name: 'title',
	},
	{
		type: 'input',
		message: 'Enter the description of the project:',
		name: 'description',
	},
	{
		type: 'checkbox',
		message: 'Please select the content you would like to go to:',
		name: 'content',
		choices: [
			'Description',
			'Instillation',
			'Usage',
			'License',
			'Contribution',
			'Tests',
			'Contact',
		],
	},
	{
		type: 'confirm',
		message: 'Does your application require an installation?',
		name: 'confirmInstallation',
	},
	{
		type: 'input',
		message: 'Enter the installation process:',
		name: 'installation',
		when: (answers) => answers.confirmInstallation === true,
	},
	{
		type: 'confirm',
		message: 'do you your application required usage instructions?',
		name: 'confirmUsage',
	},
	{
		type: 'input',
		message: 'Enter the usage instruction:',
		name: 'usage',
		when: (answers) => answers.confirmUsage === true,
	},
	{
		name: 'license',
		type: 'list',
		message: 'choose your license',
		choices: ['MIT', 'Apache', 'GNU General public', 'Boost Software'],
	},
	{
		type: 'input',
		name: 'github',
		message: 'Enter your GitHub Username',
	},
	{
		type: 'input',
		name: 'email',
		message: 'Enter your email',
	},
];

const init = async () => {
	const answers = await inquirer.prompt(questions);
	const contents = answers.content;
	const generateContentList = contents.map((content) => {
		return `[${content}](#${content}) <br>`;
	});

	// return data;
	const md = generateReadme(answers, generateContentList);

	fs.writeFileSync('./generatedReadme.md', md);
};
init();
