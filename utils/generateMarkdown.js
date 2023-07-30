// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contribution, test, github, email}) {
  return `# ${title}
  ## Description
  ${description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## License
  
  ## How to Contribute
  ${contribution}
  
  ## Tests
  ${test}
  
  ## Questions
  For additional questions about this project, please see my GitHub page: <https://www.github.com/${github}>  
  or email me at: <${email}>
  
`;
}

module.exports ={
  generateMarkdown
};
