const fs = require('fs');       // necessary for saving the README using the file system
const inquirer = require('inquirer');   // necessary to prompt the user for input for the project
const generateMarkdown = require('./utils/generateMarkdown');


// Simple array of questions to pass to inquirer, all simple objects with type, name and message, with choices for questions that require options
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
        choices: ['MIT', 'GPL', 'Apache', 'BSD']
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

// Using promises, this function is responsible for writing the generated README file to the specified destination
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        // writes to the file in the dist directory under the name specified
        fs.writeFile('./dist/' + fileName + '.md', data, err => {
            // if there is an error the promise rejects
            if (err) {
                reject(err);
                return;
            }
            // otherwise the promise is resolved and a message is sent back
            resolve({
                ok: true,
                message: 'README Created!'
            });
        });
    });
};

// function that initializes the app, using promises to prompt the user, generate the markdown for the README, then saves the file with the writeToFile function
const init = () => {
    // prompts the user with the array of questions
    inquirer.prompt(questions)
        // uses the responses from the user to generate the markdown and write the file to the specified name
        .then(readmeData => { return writeToFile('README', generateMarkdown(readmeData)) })
        // logs the response from the write to file function
        .then(writeResponse => {
            console.log(writeResponse);
        })
        // catches any errors that may occur in any of the functions and logs them
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
