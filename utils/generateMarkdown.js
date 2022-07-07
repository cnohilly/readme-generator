// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub License](${renderLicenseLink(license)})`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://img.shields.io/badge/license-${license}-green`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseBadge(license)}
    
  This project is currently licensed under the ${license} license.
    `;
  } else {
    `This project does not currently have a license specified.`;
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install the necessary dependencies, run the following command:

  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests for the project, use the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  For any questions or concerns, please open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find my other work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
