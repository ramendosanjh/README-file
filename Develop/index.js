// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer
.prompt ([ 
  {
    type: "input",
    name: "title",
    message: "Enter the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of the project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
    
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for the project:",
    choices: ["MIT", "Apache 2.0", "GNU GPLv3", "ISC", "Unlicense", "Other"],
  },
  {
    type: 'input',
    name: 'githubusername',
    message: 'Enter your github username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
])
.then((answers) => {
   const readmeContent = generateMarkdown(data);
  fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('Success!!!'))
});
// Call the function to initialize the app
init();
