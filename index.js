// Requre FS to be able to write files
const fs = require("fs/promises");
// Requre Inquirer to be able to ask questions to the user
const inquirer = require("inquirer");
// Require the JavaScript file containing the function for generating the markdown file
const generateMarkdown = require("./utils/generateMarkdown.js");

//Array of questions for user input
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
    choices: [
      {
        name: "MIT License",
        value: {
          title: "MIT License",
          badge:
            "![Static Badge](https://img.shields.io/badge/license-MIT_License-green)",
          url: "https://opensource.org/license/mit/",
          text: "This program is covered under the MIT License.",
        },
      },
      {
        name: "Apache License 2.0",
        value: {
          title: "Apache License 2.0",
          badge:
            "![Static Badge](https://img.shields.io/badge/license-Apache_License_2.0-green)",
          url: "https://www.apache.org/licenses/LICENSE-2.0",
          text: "This program is covered under the Apache License 2.0.",
        },
      },
      {
        name: "GNU General Public License v3.0",
        value: {
          title: "GNU General Public License v3.0",
          badge:
            "![Static Badge](https://img.shields.io/badge/license-GNU_General_Public_License_v3.0-green)",
          url: "https://www.gnu.org/licenses/gpl-3.0.en.html#license-text",
          text: "This program is covered under the GNU General Public License v3.0.",
        },
      },
      {
        name: "Mozilla Public License 2.0",
        value: {
          title: "Mozilla Public License 2.0",
          badge:
            "![Static Badge](https://img.shields.io/badge/license-Mozilla_Public_License_2.0-green)",
          url: "https://www.mozilla.org/en-US/MPL/2.0/",
          text: "This program is covered under the Mozilla Public License 2.0.",
        },
      },
      {
        name: "Eclipse Public License 2.0",
        value: {
          title: "Eclipse Public License 2.0",
          badge:
            "![Static Badge](https://img.shields.io/badge/license-Eclipse_Public_License_2.0-green)",
          url: "https://www.eclipse.org/legal/epl-2.0/",
          text: "This program is covered under the Eclipse Public License 2.0.",
        },
      },
    ],
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

// Pass the user's responses to the generateMarkdown function, save the resulting content as a new file.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown.generateMarkdown(data))
    .then(() => console.log("README.md Created!"))
    .catch((err) => console.error(err));
}

// Initialize the app by prompting for questions with inquirer
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      writeToFile("README.md", response);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
