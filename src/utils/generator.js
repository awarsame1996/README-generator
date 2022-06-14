const generateReadme = (answers, generateContentList) => {
	console.log(answers);
	return `# ${answers.title} ![${answers.license}](https://img.shields.io/badge/${answers.license}-License-green)

    ## Table of Contents
    
 ${generateContentList}
    ## Description
    
    ${answers.description}
    
    ## Installation
    
    Please follow the instructions below:
    
  
    
    ## Usage
    
    Please follow the instructions below:
    

    
    ## License
    
    ${answers.license} License
    
    ## Contributing
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    
    ## Tests
    
    Please follow the instructions below:
    
    
    
    ## Questions
    
    Please contact me on my email: ${answers.email}
    
    Visit my GitHub profile [here](https://github.com/${answers.github})
    `;
};

module.exports = {
	generateReadme,
};
