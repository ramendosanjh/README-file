// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown"); // Import the generateMarkdown function.


// Create an array of questions for user input
const questions = [
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
       choices: ["MIT", "Apache", "ISC"],
      },
      {
       type: 'input',
       name: 'githubUsername',
       message: 'Enter your GitHub username:',
      },
      {
       type: 'input',
       name: 'email',
       message: 'Enter your email address:',
      },
];

// A function to write README file
function writeToFile(fileName, data) {
  const readmeContent = generateMarkdown(data);
  fs.writeFile(fileName, readmeContent, (err) =>
  err ? console.log('Error') : console.log('Success!!!!')
);
}

// A function to initialize the application
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const fileName = "README.md";
      writeToFile(fileName, answers);
    })
    .catch((error) => {
      console.error("Error occurred during prompts:", error);
    });
}


// Call the function to initialize the app
init();