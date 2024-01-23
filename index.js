//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const image = require('./lib/svg.js');
const { Square, Circle, Triangle, } = require("./lib/shapes.js");

// Function to initialize app with inquirer prompts
function init() {

    inquirer
        .prompt([
        {
            type: 'input',
            message: 'Enter text for logo (max 3 chars):',
            name: 'text',
            default: 'svg'
        },
        {
            type: 'input',
            message: 'Enter text color:',
            name: 'tcolor',
        },
        {
            type: 'checkbox',
            message: 'Select a shape:',
            name: 'shape',
            choices: ["Circle", "Triangle", "Square"],
        },
        {
            type: 'input',
            message: 'Enter the color of the shape:',
            name: 'scolor',
        },
    ])
    .then((response) => {
        console.log(response);
        //fs.writeFile('./examples/myImage.svg', response , (err) =>
        //err ? console.error(err) : console.log('Generated logo.svg')
        //);
    });
}

// Function call to initialize app
init();
