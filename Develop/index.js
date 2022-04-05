// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Please provide a short description explaining the what, why, and how of your project.',
    'Please provide installation instructions, if any.',
    'Please provide usage information, if any',
    'Please contribution guidelines, if any.',
    'Please provide test instructions, if any.',
    'Please choose a license for your application from a list of options',
    'Please enter your GitHub username',
    'What is your email address?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
        return inquirer.prompt([
        {
          type: 'input',
          name: 'projectTitle',
          message: questions[0], 
          validate: projectInput => {
            if (projectInput) {
              return true;
            } 
            else {
              console.log(questions[0]);
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'projectDesc',
          message: questions[1], 
          validate: projectInput => {
            if (projectInput) {
              return true;
            } 
            else {
              console.log(questions[1]);
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'installInst',
          message: questions[2], 
        },
        {
          type: 'input',
          name: 'usageInfo',
          message: questions[3], 
        },
        {
          type: 'input',
          name: 'contribution',
          message: questions[4], 
        },
        {
          type: 'input',
          name: 'testInst',
          message: questions[5], 
        },
        {
          type: 'list',
          name: 'license',
          message: questions[6], 
          choices: ['MIT License (https://choosealicense.com/licenses/mit/)', 'GNU General Public License v3.0 (https://choosealicense.com/licenses/gpl-3.0/)']
        },
        {
          type: 'input',
          name: 'githut',
          message: questions[7], 
          validate: projectInput => {
            if (projectInput) {
              return true;
            } 
            else {
              console.log(questions[7]);
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'email',
          message: questions[8]
          
        }
      ])
      .then(answers => {
        console.info('Answers:', answers);
      });
}

// Function call to initialize app
init();


// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?'
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL']
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis']
//     }
//   ])
//   .then(data => {
//     const filename = `${data.name
//       .toLowerCase()
//       .split(' ')
//       .join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), err =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });



