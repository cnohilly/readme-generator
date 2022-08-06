// If there is no license, return an empty string, otherwise return the markdown for an image of the license
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub License](${renderLicenseLink(license)})`
  } else {
    return '';
  }
}

// If there is no license, return an empty string, otherwise return the url for the license to be rendered
function renderLicenseLink(license) {
  if (license) {
    return `https://img.shields.io/badge/license-${license}-green`
  } else {
    return '';
  }
}

// If there is no license, return an empty string, otherwise create and return the markdown for the license section
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseBadge(license)}
    
  This project is currently licensed under the ${license} license.
    `;
  } else {
    `This project does not currently have a license specified.`;
  }
}

// generates all the markdown for the readme file, creating all the sections, table of contens, and links
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

// exports the generateMarkdown function
module.exports = generateMarkdown;
