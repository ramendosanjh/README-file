// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  const licenseBadges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    Apache: "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  };

  return `![License](${licenseBadges[license]})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }

  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    Apache: "https://opensource.org/licenses/Apache-2.0",
    ISC: "https://opensource.org/licenses/ISC",
  };

  return `[License](${licenseLinks[license]})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  return `
## License
This project is licensed under the ${license} License. 
${licenseBadge} ${licenseLink}
`;
}

// Function to render any additional badges
function renderAdditionalBadges(data) {
  // Define and return any additional badges you want to include
  // Example:
  return `[![Badge Name](Badge URL)](Additional Badge URL)`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

${renderAdditionalBadges(data)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} License. 
${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}

## Questions
For any questions or inquiries, please contact me via GitHub: [${
    data.githubusername
  }](https://github.com/${data.githubusername}) or Email: ${data.email}
`;
}

//to export generateMarkdown and use its data in another js file
module.exports = generateMarkdown;