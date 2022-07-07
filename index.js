// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a short description of the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does the project have?',
        choices: ['MIT','GPL','Apache', 'BSD']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run in order to run tests?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What should the user know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should the user know about contributing to the repo?'
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/' + fileName + '.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README Created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then(readmeData => {return writeToFile('README', generateMarkdown(readmeData)) })
        .then(writeResponse => {
            console.log(writeResponse);
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
