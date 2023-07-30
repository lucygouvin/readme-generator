function generateMarkdown({title, description, installation, usage, license, contribution, test, github, email}) {
  return `# ${title}
  [${license.badge}](${license.url})
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
  ${license.text}  
  Full text of this license can be found here: <${license.url}>
  
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
