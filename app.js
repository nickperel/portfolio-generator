const inquirer = require("inquirer");

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Please enter your GitHub Username:'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};
    // promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {
    // if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
          },
          {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
          },
          {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
          }
    ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
}


promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatepage(name, github);

// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio Complete! Check out index.html to see the output!');
// });



// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i++) {

//         console.log(profileDataArr[i]);
//     }

//     console.log("=================")

//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);