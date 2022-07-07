# 09 Node.js: Professional README Generator

This project is a command-line application used to dynamically create a complete README.md file for any given project based on the user's input. The project uses [Inquirer package](https://www.npmjs.com/package/inquirer) to prompt the user for their input and uses their responses to generate the file. The README generated will have a table of contents and description, installation, usage, license, contributing, tests and questions sections.

The application can be run by installing the code and running in the terminal with the following command:

```
node index
```

## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Product

Example README created by the generator can be found in the dist folder of the project.

The following demonstration can be viewed as a video on YouTube at this location: [README Generator](https://www.youtube.com/watch?v=Cc4trKLPNAg)

![GIF Demonstrating Using the Generator](./Generator_Demo.gif)
