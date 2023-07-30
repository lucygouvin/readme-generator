const fs = require("fs/promises");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project title: ",
    name: "title",
  },
  {
    type: "input",
    message: "Description of the project: ",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions: ",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage instructions: ",
    name: "usage",
  },
  {
    type: "list",
    message: "Select a license: ",
    choices: ["MIT License", "Apache License 2.0", "GNU General Public License v3.0", "Mozilla Public License 2.0", "Eclipse Public License 2.0"],
    name: "license",
  },
  {
    type: "input",
    message: "How can the user contribute to the project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Test information: ",
    name: "test",
  },
  {
    type: "input",
    message: "GitHub username: ",
    name: "github",
  },
  {
    type: "input",
    message: "Email address: ",
    name: "email",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown.generateMarkdown(data))


}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {writeToFile('README.md',response)})
}

// Function call to initialize app
init();
