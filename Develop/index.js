// TODO: Include packages needed for this application
const fs = require('fs');
const fetch = require('node-fetch');
const inquirer = require('inquirer');


const questions = [
    'What is the title of your project?',
    'Please provide a short description of your project.',
    'Please provide installation instructions, if any.',
    'Please provide usage information, if any',
    'Please contribution guidelines, if any.',
    'Please provide test instructions, if any.',
    'Please choose a license for your application from a list of options',
    'Please enter your GitHub username',
    'What is your email address?'
];


const getLicenses = () => {
  const allLicenses = [];
  const licenseAPI = 'https://api.github.com/licenses';
  fetch(licenseAPI)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      //console.log(data);
      for (var i=0; i<data.length; i++) {
        allLicenses.push(data[i].name);
      }
    })
    return allLicenses;
}; 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
          choices: getLicenses()
        },
        {
          type: 'input',
          name: 'github',
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
        const fileData = `# ${answers.projectTitle}\n ## Description\n ${answers.projectDesc}\n ## Installation\n ${answers.installInst} ## Usage\n ${answers.usageinfo}\n  ## Contributing\n ${answers.contribution}\n ## Tests\n ${answers.testInst}\n`
       // fileData += `## License\n ${answers.license}\n ## Questions [github/${answers.github}](https://github.com/${answers.github})`
       // console.log(fileData);

        //[github/ravnishgupta](https://github.com/ravnishgupta)
      });
}

// Function call to initialize app
init();


