const inquirer = require('inquirer');

const init = async () => {
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
			type: 'confirm',
			message: 'Does your application require an installation?',
			name: 'confirmInstallation',
		},
		{
			type: 'input',
			message: 'Enter the installation process:',
			name: 'installation',
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
	let answer = [];
	const {
		title,
		description,
		installation,
		confirmUsage,
		usage,
		license,
		email,
	} = await inquirer.prompt(questions);
	answer = [title, description, installation, usage, license, email];
	console.log(answer);
};
init();
